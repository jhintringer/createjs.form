# CreateJS Form Elements
Add interactive Form Elements for CreateJS and AnimateCC projects

## Work in progress...
The work isn't finished yet. Watch it for update progress!

## Example / Demo
https://jhintringer.github.io/createjs.form/example/example.html

## How-To initialize
Create TextFields like a normal Text, but set a **prefix** to the name of the textfield.

Possible Prefixes are... (to be continued)
	
- input_
- checkbox_
- select_


After that initialize them one by one using the 

``
	createjs.Form.autoDetect(root.path.to.textelement);
``

Or simple detect **all of them** with one line:

``
	createjs.Form.autoDetectAll(root);
``

## How-To Use
All form elements found are collected in createjs.Form.elements using the name **without prefix** as **key**. So you can access the form element by calling:

``
	createjs.Form.elements.email
``


## Dependencies

> EaselJS v1.0.0 (September 2017)

## License

[MIT License](https://opensource.org/licenses/MIT) 
([https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT))
