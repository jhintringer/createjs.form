(function(cjs) {

    cjs.Form = {
        convert: function(element, typeClass, opts) {
            var formElement;
            if(opts == undefined) opts = {};
            switch(typeClass.toString().toLowerCase()) {
                case 'input':
                case 'textinput':
                    formElement = TextInput(element, opts);
                    break;
                case 'checkbox':
                    formElement = Checkbox(element, opts);
                    break;
                case 'select':
                    formElement = SelectBox(element, opts);
                    break;

            }
            return formElement;
        },
        validate: function(elements) {
            var valid = true;
            if(!Array.isArray(elements)) elements = [elements];
            elements.forEach(function(el) {
                var isElValid = (!el.isValid || el.isValid());
                if(!isElValid && typeof el.onInvalid == 'function') {
                    try { el.onInvalid.bind(el)(el.value); } catch(e) { console.error(e); }
                }
                valid = valid == false ? false : isElValid;
            });
            return valid;
        },
        elements: {},
		focussedElement: null,
        TEXTINPUT: 'input',
        CHECKBOX: 'checkbox',
        SELECT: 'select'
    };

    function base(element, type, opts) {
        if(element.formElement) return element.formElement;
        var instance_name = null;
        for(var prop in element.parent) {
            if(element.parent.hasOwnProperty(prop) && element.parent[prop] == element) {
                instance_name = prop;
                break;
            }
        }
        element.formElement = this.elements[instance_name] = {
            container: new cjs.Container(),
            parts: {},
            element: null,
            parent: element.parent,
            name: element.name,
            id: instance_name,
            index: opts.index != undefined ? opts.index : Object.keys(cjs.Form.elements).length,
            type: type,
            width: Math.max(element.lineWidth, element.getMeasuredWidth()),
            height: Math.max(element.lineHeight, element.getMeasuredHeight()),
            has_focus: false,
            has_changed: false,
            required: opts.required || false,
            listener: {},
            on: function(event, callback) {
                if(typeof callback != 'function') return console.error("EventHandler must be a function");
                if(!this.listener[event]) this.listener[event] = [];
                this.listener[event].push(callback);
            },
            off: function(event, callback) {
                if(this.listener[event]) {
                    if(callback != undefined) {
                        var ix = this.listener[event].indexOf(callback);
                        if(ix > -1) this.listener[event].splice(ix, 1);
                        if(this.listener[event].length == 0) {
                            this.listener[event] = undefined;
                            delete this.listener[event];
                        }
                    } else {
                        this.listener[event] = undefined;
                        delete this.listener[event];
                    }
                }
            }
        };
        if(typeof opts.onInvalid == 'function') element.formElement.onInvalid = opts.onInvalid;
        element.formElement.element = element;
        element.formElement.container.formElement = element.formElement;

        Object.defineProperty(element.formElement, 'x', {
            get: function() { return this.container.x; },
            set: function(value) {
                if(this.container.mask) this.container.mask.x = value - this.container.mask.offsets.x;
                this.container.x = value;
                return this.container.x;
            }
        });
        Object.defineProperty(element.formElement, 'y', {
            get: function() { return this.container.y; },
            set: function(value) {
                if(this.container.mask) this.container.mask.y = value - this.container.mask.offsets.x;
                this.container.y = value;
                return this.container.y;
            }
        });
        return element.formElement;
    }

    function TextInput(element, opts) {
        var el = base.bind(cjs.Form)(element, "input", opts);
        var offsetLeft = 7;
        el.container.mask = new cjs.Shape();
        el.container.mask.graphics.beginFill("#000000").drawRect(element.x - 5, element.y - 6, el.width + 10, el.height + 12);
        el.container.mask.offsets = {x: element.x - 5, y: element.y - 6};
        
        el.container.cursor = 'text';
        // Define Background
        el.container.background = new cjs.Shape();
        el.container.background.graphics.f("#FFFFFF").s("#666666").ss(0.4,1,1,3,true).p("AnznzIPnAAIAAPnIvnAAg");
        el.container.addChild(el.container.background);
        el.container.background.setTransform(el.width/2, el.height/2, (el.width+10)/100, (el.height+12)/100);
        // Input Line (clone of original Element)
        el.parts.textline = element.clone();
        el.container.addChild(el.parts.textline);
        el.parts.textline.setTransform(offsetLeft, 0, 1, 1);
        //el.parts.textline.text = "";
        element.visible = false;
        // Setup config
        el.placeholder = opts.placeholder || el.parts.textline.text;
        el.placeholderColor = opts.placeholderColor || '#999999';
        el.color = el.parts.textline.color;
        el.parts.textline.color = el.placeholderColor;
        el.selectionColor = opts.selectionColor || el.placeholderColor;
        el.selectionTextColor = opts.selectionTextColor || '#141414';
        el.selection = null;
        // Define hitArea
        el.container.hitArea = new cjs.Shape();
        el.container.hitArea.graphics.beginFill('#00000002').beginStroke().drawRect(0, 0, el.width, el.height);
        el.container.cursor = 'text';
        // Cursor
        el.parts.cursor = new cjs.Shape();
        el.parts.cursor.graphics.beginFill(element.color).beginStroke().drawRect(-1, -1, 4, el.height+2);
        el.container.addChild(el.parts.cursor);
        el.parts.cursor.setTransform(0, 0);
        el.parts.cursor.visible = false;
        el.parts.cursor.mouseEnabled = false;
        el.parts.cursor._blinker = { ticker: null, fn: function() {
            if(cjs.Ticker.paused) return;
            //if(this.has_focus !== true || this.selection !== null) return;
            var now = new Date().getTime();
            if(this.parts.cursor._lastBlink === undefined || this.parts.cursor._lastBlink == null) this.parts.cursor._lastBlink = now - 590;
            if(now >= this.parts.cursor._lastBlink + 590) { // Cursor Blink Interval
                this.parts.cursor._lastBlink = now;
                this.parts.cursor.visible = !this.parts.cursor.visible;
            }
        }};
        // Define Selection
        el.parts.selection = new cjs.Shape();
        el.parts.selection.graphics.beginFill(el.selectionColor).beginStroke().drawRect(-1,-1, el.width, el.height+2);
        el.parts.selection.visible = false;
        el.parts.selection.mouseEnabled = false;
        el.container.addChild(el.parts.selection);
        el.parts.selection.setTransform(offsetLeft, 0);
        // Define Selection Text
        el.parts.selectionText = el.parts.textline.clone();
        el.parts.selectionText.text = el.parts.textline.text;
        el.parts.selectionText.color = el.selectionTextColor;
        el.parts.selectionText.visible = false;
        el.parts.selectionText.mask = el.parts.selection;
        el.container.addChild(el.parts.selectionText);
        el.parts.selectionText.setTransform(offsetLeft, 0);

        function triggerListener(event, data) {
            if(el.listener[event]) {
                for(var l=0; l<el.listener[event].length; l++) el.listener[event][l].bind(el)(data);
            }
        }

        // Define functions
        Object.setPrototypeOf(el, {
            reset: function() {
                this.value = '';
                this.blur();
            },
            focus: function(event) {
                var focusAll = (event === 'selectAll');
                if(focusAll) event = undefined;
                if(event !== undefined) {
                    event.nativeEvent.preventDefault();
                    event.nativeEvent.stopPropagation();
                }
                if(cjs.Form.focussedElement !== null && cjs.Form.focussedElement !== this) { cjs.Form.focussedElement.blur() };
                if(cjs.Form.focussedElement == null || cjs.Form.focussedElement === this) {
                    if(event !== undefined) {
                        let pos = this._getTextPosFromX(event.localX);
                        this._setCursorToX(pos.x);
                        this.parts.cursor.charIndex = pos.charIndex;
                        this._setSelection(pos.charIndex,pos.charIndex);
                    } else {
                        this._setCursorToTextPos(0);
                        this._setSelection(0, 0);
                    }
                    if(cjs.Form.focussedElement === this) return;
                }
                cjs.Form.focussedElement = this;
                this.parts.textline.text = this.value;
                this.parts.textline.color = this.color;
                this.has_focus = true;
                this.parts.cursor.visible = true;
                delete (this.parts.cursor._lastBlink);
                cjs.Ticker.removeEventListener('tick', this.parts.cursor._blinker.ticker);
                this.parts.cursor._blinker.ticker = cjs.Ticker.addEventListener('tick', this.parts.cursor._blinker.fn.bind(this));
                window.addEventListener('mousedown', this.blur.bind(this));
                window.addEventListener('blur', this.blur.bind(this));
                if(!this.parts.cursor._typer) this.parts.cursor._typer = this._keyboardInput.bind(this);
                window.addEventListener('keydown', this.parts.cursor._typer);
                if(focusAll) this._setSelection();
            },
            blur: function() {
                cjs.Form.focussedElement = null;
                this._setSelection(0, 0);
                this.has_focus = false;
                this.parts.cursor.visible = false;
                if(!this.has_changed && this.parts.textline.text === '') {
                    this.parts.textline.text = this.placeholder;
                    this.parts.textline.color = this.placeholderColor;
                }
                delete this.parts.cursor._lastBlink;
                cjs.Ticker.off('tick', this.parts.cursor._blinker.ticker);
                window.removeEventListener('mousedown', this.blur.bind(this));
                window.removeEventListener('blur', this.blur.bind(this));
                window.removeEventListener('keydown', this.parts.cursor._typer);
                triggerListener('blur', this.value);
            },
            /* private helper functions */
            _setTextDynamic: function(value) {
                this.placeholder = value;
                if(!this.has_changed) this.parts.textline.text = value;
            },
            _getTextPosFromX: function(x) {
                if(!this.has_changed) return { charIndex: 0, x: 0 };
                let value = this.parts.textline.text;
                let fullMeasuredWidth = this.parts.textline.getMeasuredWidth();
                this.parts.textline.text = '';
                let lastMeasuredWidth = 0;
                let chars = value.split('');
                let result = { charIndex: chars.length, x: Math.round(fullMeasuredWidth) };
                for(let c = 0; c < chars.length; c++) {
                    this.parts.textline.text = chars.slice(0, c+1).join('');
                    let newMeasuredWidth = this.parts.textline.getMeasuredWidth();
                    if(newMeasuredWidth > x) {
                        if(x > lastMeasuredWidth + (newMeasuredWidth - lastMeasuredWidth) / 2)
                            result = { charIndex: c+1, x: Math.round(newMeasuredWidth) };
                        else result = { charIndex: c, x: Math.round(lastMeasuredWidth) };
                        break;
                    }
                    lastMeasuredWidth = newMeasuredWidth;
                }
                this.parts.textline.text = value;
                return result;
            },
            _getXFromTextPos: function(charIndex) {
                let value = this.parts.textline.text;
                this.parts.textline.text = value.split('').slice(0, charIndex).join('');
                let lastMeasuredWidth = Math.round(this.parts.textline.getMeasuredWidth());
                this.parts.textline.text = value;
                return lastMeasuredWidth + offsetLeft;
            },
            _setCursorToX: function(x) {
                this.parts.cursor.regX = -x + 2;
                this.parts.cursor.visible = true;
            },
            _setCursorToTextPos: function(charIndex) {
                if(typeof charIndex === 'undefined') charIndex = this.parts.cursor.charIndex;
                let pos = this._getXFromTextPos(charIndex);
                this.parts.cursor.charIndex = charIndex;
                this.parts.cursor.regX = -pos + 2;
                this.parts.cursor.visible = true;
            },
            _clipboard: {
                cut: function(event) {
                    if(this.selection === null) return event.preventDefault();
                    let input = document.createElement('input');
                    input.style.position = 'fixed';
                    input.style.top = '-100px';
                    input.value = this.selection.text;
                    document.body.appendChild(input);
                    input.focus();
                    input.select();
                    document.execCommand('copy');
                    this._deleteSelection();
                    setTimeout(function() {
                        this._scrollTextField();
                        input.parentNode.removeChild(input);
                    }.bind(this), 1);
                    event.preventDefault();
                },
                copy: function(event) {
                    if(this.selection === null) return event.preventDefault();
                    let input = document.createElement('input');
                    input.style.position = 'fixed';
                    input.style.top = '-100px';
                    input.value = this.selection.text;
                    document.body.appendChild(input);
                    input.focus();
                    input.select();
                    document.execCommand('copy');
                    setTimeout(function() {
                        input.parentNode.removeChild(input);
                    }.bind(this), 1);
                    event.preventDefault();
                },
                paste: function(event) {
                    let input = document.createElement('input');
                    input.style.position = 'fixed';
                    input.style.top = '-100px';
                    document.body.appendChild(input);
                    input.focus();
                    document.execCommand('paste');
                    setTimeout(function() {
                        this._deleteSelection();
                        let value = this.value;
                        let chars = value.split('');
                        chars.splice(this.parts.cursor.charIndex, 0, input.value.replace(/\n/g, ''));
                        chars = chars.join('').split('');
                        this.parts.cursor.charIndex += input.value.length;
                        this.value = chars.join('');
                        this._setCursorToTextPos();
                        this.has_changed = (this.parts.textline.text.length > 0);
                        this._scrollTextField();
                        input.parentNode.removeChild(input);
                    }.bind(this), 1);
                }
            },
            _keyboardInput: function(event) {
                if(event.ctrlKey) {
                    switch(event.which) {
                        case 86: // CTRL + V
                            return this._clipboard.paste.bind(this)(event);
                        case 67: // CTRL + C
                            return this._clipboard.copy.bind(this)(event);
                        case 88: // CTRL + X
                            return this._clipboard.cut.bind(this)(event);
                        case 65: // CTRL + A
                            this.container.dispatchEvent('dblclick');
                            return event.preventDefault();
                    }
                }
                if(event.shiftKey) {
                    switch(event.which) {
                        case 36: // HOME
                            if(this.selection !== null && this.selection.start === 0) return;
                            this._setSelection(0, (this.selection === null ? this.parts.cursor.charIndex : this.selection.dragStart));
                            this._scrollTextField();
                        case 35: // END
                            if(this.selection !== null && this.selection.end === this.value.length) return;
                            this._setSelection((this.selection === null ? this.parts.cursor.charIndex : this.selection.dragStart), this.value.length);
                            this._scrollTextField();
                            return;
                        case 37: // LEFT ARROW
                            if(this.parts.cursor.charIndex-1 < 0) return;
                            if(this.selection === null) this.selection = { dragStart: this.parts.cursor.charIndex };
                            this.parts.cursor.charIndex--;
                            this._setSelection(this.parts.cursor.charIndex, this.selection.dragStart);
                            this._scrollTextField();
                            return;
                        case 39: // RIGHT ARROW
                            if(this.parts.cursor.charIndex+1 > this.value.length) return;
                            if(this.selection === null) this.selection = { dragStart: this.parts.cursor.charIndex };
                            this.parts.cursor.charIndex++;
                            this._setSelection(this.selection.dragStart, this.parts.cursor.charIndex);
                            this._scrollTextField();
                            return;
                        case 9: // TAB
                            event.preventDefault();
                            focus_next = false;
                            let sortable = [];
                            for (var el in cjs.Form.elements) {
                                sortable.push([el, cjs.Form.elements[el]]);
                            }
                            sortable.sort(function(a, b) {
                                return b[1].index - a[1].index;
                            });
                            for(var el=0; el<sortable.length; el++) {
                                var key = sortable[el][0];
                                if(focus_next) {
                                    focus_next = false;
                                    cjs.Form.focussedElement.blur();
                                    if(typeof cjs.Form.elements[key].focus == 'function') cjs.Form.elements[key].focus('selectAll');
                                } else if(sortable[el][1] == cjs.Form.focussedElement) {
                                    focus_next = true;
                                }
                            }
                            return;
                    }
                }
                if((event.ctrlKey || event.altKey) && event.key.length === 1) {
                    this._deleteSelection();
                    let value = this.value;
                    let chars = value.split('');
                    chars.splice(this.parts.cursor.charIndex, 0, event.key);
                    this.value = chars.join('');
                    this.parts.cursor.charIndex++;
                    this._setCursorToTextPos(this.parts.cursor.charIndex);
                    this.has_changed = (this.parts.textline.text.length > 0);
                    this._scrollTextField();
                    return triggerListener('change', this.value);
                }
                let value;
                switch(event.which) {
                    case 36: // HOME
                        this._setSelection(0,0);
                        this._scrollTextField();
                        break;
                    case 35: // END
                        this._setSelection(this.value.length, this.value.length);
                        this._scrollTextField();
                        break;
                    case 8: // BACKSPACE
                        value = this.value.split('');
                        if(!this._deleteSelection()) {
                            if(this.parts.cursor.charIndex <= 0) return;
                            value.splice(this.parts.cursor.charIndex - 1, 1);
                            this.value = value.join('');
                            this.parts.cursor.charIndex--;
                        }
                        this._setCursorToTextPos();
                        this.has_changed = (this.parts.textline.text.length > 0);
                        this._scrollTextField();
                        triggerListener('change', this.value);
                        break;
                    case 46: // DELETE
                        value = this.value.split('');
                        if(!this._deleteSelection()) {
                            if(this.parts.cursor.charIndex >= value.length) return;
                            value.splice(this.parts.cursor.charIndex, 1);
                            this.value = value.join('');
                        }
                        this._setCursorToTextPos();
                        this.has_changed = (this.parts.textline.text.length > 0);
                        this._scrollTextField();
                        triggerListener('change', this.value);
                        break;
                    case 37: // LEFT ARROW
                    case 39: // RIGHT ARROW
                        if(event.which===37) this.parts.cursor.charIndex--;
                        else if(event.which===39) this.parts.cursor.charIndex++;
                        if(this.parts.cursor.charIndex < 0) this.parts.cursor.charIndex = 0;
                        if(this.parts.cursor.charIndex > this.value.length) this.parts.cursor.charIndex = this.value.length;
                        this._setSelection(this.parts.cursor.charIndex, this.parts.cursor.charIndex);
                        this.parts.selection.visible = false;
                        this.parts.selectionText.visible = false;
                        this._scrollTextField();
                        break;
                    case 27: // ESCAPE
                        this.blur();
                        break;
                    case 9: // TAB
                        event.preventDefault();
                        focus_next = false;
                        let sortable = [];
                        for (var el in cjs.Form.elements) {
                            sortable.push([el, cjs.Form.elements[el]]);
                        }
                        sortable.sort(function(a, b) {
                            return a[1].index - b[1].index;
                        });
                        for(var el=0; el<sortable.length; el++) {
                            var key = sortable[el][0];
                            if(focus_next) {
                                focus_next = false;
                                cjs.Form.focussedElement.blur();
                                if(typeof cjs.Form.elements[key].focus == 'function') cjs.Form.elements[key].focus('selectAll');
                            } else if(sortable[el][1] == cjs.Form.focussedElement) {
                                focus_next = true;
                            }
                        }
                        break;
                    default:
                        if(event.key.length === 1) {
                            this._deleteSelection();
                            let value = this.value;
                            let chars = value.split('');
                            chars.splice(this.parts.cursor.charIndex, 0, event.key);
                            this.value = chars.join('');
                            this.parts.cursor.charIndex++;
                            this._setCursorToTextPos(this.parts.cursor.charIndex);
                            this.has_changed = (this.parts.textline.text.length > 0);
                            this._scrollTextField();
                            triggerListener('change', this.value);
                        }
                        break;
                }
            },
            _setSelection: function(startCharIndex, endCharIndex, force) {
                if(typeof force === 'undefined') force = false;
                if(typeof startCharIndex === 'undefined' && typeof endCharIndex === 'undefined') { startCharIndex = 0; endCharIndex = this.value.length; }
                if(startCharIndex < 0) startCharIndex = 0;
                if(endCharIndex > this.value.length) endCharIndex = this.value.length;
                if(startCharIndex !== endCharIndex || force === true) {
                    if(typeof this.selection === 'undefined' || this.selection === null) this.selection = {};
                    this.selection.start = Math.min(startCharIndex, endCharIndex);
                    this.selection.end = Math.max(startCharIndex, endCharIndex);
                    let x1 = this._getXFromTextPos(this.selection.start);
                    let x2 = this._getXFromTextPos(this.selection.end);
                    let width = x2 - x1;
                    this.parts.selection.setTransform(x1, 0, ((width * 100) / this.width) / 100, 1);
                    this.parts.selectionText.text = this.parts.textline.text;
                    this.parts.selection.visible = true;
                    this.parts.selectionText.visible = true;
                    this.selection.text = this.value.split('').slice(this.selection.start, this.selection.end).join('');
                    this.parts.cursor.visible = false;
                    return true;
                } else {
                    this.parts.selection.visible = false;
                    this.parts.selectionText.visible = false;
                    this.selection = null;
                    this._setCursorToTextPos(startCharIndex);
                    return false;
                }
            },
            _deleteSelection: function() {
                if(typeof this.selection === 'undefined' || this.selection === null) return false;
                let value = this.value.split('');
                value.splice(this.selection.start, this.selection.end - this.selection.start);
                this.value = value.join('');
                this._setSelection(this.selection.start, this.selection.start);
                return true;
            },
            _scrollTextField: function(dragging) {
                if(typeof dragging === 'undefined') dragging = false;
                if(this.parts.cursor.regX + this.container.regX < -this.width + 30) {
                    this.container.regX = Math.abs(this.parts.cursor.regX) - this.width + 30;
                    this.container.hitArea.regX = this.container.regX*-1;
                    this.container.background.regX = this.container.regX*-1 / this.container.background.scaleX;
                } else if(this.parts.cursor.regX + this.container.regX >0) {
                    this.container.regX = Math.abs(this.parts.cursor.regX);
                    this.container.hitArea.regX = this.container.regX*-1;
                    this.container.background.regX = this.container.regX*-1 / this.container.background.scaleX;
                }
                if(this.parts.textline.getMeasuredWidth() < this.width) {
                    this.container.regX = this.container.hitArea.regX = this.container.background.regX = 0;
                }
            },
            isValid: function() {
                if(typeof opts.validate == 'function') {
                    try {
                        return opts.validate.bind(this)(this.value);
                    } catch(e) {
                        console.error(e);
                        return false;
                    }
                }
                var valid = (!opts.required || this.value.toString().replace(/ /g, '').length > 0);
                if(valid && this.value.toString().replace(/ /g, '').length > 0 && opts.regex) {
                    valid = this.value.toString().match(new RegExp(opts.regex)) != null
                }
                return valid;
            }
        });

        // Set dynamic property value
        Object.defineProperty(el, 'value', {
            get: function() { return (this.has_changed ? this.parts.textline.text : '') },
            set: function(value) {
                this.has_changed = (value !== '');
                this.parts.textline.lineWidth = Infinity;
                this.parts.textline.text = (this.has_changed || this.has_focus ? value : this.placeholder);
                this.parts.textline.color = (this.has_changed || this.has_focus ? this.color : this.placeholderColor);
                this.parts.selectionText.text = value;
                let textWidth = this.parts.textline.getMeasuredWidth();
                if(textWidth < this.width) this.parts.textline.lineWidth = this.width;
                else this.parts.textline.lineWidth = textWidth + 50;
                this.parts.selectionText.lineWidth = this.parts.textline.lineWidth;
                triggerListener('change', this.value);
                return value;
            }
        });

        // Events
        el.container.on('mousedown', el.focus.bind(el));
        el.container.on('pressmove', function(event) {
            let x = event.localX;
            if(x < 0) x = 0;
            let maxWidth = this.parts.textline.getMeasuredWidth();
            if(x > maxWidth) x = maxWidth;
            if(x > this.width + this.container.regX) x = this.width + this.container.regX;
            let pos = this._getTextPosFromX(x);
            if(this.selection === null) {
                this.selection = { dragStart: pos.charIndex };
                this._setSelection(pos.charIndex, pos.charIndex, true);
            } else this._setSelection(this.selection.dragStart, pos.charIndex, true);
            this._setCursorToTextPos(pos.charIndex);
            this.parts.cursor.visible = false;
            this._scrollTextField(true);
        }.bind(el));
        el.container.on('dblclick', function(e) { this._setSelection(); }.bind(el));

        replaceElement(element);
        return el;
    }

    function Checkbox(element, opts) {
        var el = base.bind(cjs.Form)(element, "checkbox", opts);

        // Cloning original element to wrap into container
        el.parts.textline = element.clone();
        el.parts.textline.name = el.name;
        el.container.addChild(el.parts.textline);
        el.parts.textline.lineWidth -= el.parts.textline.lineHeight * 1.2;
        el.parts.textline.setTransform(el.parts.textline.lineHeight * 1.2, 0, 1, 1);
        // Setup config
        el.default = opts.checked ? true : false;
        el.value = el.default;
        el.color = opts.color || el.parts.textline.color;
        el.backgroundColor = opts.backgroundColor || '#FFFFFF';
        el.borderColor = opts.borderColor || el.color;
        el.activeColor = opts.activeBackgroundColor || el.color;
        el.activeCheckColor = opts.activeCheckColor || '#FFFFFF';
        // Define hitArea
        el.container.hitArea = new cjs.Shape();
        el.container.hitArea.graphics.beginFill('#000000').beginStroke().drawRect(0, 0, el.width, el.height);
        el.container.cursor = 'pointer';
        // Define Box
        el.parts.box = new cjs.Shape();
        el.parts.box.graphics.beginFill(el.backgroundColor).setStrokeStyle(el.parts.textline.lineHeight*0.07,'round').beginStroke(el.borderColor).drawRoundRect(0, 0, el.parts.textline.lineHeight-8, el.parts.textline.lineHeight-8, el.parts.textline.lineHeight*0.1, el.parts.textline.lineHeight*0.1, el.parts.textline.lineHeight*0.1, el.parts.textline.lineHeight*0.1);
        el.container.addChild(el.parts.box);
        el.parts.box.setTransform(2, 2);
        // Define Checkmark
        el.parts.check = new cjs.Shape();
        el.parts.check.graphics.beginFill(el.activeColor).setStrokeStyle(el.parts.textline.lineHeight*0.07,'round').beginStroke(el.activeColor).drawRoundRect(0, 0, el.parts.textline.lineHeight-8, el.parts.textline.lineHeight-8, el.parts.textline.lineHeight*0.1, el.parts.textline.lineHeight*0.1, el.parts.textline.lineHeight*0.1, el.parts.textline.lineHeight*0.1);
        el.parts.check.graphics.setStrokeStyle(el.parts.textline.lineHeight*0.15,'round').beginStroke(el.activeCheckColor).moveTo(el.parts.textline.lineHeight*0.7, el.parts.textline.lineHeight*0.16).lineTo(el.parts.textline.lineHeight*0.35, el.parts.textline.lineHeight*0.65).lineTo(el.parts.textline.lineHeight*0.15, el.parts.textline.lineHeight*0.5);
        el.container.addChild(el.parts.check);
        el.parts.check.setTransform(2, 2);
        el.parts.check.visible = el.default;

        function triggerListener(event, data) {
            if(el.listener[event]) {
                for(var l=0; l<el.listener[event].length; l++) el.listener[event][l].bind(el)(data);
            }
        }

        // Define functions
        Object.setPrototypeOf(el, {
            reset: function () {
                this.value = this.default;
                this._updateCheckmark();
                this.blur();
            },
            focus: function (event) {
                var focusAll = (event === 'selectAll');
                if(focusAll) event = undefined;
                if(event !== undefined) {
                    event.nativeEvent.preventDefault();
                    event.nativeEvent.stopPropagation();
                }
                if(cjs.Form.focussedElement !== null && cjs.Form.focussedElement !== this) { cjs.Form.focussedElement.blur() };
                cjs.Form.focussedElement = this;
                this.has_focus = true;
                window.addEventListener('mousedown', this.blur);
                window.addEventListener('blur', this.blur);
            },
            blur: function () {
                cjs.Form.focussedElement = null;
                this.has_focus = false;
                window.removeEventListener('mousedown', this.blur);
                window.removeEventListener('blur', this.blur);
            },
            /* private helper methods */
            _setTextDynamic: function(value) {
                this.parts.textline.text = value;
            },
            _toggleState: function() {
                this.value = !this.value;
                this._updateCheckmark();
                triggerListener('change', this.value);
            },
            _updateCheckmark: function () {
                this.parts.check.visible = this.value;
            },
            isValid: function() {
                if(typeof opts.validate == 'function') return opts.validate.bind(this)(this.value);
                return (!opts.required || this.value==true);
            }
        });

        Object.defineProperty(el, 'checked', {
            get: function() { return this.value; },
            set: function(value) {
                this.value = value;
                this._updateCheckmark();
                triggerListener('change', this.value);
                return value;
            }
        });

        // Events
        el.container.on('mousedown', function(event) { this.focus.bind(this)(event); this._toggleState.bind(this)(); }.bind(el));

        replaceElement(element);
        return el;
    }

    function SelectBox(element, opts) {
        var el = base.bind(cjs.Form)(element, "select", opts);
        var offsetLeft = 7;
        el.container.mask = new cjs.Shape();
        el.container.mask.graphics.beginFill("#000000").drawRect(element.x - 5, element.y - 6, el.width + 10, el.height*50);
        el.container.mask.offsets = {x: element.x - 5, y: element.y - 6};
        
        el.container.cursor = 'pointer';
        // Define Background
        el.container.background = new cjs.Shape();
        el.container.background.graphics.f("#FFFFFF").s("#666666").ss(0.4,1,1,3,true).p("AnznzIPnAAIAAPnIvnAAg");
        el.container.addChild(el.container.background);
        el.container.background.setTransform(el.width/2, el.height/2, (el.width+10)/100, (el.height+12)/100);
        // Input Line (clone of original Element)
        el.parts.textline = element.clone();
        el.parts.textline.lineWidth = el.width*50;
        el.container.addChild(el.parts.textline);
        el.parts.textline.setTransform(offsetLeft, 0, 1, 1);
        //el.parts.textline.text = "";
        element.visible = false;

        // Arrow
        el.parts.arrow_bg = new cjs.Shape();
        el.parts.arrow_bg.graphics.lf(["#FFFFFF","#EDEDED"],[0,1],-45,0,9,0).s().p("AnBEOIAAobIODAAIAAIbg");
        el.container.addChild(el.parts.arrow_bg);
        var scale = 90/54;
        el.parts.arrow_bg.setTransform(el.width - 57,el.height/2, (((el.height*100)/45)*scale)/100, ((el.height*100)/45)/100);
	    el.parts.arrow_down = new cjs.Shape();
	    el.parts.arrow_down.graphics.f().s("#333333").ss(3,1,1,3,false).p("AAAAiIBMhIAhLghIBLBI");
        el.container.addChild(el.parts.arrow_down);
        el.parts.arrow_down.setTransform(el.width - 34, el.height/2);

        el.parts.dropdown = new cjs.Container();
        el.container.addChild(el.parts.dropdown);
        el.parts.dropdown.setTransform(0, el.height + 5);
        el.parts.dropdown.visible = false;
        el.parts.dropdown_bg = new cjs.Shape();
        el.parts.dropdown_bg.graphics.f("#FFFFFF").s("#666666").ss(0.3,1,1,3,true).p("AnzH0IAAvnIPnAAIAAPng");
        el.parts.dropdown.addChild(el.parts.dropdown_bg);
        el.parts.dropdown_bg.setTransform(el.width/2, 10, (el.width+9)/100, 0.1);

        el.parts.options = [];
        if(opts.options) {
            var y = margin = 5;
            var gap = 2;
            var preselected = {};

            if(!Array.isArray(opts.options)) {
                var newopts = [];
                for(var key in opts.options) newopts.push({ value: key, text: opts.options[key], disabled: false });
                opts.options = newopts;
            }
            if(Array.isArray(opts.options) && typeof opts.options[0] != "object") {
                var newopts = [];
                for(var o=0; o<opts.options.length; o++) newopts.push({ value: opts.options[o], text: opts.options[o], disabled: false });
                opts.options = newopts;
            }
            for(var o=0; o<opts.options.length; o++) {
                if(opts.options[o].disabled == undefined || opts.options[o].disabled == null) opts.options[o].disabled = false;
                var select_item = { index: o, label: null, disabled: opts.options[o].disabled, bg: null, value: opts.options[o].value, text: opts.options[o].text };
                if(el.parts.textline.text == select_item.text) preselected = select_item;
                select_item.bg = new cjs.Shape();
                select_item.bg.graphics.f("#CCCCCC").s().p("AnzH0IAAvnIPnAAIAAPng");
                el.parts.dropdown.addChild(select_item.bg);
                select_item.bg.setTransform(el.width/2, y + (el.height/2), el.width/100, element.lineHeight/100);
                select_item.bg.visible = preselected.value == key;
                select_item.label = new cjs.Text(select_item.text, element.font, element.color);
                select_item.label.lineHeight = element.lineHeight;
                select_item.label.lineWidth = el.width*50;
                if(select_item.disabled) select_item.label.color = "#999999";
                if(select_item.disabled) select_item.label.cursor = "default";
                else select_item.label.cursor = "pointer";
                el.parts.dropdown.addChild(select_item.label);
                select_item.label.hitArea = select_item.bg.clone();
                select_item.label.hitArea.setTransform(el.width/2, select_item.label.lineHeight/2, el.width/100, element.lineHeight/100);
                select_item.label.setTransform(margin,y);
                select_item.label.on('mouseover', function(e) { if(el.parts.textline.item) { el.parts.textline.item.bg.visible = false; }if(!this.disabled) { this.bg.visible = true; } }.bind(select_item));
                select_item.label.on('mouseout', function(e) { this.bg.visible = false; }.bind(select_item));
                select_item.label.on('mousedown', function(event) { 
                    event.stopPropagation();
                    event.nativeEvent.stopPropagation();
                    // Change Value
                    if(!this.disabled) {
                        el.value = this.value;
                        el.parts.textline.color = element.color;
                        el.close();
                    }
                }.bind(select_item));

                el.parts.options.push(select_item);
                y += select_item.label.lineHeight + gap;
            }
            if(preselected.bg) {
                el.parts.textline.text = preselected.text;
                el.parts.textline.item = preselected;
            } else {
                el.parts.textline.color = "#999999";
            }
            el.parts.dropdown_bg.setTransform(el.width/2, (y-gap+margin)/2, (el.width+9)/100, (y - gap + margin)/100);
        }


        // Setup config
        el.color = el.parts.textline.color;
        // Define hitArea
        el.hitArea = new cjs.Shape();
        el.hitArea.graphics.beginFill('#00000002').beginStroke().drawRect(0, 0, el.width, el.height);
        el.container.cursor = 'pointer';
        el.container.hitArea = el.hitArea;
        
        function triggerListener(event, data) {
            if(el.listener[event]) {
                for(var l=0; l<el.listener[event].length; l++) el.listener[event][l].bind(el)(data);
            }
        }

        // Define functions
        Object.setPrototypeOf(el, {
            reset: function() {
                this.value = preselected.value;
                this.blur();
            },
            open: function(event) {
                if(event !== undefined && event.nativeEvent) {
                    event.nativeEvent.preventDefault();
                    event.nativeEvent.stopPropagation();
                    event.nativeEvent.stopImmediatePropagation();
                }
                if(cjs.Form.focussedElement !== null && cjs.Form.focussedElement === el) {
                    el.blur();
                    return;
                }
                if(cjs.Form.focussedElement !== null && cjs.Form.focussedElement !== el) { cjs.Form.focussedElement.blur() };
                cjs.Form.focussedElement = el;
                el.has_focus = true;
                el.container.parent.addChild(el.container);
                el.container.hitArea = null;
                for(var i=0; i<el.parts.options.length; i++) {
                    var select_item = el.parts.options[i];
                    if(select_item.value == this.value) {
                        select_item.bg.visible = true;
                        break;
                    }
                }
                el.parts.dropdown.visible = true;
                triggerListener('focus', el.container); 
                window.addEventListener('mousedown', this.close);
                window.addEventListener('blur', this.close);
            },
            close: function(event) { 
                if(event !== undefined && event.nativeEvent) {
                    event.nativeEvent.preventDefault();
                    event.nativeEvent.stopPropagation();
                    event.nativeEvent.stopImmediatePropagation();
                }
                cjs.Form.focussedElement = null;
                el.has_focus = false;
                el.container.hitArea = el.hitArea;
                el.parts.dropdown.visible = false;
                window.removeEventListener('mousedown', this.close);
                window.removeEventListener('blur', this.close);
                triggerListener('blur', el.value); 
            },
            focus: function(e) { return this.open(e) },
            blur: function(e) { return this.close(e) },
            /* private helper functions */
            _keyboardInput: function(event) {
                if(event.ctrlKey) {
                    switch(event.which) {
                        case 86: // CTRL + V
                            return this._clipboard.paste.bind(this)(event);
                        case 67: // CTRL + C
                            return this._clipboard.copy.bind(this)(event);
                        case 88: // CTRL + X
                            return this._clipboard.cut.bind(this)(event);
                        case 65: // CTRL + A
                            this.container.dispatchEvent('dblclick');
                            return event.preventDefault();
                    }
                }
                if(event.shiftKey) {
                    switch(event.which) {
                        case 36: // HOME
                            if(this.selection !== null && this.selection.start === 0) return;
                            this._setSelection(0, (this.selection === null ? this.parts.cursor.charIndex : this.selection.dragStart));
                            this._scrollTextField();
                        case 35: // END
                            if(this.selection !== null && this.selection.end === this.value.length) return;
                            this._setSelection((this.selection === null ? this.parts.cursor.charIndex : this.selection.dragStart), this.value.length);
                            this._scrollTextField();
                            return;
                        case 37: // LEFT ARROW
                            if(this.parts.cursor.charIndex-1 < 0) return;
                            if(this.selection === null) this.selection = { dragStart: this.parts.cursor.charIndex };
                            this.parts.cursor.charIndex--;
                            this._setSelection(this.parts.cursor.charIndex, this.selection.dragStart);
                            this._scrollTextField();
                            return;
                        case 39: // RIGHT ARROW
                            if(this.parts.cursor.charIndex+1 > this.value.length) return;
                            if(this.selection === null) this.selection = { dragStart: this.parts.cursor.charIndex };
                            this.parts.cursor.charIndex++;
                            this._setSelection(this.selection.dragStart, this.parts.cursor.charIndex);
                            this._scrollTextField();
                            return;
                        case 9: // TAB
                            event.preventDefault();
                            focus_next = false;
                            let sortable = [];
                            for (var el in cjs.Form.elements) {
                                sortable.push([el, cjs.Form.elements[el]]);
                            }
                            sortable.sort(function(a, b) {
                                return b[1].index - a[1].index;
                            });
                            for(var el=0; el<sortable.length; el++) {
                                var key = sortable[el][0];
                                if(focus_next) {
                                    focus_next = false;
                                    cjs.Form.focussedElement.blur();
                                    if(typeof cjs.Form.elements[key].focus == 'function') cjs.Form.elements[key].focus('selectAll');
                                } else if(sortable[el][1] == cjs.Form.focussedElement) {
                                    focus_next = true;
                                }
                            }
                            return;
                    }
                }
                if((event.ctrlKey || event.altKey) && event.key.length === 1) {
                    this._deleteSelection();
                    let value = this.value;
                    let chars = value.split('');
                    chars.splice(this.parts.cursor.charIndex, 0, event.key);
                    this.value = chars.join('');
                    this.parts.cursor.charIndex++;
                    this._setCursorToTextPos(this.parts.cursor.charIndex);
                    this.has_changed = (this.parts.textline.text.length > 0);
                    this._scrollTextField();
                    return triggerListener('change', this.value);
                }
                let value;
                switch(event.which) {
                    case 36: // HOME
                        this._setSelection(0,0);
                        this._scrollTextField();
                        break;
                    case 35: // END
                        this._setSelection(this.value.length, this.value.length);
                        this._scrollTextField();
                        break;
                    case 8: // BACKSPACE
                        value = this.value.split('');
                        if(!this._deleteSelection()) {
                            if(this.parts.cursor.charIndex <= 0) return;
                            value.splice(this.parts.cursor.charIndex - 1, 1);
                            this.value = value.join('');
                            this.parts.cursor.charIndex--;
                        }
                        this._setCursorToTextPos();
                        this.has_changed = (this.parts.textline.text.length > 0);
                        this._scrollTextField();
                        triggerListener('change', this.value);
                        break;
                    case 46: // DELETE
                        value = this.value.split('');
                        if(!this._deleteSelection()) {
                            if(this.parts.cursor.charIndex >= value.length) return;
                            value.splice(this.parts.cursor.charIndex, 1);
                            this.value = value.join('');
                        }
                        this._setCursorToTextPos();
                        this.has_changed = (this.parts.textline.text.length > 0);
                        this._scrollTextField();
                        triggerListener('change', this.value);
                        break;
                    case 37: // LEFT ARROW
                    case 39: // RIGHT ARROW
                        if(event.which===37) this.parts.cursor.charIndex--;
                        else if(event.which===39) this.parts.cursor.charIndex++;
                        if(this.parts.cursor.charIndex < 0) this.parts.cursor.charIndex = 0;
                        if(this.parts.cursor.charIndex > this.value.length) this.parts.cursor.charIndex = this.value.length;
                        this._setSelection(this.parts.cursor.charIndex, this.parts.cursor.charIndex);
                        this.parts.selection.visible = false;
                        this.parts.selectionText.visible = false;
                        this._scrollTextField();
                        break;
                    case 27: // ESCAPE
                        this.blur();
                        break;
                    case 9: // TAB
                        event.preventDefault();
                        focus_next = false;
                        let sortable = [];
                        for (var el in cjs.Form.elements) {
                            sortable.push([el, cjs.Form.elements[el]]);
                        }
                        sortable.sort(function(a, b) {
                            return a[1].index - b[1].index;
                        });
                        for(var el=0; el<sortable.length; el++) {
                            var key = sortable[el][0];
                            if(focus_next) {
                                focus_next = false;
                                cjs.Form.focussedElement.blur();
                                if(typeof cjs.Form.elements[key].focus == 'function') cjs.Form.elements[key].focus('selectAll');
                            } else if(sortable[el][1] == cjs.Form.focussedElement) {
                                focus_next = true;
                            }
                        }
                        break;
                    default:
                        if(event.key.length === 1) {
                            this._deleteSelection();
                            let value = this.value;
                            let chars = value.split('');
                            chars.splice(this.parts.cursor.charIndex, 0, event.key);
                            this.value = chars.join('');
                            this.parts.cursor.charIndex++;
                            this._setCursorToTextPos(this.parts.cursor.charIndex);
                            this.has_changed = (this.parts.textline.text.length > 0);
                            this._scrollTextField();
                            triggerListener('change', this.value);
                        }
                        break;
                }
            },
            isValid: function() {
                if(typeof opts.validate == 'function') {
                    try {
                        return opts.validate.bind(this)(this.value);
                    } catch(e) {
                        console.error(e);
                        return false;
                    }
                }
                var valid = (!opts.required || this.value.toString().replace(/ /g, '').length > 0);
                if(valid && this.value.toString().replace(/ /g, '').length > 0 && opts.regex) {
                    valid = this.value.toString().match(new RegExp(opts.regex)) != null
                }
                return valid;
            }
        });

        // Set dynamic property value
        Object.defineProperty(el, 'value', {
            get: function() { return (this.parts.textline.item ? this.parts.textline.item.value : null) },
            set: function(value) {
                if(this.value != null && value.toString() == this.value.toString()) return;
                for(var i=0; i<this.parts.options.length; i++) {
                    var select_item = this.parts.options[i];
                    if(select_item.value.toString() == value.toString()) {
                        this.parts.textline.text = select_item.text;
                        this.parts.textline.item = select_item;
                        this.parts.textline.color = element.color;
                        break;
                    }
                }
                triggerListener('change', this.value);
                return value;
            }
        });
        Object.defineProperty(el, 'item', {
            get: function() { return (this.parts.textline.item ? this.parts.textline.item : { value: null }) }
        });

        // Events
        el.container.on('mousedown', el.open.bind(el));
        replaceElement(element);
        return el;
    }

    function replaceElement(element) {
        var parent = element.parent;
        parent.addChild(element.formElement.container);
        element.formElement.container.parent = parent;
        element.formElement.container.setTransform(element.x, element.y, element.scaleX, element.scaleY);
        element.formElement.element = element.formElement.parts.textline;
        parent[element.formElement.id] = element.formElement.container;
        element.visible = false;
        parent.removeChild(element);
    }

})(createjs||{});