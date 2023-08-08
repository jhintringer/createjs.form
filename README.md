# CreateJS Form Elements
Add interactive Form Elements for CreateJS and AnimateCC projects

## Work in progress...
The work isn't finished yet. Watch it for update progress!

## Example / Demo
https://jhintringer.github.io/createjs.form/example/example.html

## How-To initialize
Create Dynamic Textfield with a proper name and call createjs.Form.convert(ELEMENT, "class", {opts..});

Possible Classes are: (to be continued)
	
- input
- checkbox
- select

## How-To Use
All form elements found are collected in createjs.Form.elements using the name as **key**. So you can access the form element by calling:

``
	createjs.Form.elements.email
``

## Validation
Elements can have their own validate-Function inside options. Also the field "required" gets checked in options.
Simply call:

``
	if(createjs.Form.validate(createjs.Form.elements.email) == true) {} // for a particular element
	// or
	if(createjs.Form.validate(createjs.Form.elements)) {} // for all elements
``
to check for a valid value.

If a value is invalid, then the "onInvalid" function inside the element's options will be called and the validate function will return false.

## Dependencies

> EaselJS v1.0.0 (September 2017)

## License

[MIT License](https://opensource.org/licenses/MIT) 
([https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT))
