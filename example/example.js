(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.form = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_3
	this.checkbox_agb = new cjs.Text("Yes, I agree", "50px 'Arial'", "#191919");
	this.checkbox_agb.name = "checkbox_agb";
	this.checkbox_agb.lineHeight = 58;
	this.checkbox_agb.lineWidth = 530;
	this.checkbox_agb.parent = this;
	this.checkbox_agb.setTransform(349,116.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#191919").beginStroke().moveTo(-3.4,13).lineTo(-3.4,6.1).lineTo(3.4,6.1).lineTo(3.4,13).closePath().moveTo(-3.4,-6.1).lineTo(-3.4,-13).lineTo(3.4,-13).lineTo(3.4,-6.1).closePath();
	this.shape.setTransform(306.725,148.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#191919").beginStroke().moveTo(5.1,13).lineTo(-0.2,4.9).lineTo(-5.5,13).lineTo(-13.5,13).lineTo(-4.2,-0.4).lineTo(-13.1,-13).lineTo(-4.8,-13).lineTo(-0.2,-5.8).lineTo(4.7,-13).lineTo(12.7,-13).lineTo(3.9,-0.7).lineTo(13.5,13).closePath();
	this.shape_1.setTransform(284.425,148.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#191919").beginStroke().moveTo(-6.8,11.9).curveTo(-10,10.3,-11.7,7.2).curveTo(-13.4,4.1,-13.4,-0.4).curveTo(-13.4,-3.8,-11.7,-7).curveTo(-10,-10.2,-6.9,-11.9).curveTo(-3.8,-13.6,-0,-13.6).curveTo(5.9,-13.5,9.6,-9.8).curveTo(13.4,-5.9,13.4,-0.1).curveTo(13.4,5.8,9.6,9.7).curveTo(5.8,13.5,0,13.5).curveTo(-3.5,13.5,-6.8,11.9).closePath().moveTo(-4.5,-5.9).curveTo(-6.3,-3.8,-6.3,0).curveTo(-6.3,3.9,-4.5,5.9).curveTo(-2.7,8,0,7.9).curveTo(2.7,8,4.5,5.9).curveTo(6.3,3.9,6.3,-0.1).curveTo(6.3,-3.8,4.5,-5.9).curveTo(2.7,-7.9,0,-8).curveTo(-2.7,-7.9,-4.5,-5.9).closePath();
	this.shape_2.setTransform(255.475,148.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#191919").beginStroke().moveTo(-2.5,17.1).curveTo(-4.7,16,-6.3,13.8).lineTo(-6.3,17.6).lineTo(-12.6,17.6).lineTo(-12.6,-18.2).lineTo(-5.8,-18.2).lineTo(-5.8,-5.3).curveTo(-2.6,-8.9,1.8,-8.9).curveTo(6.4,-8.9,9.5,-5.5).curveTo(12.7,-2,12.7,4.3).curveTo(12.7,11,9.5,14.6).curveTo(6.3,18.2,1.8,18.2).curveTo(-0.4,18.2,-2.5,17.1).closePath().moveTo(-4.2,-1.7).curveTo(-5.9,0.1,-5.9,4).curveTo(-5.8,8.1,-4.5,10.1).curveTo(-2.8,12.8,0.2,12.8).curveTo(2.4,12.8,4,10.9).curveTo(5.6,8.9,5.7,4.7).curveTo(5.7,0.3,4,-1.7).curveTo(2.4,-3.6,-0.1,-3.7).curveTo(-2.5,-3.7,-4.2,-1.7).closePath();
	this.shape_3.setTransform(225.55,143.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#191919").beginStroke().moveTo(4.6,17.9).lineTo(-1.9,6.2).lineTo(-5.1,9.6).lineTo(-5.1,17.9).lineTo(-12,17.9).lineTo(-12,-17.9).lineTo(-5.1,-17.9).lineTo(-5.1,1.1).lineTo(2.9,-8.1).lineTo(11.4,-8.1).lineTo(2.5,1.5).lineTo(12,17.9).closePath();
	this.shape_4.setTransform(197.125,143.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#191919").beginStroke().moveTo(-8.9,9.9).curveTo(-12.2,6.4,-12.2,0).curveTo(-12.2,-6.4,-8.9,-10).curveTo(-5.5,-13.6,0.3,-13.6).curveTo(5.1,-13.6,7.9,-11.5).curveTo(10.7,-9.5,11.9,-5.3).lineTo(5.1,-4.1).curveTo(4.8,-6.1,3.6,-7.2).curveTo(2.3,-8.2,0.4,-8.2).curveTo(-2.1,-8.2,-3.7,-6.4).curveTo(-5.2,-4.7,-5.2,-0.5).curveTo(-5.2,4.1,-3.6,6.1).curveTo(-2.1,7.9,0.5,7.9).curveTo(2.5,8,3.7,6.9).curveTo(5,5.7,5.5,3).lineTo(12.2,4.2).curveTo(11.2,8.8,8.2,11.2).curveTo(5.2,13.5,0.2,13.5).curveTo(-5.5,13.6,-8.9,9.9).closePath();
	this.shape_5.setTransform(168.325,148.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#191919").beginStroke().moveTo(-9.6,9.1).curveTo(-12.1,5.6,-12.1,0.2).curveTo(-12.1,-6.3,-8.8,-9.9).curveTo(-5.4,-13.6,-0.2,-13.6).curveTo(5.5,-13.5,8.9,-9.8).curveTo(12.2,-5.9,12.1,1.9).lineTo(-5.1,1.9).curveTo(-5,5,-3.4,6.7).curveTo(-1.9,8.4,0.5,8.4).curveTo(2.1,8.4,3.2,7.6).curveTo(4.3,6.6,4.9,4.7).lineTo(11.7,5.9).curveTo(10.4,9.6,7.6,11.6).curveTo(4.7,13.5,0.4,13.5).curveTo(-6.3,13.5,-9.6,9.1).closePath().moveTo(5.3,-2.2).curveTo(5.2,-5.2,3.7,-6.7).curveTo(2.3,-8.3,0.2,-8.3).curveTo(-2.1,-8.3,-3.5,-6.7).curveTo(-5,-5.1,-5,-2.2).lineTo(5.3,-2.2).lineTo(5.3,-2.2).closePath();
	this.shape_6.setTransform(139.9032,148.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#191919").beginStroke().moveTo(5,17.9).lineTo(5,4.2).curveTo(5,0.1,4.5,-1).curveTo(4.2,-2.1,3.2,-2.7).curveTo(2.2,-3.4,0.7,-3.4).curveTo(-1,-3.3,-2.3,-2.6).curveTo(-3.7,-1.7,-4.3,0).curveTo(-4.9,1.7,-4.9,4.9).lineTo(-4.9,17.9).lineTo(-11.8,17.9).lineTo(-11.8,-17.9).lineTo(-4.9,-17.9).lineTo(-4.9,-4.7).curveTo(-1.6,-8.6,3,-8.6).curveTo(5.4,-8.6,7.3,-7.7).curveTo(9.2,-6.9,10.2,-5.5).curveTo(11.1,-4.1,11.5,-2.5).curveTo(11.8,-0.8,11.8,2.7).lineTo(11.8,17.9).closePath();
	this.shape_7.setTransform(111.05,143.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#191919").beginStroke().moveTo(-11,13.6).curveTo(-15.6,8.8,-15.6,0.3).curveTo(-15.6,-8.6,-11,-13.6).curveTo(-6.4,-18.5,1.1,-18.5).curveTo(7.7,-18.5,11.8,-14.6).curveTo(14.3,-12.3,15.5,-8.1).lineTo(8.3,-6.3).curveTo(7.7,-9.1,5.7,-10.7).curveTo(3.7,-12.3,0.8,-12.3).curveTo(-3.2,-12.3,-5.6,-9.4).curveTo(-8.2,-6.6,-8.2,-0.2).curveTo(-8.1,6.6,-5.7,9.5).curveTo(-3.3,12.4,0.7,12.4).curveTo(3.5,12.4,5.6,10.5).curveTo(7.7,8.6,8.6,4.7).lineTo(15.6,7).curveTo(14,12.8,10.3,15.7).curveTo(6.5,18.5,0.7,18.5).curveTo(-6.4,18.5,-11,13.6).closePath();
	this.shape_8.setTransform(77.55,143.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.checkbox_agb}]}).wait(1));

	// Ebene_1
	this.select_gender = new cjs.Text("Please choose...", "50px 'Arial'", "#191919");
	this.select_gender.name = "select_gender";
	this.select_gender.lineHeight = 58;
	this.select_gender.lineWidth = 530;
	this.select_gender.parent = this;
	this.select_gender.setTransform(348,260.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#191919").beginStroke().moveTo(-3.4,13).lineTo(-3.4,6.1).lineTo(3.4,6.1).lineTo(3.4,13).closePath().moveTo(-3.4,-6.1).lineTo(-3.4,-13).lineTo(3.4,-13).lineTo(3.4,-6.1).closePath();
	this.shape_9.setTransform(305.725,292.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#191919").beginStroke().moveTo(-1.1,17.2).curveTo(-2.6,16.6,-3.3,15.6).curveTo(-4,14.6,-4.2,12.9).curveTo(-4.5,11.8,-4.5,8.1).lineTo(-4.5,-3.2).lineTo(-7.6,-3.2).lineTo(-7.6,-8.7).lineTo(-4.5,-8.7).lineTo(-4.5,-13.8).lineTo(2.4,-17.9).lineTo(2.4,-8.7).lineTo(7.1,-8.7).lineTo(7.1,-3.2).lineTo(2.4,-3.2).lineTo(2.4,7.2).lineTo(2.5,10.9).curveTo(2.6,11.4,3.2,11.8).curveTo(3.6,12.2,4.3,12.2).curveTo(5.2,12.2,7,11.5).lineTo(7.7,16.8).curveTo(5.2,17.9,2.2,17.9).curveTo(0.4,17.9,-1.1,17.2).closePath();
	this.shape_10.setTransform(289.15,288.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#191919").beginStroke().moveTo(-8.9,10).curveTo(-12.2,6.3,-12.2,-0).curveTo(-12.2,-6.4,-8.9,-9.9).curveTo(-5.5,-13.6,0.3,-13.5).curveTo(5.1,-13.6,7.9,-11.5).curveTo(10.7,-9.5,11.9,-5.3).lineTo(5.1,-4.1).curveTo(4.8,-6.1,3.6,-7.1).curveTo(2.3,-8.2,0.4,-8.1).curveTo(-2.1,-8.1,-3.7,-6.4).curveTo(-5.2,-4.6,-5.2,-0.5).curveTo(-5.2,4.1,-3.6,6.1).curveTo(-2.1,8,0.5,8).curveTo(2.5,8,3.7,6.8).curveTo(5,5.7,5.5,3).lineTo(12.2,4.1).curveTo(11.2,8.8,8.2,11.1).curveTo(5.2,13.6,0.2,13.6).curveTo(-5.5,13.6,-8.9,10).closePath();
	this.shape_11.setTransform(267.275,292.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#191919").beginStroke().moveTo(-9.6,9.1).curveTo(-12.1,5.6,-12.1,0.2).curveTo(-12.1,-6.2,-8.8,-9.9).curveTo(-5.4,-13.5,-0.2,-13.5).curveTo(5.5,-13.6,8.9,-9.7).curveTo(12.2,-5.9,12.1,1.9).lineTo(-5.1,1.9).curveTo(-5,5,-3.4,6.7).curveTo(-1.9,8.4,0.5,8.4).curveTo(2.1,8.4,3.2,7.5).curveTo(4.3,6.7,4.9,4.7).lineTo(11.7,5.8).curveTo(10.4,9.6,7.6,11.6).curveTo(4.7,13.6,0.4,13.6).curveTo(-6.3,13.6,-9.6,9.1).closePath().moveTo(5.3,-2.3).curveTo(5.2,-5.2,3.7,-6.8).curveTo(2.3,-8.3,0.2,-8.3).curveTo(-2.1,-8.3,-3.5,-6.7).curveTo(-5,-5.1,-5,-2.3).lineTo(5.3,-2.3).lineTo(5.3,-2.3).closePath();
	this.shape_12.setTransform(238.8532,292.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#191919").beginStroke().moveTo(-3.4,17.9).lineTo(-3.4,-17.9).lineTo(3.4,-17.9).lineTo(3.4,17.9).closePath();
	this.shape_13.setTransform(218.325,287.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#191919").beginStroke().moveTo(-9.6,9.1).curveTo(-12.1,5.6,-12.1,0.2).curveTo(-12.1,-6.2,-8.8,-9.9).curveTo(-5.4,-13.5,-0.2,-13.5).curveTo(5.5,-13.6,8.9,-9.7).curveTo(12.2,-5.9,12.1,1.9).lineTo(-5.1,1.9).curveTo(-5,5,-3.4,6.7).curveTo(-1.9,8.4,0.5,8.4).curveTo(2.1,8.4,3.2,7.5).curveTo(4.3,6.7,4.9,4.7).lineTo(11.7,5.8).curveTo(10.4,9.6,7.6,11.6).curveTo(4.7,13.6,0.4,13.6).curveTo(-6.3,13.6,-9.6,9.1).closePath().moveTo(5.3,-2.3).curveTo(5.2,-5.2,3.7,-6.8).curveTo(2.3,-8.3,0.2,-8.3).curveTo(-2.1,-8.3,-3.5,-6.7).curveTo(-5,-5.1,-5,-2.3).lineTo(5.3,-2.3).lineTo(5.3,-2.3).closePath();
	this.shape_14.setTransform(197.2032,292.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#191919").beginStroke().moveTo(-10.2,15.4).curveTo(-13.8,12.2,-14.5,6.2).lineTo(-7.5,5.5).curveTo(-6.9,9.1,-4.9,10.7).curveTo(-3,12.4,0.3,12.4).curveTo(3.8,12.4,5.5,10.9).curveTo(7.4,9.5,7.3,7.5).curveTo(7.3,6.2,6.6,5.3).curveTo(5.8,4.4,4,3.8).lineTo(-1.8,2.2).curveTo(-7.6,0.8,-10,-1.3).curveTo(-13.2,-4.3,-13.3,-8.5).curveTo(-13.3,-11.3,-11.7,-13.6).curveTo(-10.2,-16,-7.2,-17.3).curveTo(-4.3,-18.5,-0.2,-18.5).curveTo(6.6,-18.5,9.9,-15.6).curveTo(13.4,-12.6,13.5,-7.7).lineTo(6.3,-7.4).curveTo(5.8,-10.1,4.4,-11.3).curveTo(2.8,-12.5,-0.2,-12.5).curveTo(-3.4,-12.5,-5.2,-11.3).curveTo(-6.4,-10.4,-6.4,-9).curveTo(-6.4,-7.8,-5.3,-6.9).curveTo(-3.9,-5.7,1.4,-4.5).curveTo(6.6,-3.2,9.2,-1.9).curveTo(11.7,-0.6,13.2,1.8).curveTo(14.6,4.1,14.5,7.5).curveTo(14.6,10.5,12.8,13.2).curveTo(11.2,15.9,8,17.2).curveTo(4.9,18.5,0.2,18.5).curveTo(-6.6,18.5,-10.2,15.4).closePath();
	this.shape_15.setTransform(166.55,287.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#191919").beginStroke().moveTo(-3.4,13).lineTo(-3.4,6.1).lineTo(3.4,6.1).lineTo(3.4,13).closePath().moveTo(-3.4,-6.1).lineTo(-3.4,-13).lineTo(3.4,-13).lineTo(3.4,-6.1).closePath();
	this.shape_16.setTransform(307.525,11.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#191919").beginStroke().moveTo(-1.1,17.3).curveTo(-2.6,16.6,-3.3,15.6).curveTo(-4,14.6,-4.2,12.9).curveTo(-4.5,11.8,-4.5,8.1).lineTo(-4.5,-3.2).lineTo(-7.6,-3.2).lineTo(-7.6,-8.7).lineTo(-4.5,-8.7).lineTo(-4.5,-13.9).lineTo(2.4,-17.8).lineTo(2.4,-8.7).lineTo(7.1,-8.7).lineTo(7.1,-3.2).lineTo(2.4,-3.2).lineTo(2.4,7.3).lineTo(2.5,11).curveTo(2.6,11.4,3.2,11.8).curveTo(3.6,12.1,4.3,12.1).curveTo(5.2,12.1,7,11.5).lineTo(7.7,16.8).curveTo(5.2,17.9,2.2,17.8).curveTo(0.4,17.8,-1.1,17.3).closePath();
	this.shape_17.setTransform(290.95,6.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#191919").beginStroke().moveTo(-7.9,12.1).curveTo(-9.9,11,-10.9,8.9).curveTo(-11.8,6.8,-11.8,3.2).lineTo(-11.8,-13.3).lineTo(-4.9,-13.3).lineTo(-4.9,-1.3).curveTo(-5,4.1,-4.6,5.4).curveTo(-4.2,6.6,-3.2,7.3).curveTo(-2.2,8,-0.6,8).curveTo(1.1,8,2.5,7.1).curveTo(3.9,6.1,4.4,4.7).curveTo(4.9,3.3,4.9,-2.3).lineTo(4.9,-13.3).lineTo(11.8,-13.3).lineTo(11.8,12.7).lineTo(5.4,12.7).lineTo(5.4,8.8).curveTo(4,10.9,1.7,12.1).curveTo(-0.7,13.3,-3.2,13.3).curveTo(-5.8,13.3,-7.9,12.1).closePath();
	this.shape_18.setTransform(267.3,11.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#191919").beginStroke().moveTo(-12.7,18.2).lineTo(-12.7,-17.6).lineTo(-6.2,-17.6).lineTo(-6.2,-13.8).curveTo(-5,-15.7,-2.9,-17).curveTo(-0.8,-18.2,1.8,-18.2).curveTo(6.3,-18.2,9.5,-14.6).curveTo(12.7,-11.1,12.7,-4.8).curveTo(12.6,1.7,9.5,5.3).curveTo(6.3,8.9,1.7,8.9).curveTo(-0.4,8.9,-2.1,8.1).curveTo(-3.9,7.2,-5.8,5.1).lineTo(-5.8,18.2).closePath().moveTo(-4.2,-10.8).curveTo(-5.9,-8.9,-5.8,-5.1).curveTo(-5.8,-0.7,-4.1,1.4).curveTo(-2.4,3.5,0.1,3.5).curveTo(2.5,3.5,4,1.6).curveTo(5.6,-0.4,5.7,-4.7).curveTo(5.7,-8.8,4,-10.8).curveTo(2.4,-12.8,-0.1,-12.8).curveTo(-2.5,-12.8,-4.2,-10.8).closePath();
	this.shape_19.setTransform(237.6,15.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#191919").beginStroke().moveTo(4.9,13.3).lineTo(4.9,0).curveTo(5,-4.2,4.5,-5.4).curveTo(4.1,-6.7,3.1,-7.3).curveTo(2.1,-8,0.7,-8).curveTo(-1,-8,-2.5,-7.1).curveTo(-3.9,-6,-4.4,-4.5).curveTo(-5,-2.9,-5,1.5).lineTo(-5,13.3).lineTo(-11.8,13.3).lineTo(-11.8,-12.7).lineTo(-5.4,-12.7).lineTo(-5.4,-8.9).curveTo(-2.1,-13.3,3.1,-13.3).curveTo(5.4,-13.2,7.3,-12.5).curveTo(9.1,-11.6,10.1,-10.3).curveTo(11,-9.1,11.5,-7.5).curveTo(11.8,-5.9,11.8,-2.8).lineTo(11.8,13.3).closePath();
	this.shape_20.setTransform(206.4,10.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#191919").beginStroke().moveTo(-3.6,17.9).lineTo(-3.6,-17.9).lineTo(3.6,-17.9).lineTo(3.6,17.9).closePath();
	this.shape_21.setTransform(184.225,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.select_gender}]}).wait(1));

	// Ebene_4
	this.input_name = new cjs.Text("Placeholder", "50px 'Arial'", "#191919");
	this.input_name.name = "input_name";
	this.input_name.lineHeight = 58;
	this.input_name.lineWidth = 530;
	this.input_name.parent = this;
	this.input_name.setTransform(348.55,-24.2);

	this.timeline.addTween(cjs.Tween.get(this.input_name).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.form, new cjs.Rectangle(30.2,-26.2,851,344.09999999999997), null);


(lib._landscape_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#FFFFFF","#979797"],[0,1],0,0,0,0,0,1126.1).beginStroke().moveTo(-976.9,560).lineTo(-976.9,-560).lineTo(976.9,-560).lineTo(976.9,560).closePath();
	this.shape.setTransform(-3.725,-610.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._landscape_, new cjs.Rectangle(-980.6,-1170.1,1953.8000000000002,1120), null);


// stage content:
(lib.example = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Forms
	this.form = new lib.form();
	this.form.name = "form";
	this.form.setTransform(16.5,92.2,0.5331,0.5331,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.form).wait(1));

	// BG
	this._landscape_ = new lib._landscape_();
	this._landscape_.name = "_landscape_";
	this._landscape_.setTransform(291.35,421.55,0.2986,0.3616,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this._landscape_).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(288.5,198.3,293.4,205.09999999999997);
// library properties:
lib.properties = {
	id: '08CFC7B696DE7D44BD3ACA895985C52B',
	width: 580,
	height: 400,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['08CFC7B696DE7D44BD3ACA895985C52B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;