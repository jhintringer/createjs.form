(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.redBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(233,0,0,0.376)","rgba(255,255,255,0)"],[0,1],0,18.6,0,-18.6).s().p("A/UC4QgUABAAgXIAAlDQAAgXAUAAMA+pAAAQAUAAAAAXIAAFDQAAAXgUgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.5,-18.4,405,36.9);


(lib.input4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.input = new cjs.TextInput("", "26px 'Arial'", "#111111", null, "#efa40c");
	this.input.name = "input";
	this.input.lineHeight = 31;
	this.input.lineWidth = 394;
	this.input.parent = this;
	this.input.setTransform(-197,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.input).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#111111").ss(1,1,1).p("A/Ui4MA+pAAAQAUAAAAAXIAAFDQAAAXgUAAMg+pAAAQgUAAAAgXIAAlDQAAgXAUAAg");
	this.shape.setTransform(0.5,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A/UC4QgUAAAAgWIAAlDQAAgWAUgBMA+pAAAQAUABAAAWIAAFDQAAAWgUAAg");
	this.shape_1.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.input4, new cjs.Rectangle(-203,-19,407,38.9), null);


(lib.input3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.input = new cjs.TextInput("", "26px 'Arial'", "#111111");
	this.input.name = "input";
	this.input.lineHeight = 31;
	this.input.lineWidth = 394;
	this.input.parent = this;
	this.input.setTransform(-197,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.input).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#111111").ss(1,1,1).p("A/Ui4MA+pAAAQAUAAAAAXIAAFDQAAAXgUAAMg+pAAAQgUAAAAgXIAAlDQAAgXAUAAg");
	this.shape.setTransform(0.5,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A/UC4QgUAAAAgWIAAlDQAAgWAUgBMA+pAAAQAUABAAAWIAAFDQAAAWgUAAg");
	this.shape_1.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.input3, new cjs.Rectangle(-203,-19,407,38.9), null);


(lib.input2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.input = new cjs.TextInput("Placeholder...", "26px 'Arial'", "#111111");
	this.input.name = "input";
	this.input.lineHeight = 31;
	this.input.lineWidth = 394;
	this.input.parent = this;
	this.input.setTransform(-197,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.input).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#111111").ss(1,1,1).p("A/Ui4MA+pAAAQAUAAAAAXIAAFDQAAAXgUAAMg+pAAAQgUAAAAgXIAAlDQAAgXAUAAg");
	this.shape.setTransform(0.5,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A/UC4QgUAAAAgWIAAlDQAAgWAUgBMA+pAAAQAUABAAAWIAAFDQAAAWgUAAg");
	this.shape_1.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.input2, new cjs.Rectangle(-203,-19,407,38.9), null);


(lib.input1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.input = new cjs.TextInput("Placeholder...", "26px 'Arial'", "#111111", "#999999");
	this.input.name = "input";
	this.input.lineHeight = 31;
	this.input.lineWidth = 394;
	this.input.parent = this;
	this.input.setTransform(-197,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.input).wait(1));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(3,1,1).p("A/UAAMA+pAAA");
	this.shape.setTransform(0.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.input1, new cjs.Rectangle(-201.5,-16.5,404,37.6), null);


(lib.greenBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(65,224,0,0.549)","rgba(17,233,0,0.376)","rgba(255,255,255,0)"],[0,0,1],0,18.6,0,-18.6).s().p("A/UC4QgUABAAgXIAAlDQAAgXAUAAMA+pAAAQAUAAAAAXIAAFDQAAAXgUgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.5,-18.4,405,36.9);


(lib.checkbox1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.input = new cjs.Checkbox("I agree to the terms.", "26px 'Arial'", "#111111");
	this.input.name = "input";
	this.input.lineHeight = 31;
	this.input.lineWidth = 394;
	this.input.parent = this;
	this.input.setTransform(-197,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.input).wait(1));

}).prototype = getMCSymbolPrototype(lib.checkbox1, new cjs.Rectangle(-199,-16.5,398,33.1), null);


(lib.input5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.input = new cjs.TextInput("", "26px 'Arial'", "#990000");
	this.input.name = "input";
	this.input.lineHeight = 31;
	this.input.lineWidth = 394;
	this.input.parent = this;
	this.input.setTransform(-197,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.input).wait(1));

	// box
	this.redBg = new lib.redBg();
	this.redBg.name = "redBg";
	this.redBg.parent = this;
	this.redBg.setTransform(0.5,0.4);

	this.greenBg = new lib.greenBg();
	this.greenBg.name = "greenBg";
	this.greenBg.parent = this;
	this.greenBg.setTransform(0.5,0.4);
	this.greenBg.visible = false;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#111111").ss(1,1,1).p("AfpgKQAAAVgUAAMg+pAAAQgUAAAAgV");
	this.shape.setTransform(0.5,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.greenBg},{t:this.redBg}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.input5, new cjs.Rectangle(-203,-18,407,37.9), null);


(lib.checkbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// inputs
	this.checkbox1 = new lib.checkbox1();
	this.checkbox1.name = "checkbox1";
	this.checkbox1.parent = this;
	this.checkbox1.setTransform(-0.5,-76.2,1,1,0,0,0,0.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.checkbox1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("EgirgFaMBFXAAAIAAK1MhFXAAAg");
	this.shape.setTransform(-0.5,-78.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("EgirAFaIAAq0MBFXAAAIAAK0g");
	this.shape_1.setTransform(-0.5,-78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.checkbox, new cjs.Rectangle(-223.5,-114.2,446,71.3), null);


(lib.inputbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// inputs
	this.inputbox5 = new lib.input5();
	this.inputbox5.name = "inputbox5";
	this.inputbox5.parent = this;
	this.inputbox5.setTransform(-0.5,143.2,1,1,0,0,0,0.5,2.2);

	this.inputbox4 = new lib.input4();
	this.inputbox4.name = "inputbox4";
	this.inputbox4.parent = this;
	this.inputbox4.setTransform(-0.5,89.2,1,1,0,0,0,0.5,2.2);

	this.inputbox3 = new lib.input3();
	this.inputbox3.name = "inputbox3";
	this.inputbox3.parent = this;
	this.inputbox3.setTransform(-0.5,37.7,1,1,0,0,0,0.5,2.2);

	this.inputbox2 = new lib.input1();
	this.inputbox2.name = "inputbox2";
	this.inputbox2.parent = this;
	this.inputbox2.setTransform(-3,-21.9);

	this.inputbox1 = new lib.input2();
	this.inputbox1.name = "inputbox1";
	this.inputbox1.parent = this;
	this.inputbox1.setTransform(-0.5,-69.2,1,1,0,0,0,0.5,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.inputbox2},{t:this.inputbox1},{t:this.inputbox3},{t:this.inputbox4},{t:this.inputbox5}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#333333").ss(1,1,1).dr(-222,-210.75,444,421.5);
	this.shape.setTransform(-0.5,36,1,0.706);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inputbox, new cjs.Rectangle(-223.5,-113.9,446,299.8), null);


// stage content:
(lib.example = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFBaQgIgEgDgFQgEgFgBgJQgBgGAAgTIAAg6IgRAAIAAgcIARAAIAAgbIAigVIAAAwIAZAAIAAAcIgZAAIAAA2QAAAQABADQABADACABQADACADAAQAFAAAKgDIADAbQgNAGgQAAQgJAAgHgDg");
	this.shape.setTransform(212.7,379);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgpA7QgQgLgFgTIAkgGQACALAHAFQAHAGALAAQAOAAAIgGQAEgDAAgGQAAgEgCgDQgDgCgJgCQgqgKgMgHQgQgLAAgTQAAgRAOgNQAOgMAdABQAagBAOAKQANAIAGATIgiAFQgDgIgFgEQgHgDgKAAQgNgBgHAEQgEADAAAFQAAADAEADQAFADAbAHQAcAHAMAJQALAJAAAQQAAATgQANQgPANgfAAQgaAAgQgLg");
	this.shape_1.setTransform(200.8,381.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgxAwQgNgTAAgcQAAghASgSQARgUAbABQAdAAARATQASAUgBApIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgFQAGgEACgLIAkAGQgHAUgPAKQgOAKgXAAQgiABgRgXgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_2.setTransform(186.5,381.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgSBdIAAiaIg3AAIAAgfICTAAIAAAfIg3AAIAACag");
	this.shape_3.setTransform(171.5,378.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAbBDIgbgqIgbAqIgqAAIAwhEIguhCIArAAIAYAlIAYglIAqAAIgtBAIAxBGg");
	this.shape_4.setTransform(149,381.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgiA+QgRgIgJgQQgJgQAAgXQAAgRAJgRQAJgRAQgIQAQgKATABQAfAAATATQATAUABAeQgBAfgTATQgUAVgegBQgRABgRgJgAgXgeQgJALAAATQAAAUAJALQAKAKANAAQAOAAAJgKQAKgLAAgUQAAgTgKgLQgJgLgOABQgNgBgKALg");
	this.shape_5.setTransform(134,381.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgMBZQgMgGgHgLIAAATIgiAAIAAi5IAkAAIAABEQAQgUAWABQAZgBAPATQARARAAAgQAAAjgRATQgQASgXAAQgLABgLgGgAgVgIQgJAJAAAUQABAVAGAKQAKAOAOAAQAMAAAIgKQAIgKAAgVQAAgYgIgJQgIgKgNAAQgNAAgIAKg");
	this.shape_6.setTransform(118.4,378.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAYBdIghg8IgRARIAAArIgjAAIAAi5IAjAAIAABiIApgvIAsAAIguAwIAxBWg");
	this.shape_7.setTransform(103.6,378.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgtA0QgRgTAAghQAAggARgSQASgUAcABQAagBAOALQAOALAHAWIgjAGQgCgLgHgFQgGgFgKAAQgMAAgIAJQgIAJAAAVQAAAXAIAKQAIALAMgBQALABAGgGQAHgGACgOIAjAGQgFAYgPAMQgQAMgaAAQgdAAgRgSg");
	this.shape_8.setTransform(88.6,381.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgxAwQgNgTAAgcQAAghASgSQARgUAbABQAdAAARATQASAUgBApIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgFQAGgEACgLIAkAGQgHAUgPAKQgOAKgXAAQgiABgRgXgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_9.setTransform(73.8,381.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAaBdIAAhHQAAgVgDgFQgCgGgEgDQgGgEgIAAQgHAAgIAFQgGAEgEAIQgDAIAAARIAABEIgkAAIAAi5IAkAAIAABFQASgVAXAAQAMAAAJAFQAKAFAGAGQAEAIACAIQADAJAAARIAABPg");
	this.shape_10.setTransform(58.8,378.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("Ag4BHQgYgZAAgsQAAguAYgZQAYgaAmAAQAiAAAWAUQAMAMAHAWIgmAJQgDgOgLgJQgKgIgPAAQgUAAgMAPQgNAPgBAhQAAAiANAPQANAPATAAQAPAAALgJQALgKAFgUIAkALQgIAfgUAPQgTAOgfAAQgjAAgYgZg");
	this.shape_11.setTransform(41.4,378.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgFBaQgIgEgDgFQgEgFgBgJQgBgGAAgTIAAg6IgRAAIAAgcIARAAIAAgbIAigVIAAAwIAZAAIAAAcIgZAAIAAA2QAAAQABADQABADACABQADACADAAQAFAAAKgDIADAbQgNAGgQAAQgJAAgHgDg");
	this.shape_12.setTransform(151.9,31.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgpA7QgQgLgFgTIAkgGQACALAHAGQAHAFALAAQAOAAAIgFQAEgEAAgGQAAgEgCgDQgDgCgJgCQgqgKgMgHQgQgLAAgTQAAgSAOgMQAOgLAdAAQAaAAAOAJQANAIAGATIgiAFQgDgHgFgEQgHgEgKAAQgNAAgHADQgEADAAAFQAAAEAEACQAFAEAbAGQAcAHAMAJQALAJAAAQQAAATgQANQgPANgfAAQgaAAgQgLg");
	this.shape_13.setTransform(140,33.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgxAwQgNgTAAgcQAAggASgTQARgUAbABQAdgBARAVQASATgBApIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgEQAGgFACgLIAkAHQgHATgPAKQgOAKgXAAQgiAAgRgWgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_14.setTransform(125.8,33.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgSBdIAAiaIg3AAIAAgfICTAAIAAAfIg3AAIAACag");
	this.shape_15.setTransform(110.7,30.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgFBaQgIgEgDgFQgEgFgBgJQgBgGAAgTIAAg6IgRAAIAAgcIARAAIAAgbIAigVIAAAwIAZAAIAAAcIgZAAIAAA2QAAAQABADQABADACABQADACADAAQAFAAAKgDIADAbQgNAGgQAAQgJAAgHgDg");
	this.shape_16.setTransform(91.3,31.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgoA/QgLgGgFgLQgEgKAAgUIAAhUIAjAAIAAA+QAAAbACAHQACAGAFAEQAGAEAIAAQAIAAAHgFQAHgFADgHQADgIAAgcIAAg5IAjAAIAACGIghAAIAAgUQgHALgMAGQgLAGgOAAQgNAAgLgGg");
	this.shape_17.setTransform(78.9,33.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AhBBfIAAi6IAiAAIAAAUQAGgKALgGQALgHANAAQAXAAARATQAQASAAAhQAAAhgRATQgQASgYAAQgKAAgJgEQgJgFgKgKIAABEgAgVg3QgIAKAAAUQAAAWAJAKQAJALAMAAQAMAAAIgKQAJgJAAgXQAAgVgJgKQgIgKgNAAQgMAAgJAKg");
	this.shape_18.setTransform(63.4,35.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AAaBFIAAhFQAAgUgCgHQgDgGgFgEQgFgDgIgBQgHAAgIAGQgIAEgCAJQgDAJAAAVIAAA9IgkAAIAAiGIAiAAIAAAUQARgXAaAAQAMAAAJAFQAKAEAGAGQAEAHADAIQACAJAAAPIAABTg");
	this.shape_19.setTransform(47.2,33.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgSBdIAAi5IAlAAIAAC5g");
	this.shape_20.setTransform(35.7,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// inputboxes
	this.checkbox = new lib.checkbox();
	this.checkbox.name = "checkbox";
	this.checkbox.parent = this;
	this.checkbox.setTransform(252,553.1,1,1,0,0,0,-0.6,36);

	this.inputbox = new lib.inputbox();
	this.inputbox.name = "inputbox";
	this.inputbox.parent = this;
	this.inputbox.setTransform(251,167.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.inputbox},{t:this.checkbox}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(278,264.5,446.6,459.2);
// library properties:
lib.properties = {
	id: '10266822EB2DCD49837144BA50F6E28D',
	width: 500,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
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
an.compositions['10266822EB2DCD49837144BA50F6E28D'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;