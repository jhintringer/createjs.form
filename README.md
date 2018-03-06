# CreateJS Form Elements
Add interactive Form Elements for CreateJS and AnimateCC projects

## Work in progress...
The work isn't finished yet. Watch it for update progress!

## Example / Demo
https://jhintringer.github.io/createjs.form/

## How-To: Input
Include the *createjs.form.js* File after createjs and before any createjs calls.

Then just use the **TextInput** constructor for the Textfields instead of **Text**

``
	this.input = new createjs.TextInput("Placeholder...", "26px 'Arial'", "#000000");
``

Optionally you can define a **placeholder color** or a **selection color** as forth and fifth argument:

``
	this.input = new createjs.TextInput("Placeholder...", "26px 'Arial'", "#000000", "#CCCCCC", "#EFA40C");
``

## How-To: Checkbox
Include the *createjs.form.js* File after createjs and before any createjs calls.

Then just use the **Checkbox** constructor for the Textfields instead of **Text**

``
	this.checkbox = new createjs.Checkbox("Labeltext", "26px 'Arial'", "#000000");
``

Optionally you can define a **checked background color**, **checked icon color** or a **unchecked background color** as forth, fifth and sixth argument:

``
	this.checkbox = new createjs.Checkbox("Placeholder...", "26px 'Arial'", "#000000", "#009900", "#FFFFFF", "#CCCCCC");
``


## Dependencies

> EaselJS v0.8.2 (December 2015)

## License

[MIT License](https://opensource.org/licenses/MIT) 
([https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT))
