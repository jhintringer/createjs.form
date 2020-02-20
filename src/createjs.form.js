(function(cjs) {

	cjs.Form = {
		TextInput: function(textElement, placeholder, placeholderColor, selectionColor, selectionTextColor) {
			let data = cjs.Form.initiate(textElement, 'TextInput');
			// Cloning original element to wrap into container
			data.parts.textline = textElement.clone();
			data.parts.textline.name = textElement.formElement.name;
			data.parts.textline.formElement = textElement.formElement;
			data.container.addChild(data.parts.textline);
			data.parts.textline.setTransform(0, 0, 1, 1);
			// Setup config
			data.placeholder = placeholder || data.parts.textline.text;
			data.placeholderColor = placeholderColor || '#999999';
			data.color = data.parts.textline.color;
			data.parts.textline.color = data.placeholderColor;
			data.selectionColor = selectionColor || data.placeholderColor;
			data.selectionTextColor = selectionTextColor || '#141414';
			data.selection = null;
			// Define hitArea
			data.container.hitArea = new cjs.Shape();
			data.container.hitArea.graphics.beginFill('#000000').beginStroke().drawRect(0, 0, data.width, data.height);
			data.container.cursor = 'text';
			// Define Cursor
			data.parts.cursor = new cjs.Shape();
			data.parts.cursor.graphics.beginFill(data.color).beginStroke().drawRect(0, 0, 4, data.height);
			data.container.addChild(data.parts.cursor);
			data.parts.cursor.setTransform(0, 0);
			data.parts.cursor.visible = false;
			data.parts.cursor.mouseEnabled = false;
			data.parts.cursor._blinker = { ticker: null, fn: function() {
				if(this.has_focus !== true || this.selection !== null) return;
				let now = new Date().getTime();
				if(typeof this.parts.cursor._lastBlink === 'undefined') this.parts.cursor._lastBlink = now;
				if(now >= this.parts.cursor._lastBlink + 500) { // Cursor Blink Interval
					this.parts.cursor._lastBlink = now;
					this.parts.cursor.visible = !this.parts.cursor.visible;
				}
			} };
			// Define Selection
			data.parts.selection = new createjs.Shape();
			data.parts.selection.graphics.beginFill(data.selectionColor).beginStroke().drawRect(0,0, data.width, data.height);
			data.parts.selection.visible = false;
			data.parts.selection.mouseEnabled = false;
			data.container.addChild(data.parts.selection);
			data.parts.selection.setTransform(0, 0);
			// Define Selection Text
			data.parts.selectionText = data.parts.textline.clone();
			data.parts.selectionText.text = data.parts.textline.text;
			data.parts.selectionText.color = data.selectionTextColor;
			data.parts.selectionText.visible = false;
			data.parts.selectionText.mask = data.parts.selection;
			data.container.addChild(data.parts.selectionText);
			data.parts.selectionText.setTransform(0, 0);
			// Set dynamic property value
			Object.defineProperty(data, 'value', {
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
					return value;
				}
			});
			// Define functions
			Object.setPrototypeOf(data, {
				reset: function() {
					this.value = '';
					this.blur();
				},
				focus: function(event) {
					if(typeof event !== 'undefined') {
						event.nativeEvent.preventDefault();
						event.nativeEvent.stopPropagation();
					}
					if(cjs.Form.focussedElement !== null && cjs.Form.focussedElement !== this) { cjs.Form.focussedElement.blur() };
					if(cjs.Form.focussedElement == null || cjs.Form.focussedElement === this) {
						if(typeof event !== 'undefined') {
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
					this.parts.cursor._blinker.ticker = cjs.Ticker.on('tick', this.parts.cursor._blinker.fn.bind(this));
					window.addEventListener('mousedown', this.blur.bind(this));
					window.addEventListener('blur', this.blur.bind(this));
					if(!this.parts.cursor._typer)
						data.parts.cursor._typer = this._keyboardInput.bind(this);
					window.addEventListener('keydown', this.parts.cursor._typer);
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
					return lastMeasuredWidth;
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
								return;
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
						}
					}
					if(event.ctrlKey || event.altKey) return;
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
					} else if(this.parts.cursor.regX + this.container.regX >0) {
						this.container.regX = Math.abs(this.parts.cursor.regX);
						this.container.hitArea.regX = this.container.regX*-1;
					}
					if(this.parts.textline.getMeasuredWidth() < this.width) {
						this.container.regX = this.container.hitArea.regX = 0;
					}
				}
			});
			// Setup Events
			data.container.on('mousedown', data.focus.bind(data));
			data.container.on('pressmove', function(event) {
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
			}.bind(data));
			data.container.on('dblclick', function(e) { this._setSelection(); }.bind(data));
			// Replace old text element with new container
			cjs.Form.replaceElementWithContainer(textElement);
			return data;
		},
		TextArea: function(textElement) {
			let data = cjs.Form.initiate(textElement, 'TextArea');
			return data;
		},
		Checkbox: function(textElement) {
			let data = cjs.Form.initiate(textElement, 'Checkbox');
			// Cloning original element to wrap into container
			data.parts.textline = textElement.clone();
			data.parts.textline.name = textElement.formElement.name;
			data.parts.textline.formElement = textElement.formElement;
			data.container.addChild(data.parts.textline);
			data.parts.textline.lineWidth -= data.parts.textline.lineHeight * 1.1;
			data.parts.textline.setTransform(data.parts.textline.lineHeight * 1.1, 0, 1, 1);
			// Setup config
			data.default = false;
			data.value = data.default;
			data.color = data.parts.textline.color;
			data.backgroundColor = '#FFFFFF';
			data.borderColor = data.color;
			data.activeColor = data.color;
			data.activeCheckColor = '#FFFFFF';
			// Define hitArea
			data.container.hitArea = new cjs.Shape();
			data.container.hitArea.graphics.beginFill('#000000').beginStroke().drawRect(0, 0, data.width, data.height);
			data.container.cursor = 'pointer';
			// Define Box
			data.parts.box = new cjs.Shape();
			data.parts.box.graphics.beginFill(data.backgroundColor).setStrokeStyle(data.parts.textline.lineHeight*0.07,'round').beginStroke(data.borderColor).drawRoundRect(0, 0, data.parts.textline.lineHeight-8, data.parts.textline.lineHeight-8, data.parts.textline.lineHeight*0.1, data.parts.textline.lineHeight*0.1, data.parts.textline.lineHeight*0.1, data.parts.textline.lineHeight*0.1);
			data.container.addChild(data.parts.box);
			data.parts.box.setTransform(4, 4);
			// Define Checkmark
			data.parts.check = new cjs.Shape();
			data.parts.check.graphics.beginFill(data.activeColor).setStrokeStyle(data.parts.textline.lineHeight*0.07,'round').beginStroke(data.activeColor).drawRoundRect(0, 0, data.parts.textline.lineHeight-8, data.parts.textline.lineHeight-8, data.parts.textline.lineHeight*0.1, data.parts.textline.lineHeight*0.1, data.parts.textline.lineHeight*0.1, data.parts.textline.lineHeight*0.1);
			data.parts.check.graphics.setStrokeStyle(data.parts.textline.lineHeight*0.15,'round').beginStroke(data.activeCheckColor).moveTo(data.parts.textline.lineHeight*0.7, data.parts.textline.lineHeight*0.16).lineTo(data.parts.textline.lineHeight*0.35, data.parts.textline.lineHeight*0.65).lineTo(data.parts.textline.lineHeight*0.15, data.parts.textline.lineHeight*0.5);
			data.container.addChild(data.parts.check);
			data.parts.check.setTransform(4, 4);
			data.parts.check.visible = data.default;
			// Define functions
			Object.setPrototypeOf(data, {
				reset: function () {
					this.value = this.default;
					this._updateCheckmark();
					this.blur();
				},
				focus: function (event) {
					if(typeof event !== 'undefined') {
						event.nativeEvent.preventDefault();
						event.nativeEvent.stopPropagation();
					}
					if(cjs.Form.focussedElement !== null && cjs.Form.focussedElement !== this) { cjs.Form.focussedElement.blur() };
					cjs.Form.focussedElement = this;
					this.has_focus = true;
					window.addEventListener('mousedown', this.blur.bind(this));
					window.addEventListener('blur', this.blur.bind(this));
				},
				blur: function () {
					cjs.Form.focussedElement = null;
					this.has_focus = false;
					window.removeEventListener('mousedown', this.blur.bind(this));
					window.removeEventListener('blur', this.blur.bind(this));
				},
				/* private helper methods */
				_setTextDynamic: function(value) {
					this.parts.textline.text = value;
				},
				_toggleState: function() {
					this.value = !this.value;
					this._updateCheckmark();
				},
				_updateCheckmark: function () {
					this.parts.check.visible = this.value;
				}
			});
			// Setup Events
			data.container.on('mousedown', function(event) { this.focus.bind(this)(event); this._toggleState.bind(this)(); }.bind(data));
			// Replace old text element with new container
			cjs.Form.replaceElementWithContainer(textElement);
			return data;
		},
		Select: function(textElement) {
			let data = cjs.Form.initiate(textElement, 'Select');
			return data;
		},


		/* Auto detect type by resolving instance name prefix */
		autoDetect: function(textElement) {
			if(textElement.text && textElement.name && textElement.name.indexOf('_') > -1 && !textElement.formElement) {
				let prefix = textElement.name.split('_', 2);
				if(prefix.length !== 2) return false;
				prefix = prefix[0].toLowerCase();
				if(autoAssignTags.hasOwnProperty(prefix)) return autoAssignTags[prefix](textElement);
			}
			return false;
		},
		autoDetectAll: function(root) {
			for(let c=0; c<root.children.length; c++) {
				if(typeof root.children[c].text !== 'undefined') {
					let formElement = this.autoDetect(root.children[c]);
					if(!formElement) {
						if(typeof root.children[c].children !== 'undefined') this.autoDetectAll(root.children[c]);
					}
				} else {
					if(typeof root.children[c].children !== 'undefined') this.autoDetectAll(root.children[c]);
				}
			}
			return this.elements;
		},

		elements: {},
		focussedElement: null
	};

	/* Form helper functions */
	Object.setPrototypeOf(cjs.Form, {
		initiate: function(element, type) {
			if(element.formElement) return element.formElement;
			let prefix = element.name.split('_', 2);
			if(prefix.length !== 2) return null;
			let original_name = prefix[1];
			prefix = prefix[0].toLowerCase();
			element.formElement = this.elements[original_name] = {
				container: new cjs.Container(),
				parts: {},
				name: original_name,
				type: type,
				width: Math.max(element.lineWidth, element.getMeasuredWidth()),
				height: Math.max(element.lineHeight, element.getMeasuredHeight()),
				has_focus: false,
				has_changed: false
			};
			element.formElement.container.mask = new cjs.Shape();
			element.formElement.container.mask.graphics.beginFill("#000000").beginStroke().drawRect(element.x - 3, element.y - 3, element.formElement.width + 6, element.formElement.height + 6);
			element.formElement.container.mask.offsets = {x: element.x -3, y: element.y -3};
			Object.defineProperty(element.formElement, 'x', {
				get: function() { return this.container.x; },
				set: function(value) {
					this.container.mask.x = value - this.container.mask.offsets.x;
					this.container.x = value;
					return this.container.x;
				}
			});
			Object.defineProperty(element.formElement, 'y', {
				get: function() { return this.container.y; },
				set: function(value) {
					this.container.mask.y = value - this.container.mask.offsets.x;
					this.container.y = value;
					return this.container.y;
				}
			});
			return element.formElement;
		},
		replaceElementWithContainer: function(element) {
			if(!element.formElement) return false;
			element.parent[element.name] = element.formElement;
			element.visible = false;
			element.parent.addChild(element.formElement.container);
			element.formElement.container.setTransform(element.x, element.y, element.scaleX, element.scaleY);
			element.parent.removeChild(element);
			return true;
		}
	});

	let autoAssignTags = {
		'input': cjs.Form.TextInput,
		'text': cjs.Form.TextArea,
		'checkbox': cjs.Form.Checkbox,
		'select': cjs.Form.Select
	};

})(createjs||{});
