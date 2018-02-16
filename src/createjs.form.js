function TextInput(placeholder, font, color, placeholderColor, selectionColor) {

	var that = new createjs.Container();

	var createFields = function(font) {

		var firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
		if (firefox && createjs)
		{
			createjs.Text.prototype._drawTextLine = function(ctx, text, y)
			{
				// Adjust text position only if textBaseline is "top"
				if (this.textBaseline === "top")
				{
					var lineHeight = this.lineHeight || this.getMeasuredLineHeight();
					y += lineHeight * 0.1;
				}
				// Chrome 17 will fail to draw the text if the last param is included but null, so we feed it a large value instead:
				if (this.outline) { ctx.strokeText(text, 0, y, this.maxWidth||0xFFFF); }
				else { ctx.fillText(text, 0, y, this.maxWidth||0xFFFF); }
			};
		}

		that.cursor = 'text';

		that.textSelect = new createjs.Shape();
		that.textSelect.graphics
			.beginFill(that.selectionColor)
			.drawRect(0, 0, 0, that.lineHeight);
		that.textSelect.x = 0;
		that.textSelect.y = 0;
		that.textSelect.visible = true;
		that.textSelect.name = 'textSelect';
		that.addChild(that.textSelect);

		that.textField = new createjs.Text(that.placeholder, font, that.placeholderColor);
		that.textField.lineWidth = 9999999;
		that.textField.parent = that;
		that.addChild(that.textField);

		that.textCursor = new createjs.Shape();
		that.textCursor.graphics
			.beginFill(that.color)
			.drawRect(0, 0, that.cursorWidth, that.lineHeight);
		that.textCursor.x = 0;
		that.textCursor.y = 0;
		that.textCursor._blinker = null;
		that.textCursor.visible = false;
		that.textCursor.name = 'textCursor';
		that.addChild(that.textCursor);
	};

	var createEventListener = function() {

		that.on('mousedown', function(e) {
			try {
				e.preventDefault();
				e.nativeEvent.preventDefault();
				e.stopPropagation();
				e.nativeEvent.stopPropagation();
			} catch(e) {}
			if(that.focused===false) {
				createInput();
				focus();
			}
		});

		that.on('click', function(e) {
			if(that.input.selectionEnd === that.input.value.length) {
				that.input.selectionDirection = 'forward';
				that.input.selectionStart = that.input.value.length;
				that.input.selectionEnd = that.input.value.length;
				update();
			}
		});
		that.on('dblclick', function(e) {
			try { e.nativeEvent.stopPropagation(); } catch(e) {}
			that.input.selectionDirection = 'backward';
			that.input.selectionStart = 0;
			that.input.selectionEnd = that.input.value.length;
			update();
		});

	};

	var focus = function() {
		that.textCursor.visible = false;
		that.selectedDuration = 0;
		that.focused = true;
		that.dispatchEvent(new createjs.Event('focus'));
		that.textCursor.graphics
			.beginFill(that.color)
			.drawRect(0, 0, that.cursorWidth, that.height);
		update();
	};

	var blur = function() {
		that.textCursor.visible = false;
		that.textSelect.visible = false;
		that.focused = false;
		that.dispatchEvent(new createjs.Event('blur'));
		update();
	};

	var update = function() {

		if(that.value==='' && that.focused===false) {
			that.textField.text = that.placeholder;
			that.textField.color = that.placeholderColor;
		} else {
			if(that.input!=null) {
				that.textField.text = that.value.substr(that.input.selectionStart, that.input.selectionEnd - that.input.selectionStart);
				var selWidth = that.textField.getMeasuredWidth();
				var selEnd = (that.input.selectionDirection === 'backward' ? that.input.selectionStart : that.input.selectionEnd);
				that.textField.text = that.value.substr(0, selEnd);
				var cursorX = that.textField.getMeasuredWidth();

				if(cursorX > that.width) {
					var offset = cursorX - that.width;
					cursorX = that.width;
					that.textField.x = offset*-1;
				} else {
					that.textField.x = 0;
				}
				that.textCursor.regX = (cursorX - (that.cursorWidth/2)) * -1;
				that.textSelect.graphics._activeInstructions[0].w = selWidth;
				that.textSelect.visible = (selWidth > 0);
				that.textSelect.regX = (that.input.selectionDirection === 'backward' ? cursorX : cursorX - selWidth) * -1;
			}

			that.textCursor.visible = false;
			that.selectedDuration = 0;

			that.textField.text = that.value;
			that.textField.color = that.color;
		}
	};

	var createInput = function() {
		if(that.input !== null) return that.input;

		that.input = document.createElement('input');
		that.input.style.position = 'fixed';
		that.input.style.zIndex = '-100';
		that.input.style.opacity = '0';
		that.input.style.top = (-100 - that.input.offsetHeight)+'px';
		that.input.value = that.value;

		document.body.appendChild(that.input);
		window.focus();
		that.input.focus();

		that.input.addEventListener('input', function() {
			that.value = this.value;
			that.dispatchEvent(new createjs.Event('input'));
			update();
		}, false);

		that.input.addEventListener('blur', function() {
			if(that.input !== null) {
				deleteInput();
				blur();
			}
		}, false);

		that.input.addEventListener('keyup', function(e) { update(); });
		that.input.addEventListener('keydown', function(e) { update();
			if(e.which===9) { // Tab
				e.preventDefault();
				e.stopPropagation();
				for(var i=0; i<createjs._inputFields.length; i++) {
					if(createjs._inputFields[i] === that) {
						var next = (e.shiftKey===true?i+1:i-1);
						if(createjs._inputFields.length===next) next = 0;
						else if(next===-1) next = createjs._inputFields.length -1;
						createjs._inputFields[next].dispatchEvent(new createjs.Event('mousedown'));
						createjs._inputFields[next].dispatchEvent(new createjs.Event('dblclick'));
						break;
					}
				}
			}
		});

	};
	var deleteInput = function() {
		if(that.input === null) return;
		try {that.input.parentNode.removeChild(that.input); } catch(e) {}
		that.input = null;
	};

	var init = function() {
		that.off('tick', that.init);

		that.stage.enableMouseOver();

		that.stage.on('stagemousedown', function(e) {
			if(that.input !== null && (e.relatedTarget===null || e.relatedTarget.cursor !== "text")) {
				that.input.blur();
			}
		}, false);

		that.height = that.lineHeight;
		that.width = that.lineWidth;
		that.textCursor.graphics
			.beginFill(that.color)
			.drawRect(0, 0, that.cursorWidth, that.height);
		that.textSelect.graphics
			.beginFill(that.selectionColor)
			.drawRect(0, 0, 0, that.height);

		var hit = new createjs.Shape();
		hit.graphics.beginFill("#000").drawRect(0, 0, that.width, that.height);
		that.hitArea = hit;
		that.textField.mask = hit;
		that.textSelect.mask = hit;

	};

	var tick = function() {

		if (that.focused) {
			that.textField.color = that.color;
			if (that.selectedDuration % 16 === 0) {
				that.textCursor.visible = !that.textCursor.visible;
			}
			if(that.textSelect.visible===true) that.textCursor.visible = false;
			that.selectedDuration++;
		}
	};

	var constructor = function() {
		that.color = color;
		that.placeholder = placeholder;
		that.placeholderColor = (typeof placeholderColor === 'undefined' || placeholderColor === null ? '#CCCCCC' : placeholderColor);
		that.selectionColor = (typeof selectionColor === 'undefined' || selectionColor === null ? '#EEEEEE' : selectionColor);
		that.value = '';
		that.cursorWidth = 2;
		
		createFields(font);
		createEventListener();

		that.input = null;
		that.selectedDuration = 0;
		that.focused = false;
		that.init = that.on('tick', init);
		that.on('tick', function() { tick() });

	};

	constructor();

	if(typeof createjs._inputFields==='undefined') createjs._inputFields = [];
	createjs._inputFields.push(that);

	return that;

}
createjs.TextInput = TextInput;