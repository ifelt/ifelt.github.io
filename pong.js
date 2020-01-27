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


(lib.paddle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s("#FF0000").ss(25,1,1).rr(-77.5,-12.5,155,25,12.5);
	this.shape.setTransform(77.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.paddle, new cjs.Rectangle(-12.5,-12.5,180,50), null);


(lib.info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("game over\nplay again?", "35px 'Times New Roman'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 159;
	this.text.parent = this;
	this.text.setTransform(-33.7,-4.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AxArfMAiBAAAQDuAAAAEIIAAOwQAAEIjuAAMgiBAAAQjuAAAAkIIAAuwQAAkIDuAAg");
	this.shape.setTransform(-36.3,59.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AxALhQjuAAAAkJIAAuvQAAkJDuAAMAiBAAAQDuAAAAEJIAAOvQAAEJjuAAg");
	this.shape_1.setTransform(-36.3,59.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.info, new cjs.Rectangle(-170,-14.9,267.5,149.3), null);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AGGAAQAACihyByQhyByiiAAQihAAhyhyQhyhyAAiiQAAihByhyQByhyChAAQCiAAByByQByByAAChg");
	this.shape.setTransform(0.1,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkTETQhyhyAAihQAAihByhyQBzhyCgAAQCiAABxByQBzByAAChQAAChhzByQhxBziiAAQigAAhzhzg");
	this.shape_1.setTransform(0.1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-41.4,-42.5,83,83), null);


(lib.lives_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer_1
	this.ball_mc = new lib.ball();
	this.ball_mc.name = "ball_mc";
	this.ball_mc.parent = this;
	this.ball_mc.setTransform(107.4,13,0.333,0.333,0,0,0,39,39);

	this.ball_mc_1 = new lib.ball();
	this.ball_mc_1.name = "ball_mc_1";
	this.ball_mc_1.parent = this;
	this.ball_mc_1.setTransform(76,13,0.333,0.333,0,0,0,39.3,39);

	this.ball_mc_2 = new lib.ball();
	this.ball_mc_2.name = "ball_mc_2";
	this.ball_mc_2.parent = this;
	this.ball_mc_2.setTransform(44.1,13.1,0.333,0.333,0,0,0,39.1,39.1);

	this.ball_mc_3 = new lib.ball();
	this.ball_mc_3.name = "ball_mc_3";
	this.ball_mc_3.parent = this;
	this.ball_mc_3.setTransform(13,13,0.333,0.333,0,0,0,39,39);

	this.life3_mc = new lib.ball();
	this.life3_mc.name = "life3_mc";
	this.life3_mc.parent = this;
	this.life3_mc.setTransform(76,13,0.333,0.333,0,0,0,39.3,39);

	this.life2_mc = new lib.ball();
	this.life2_mc.name = "life2_mc";
	this.life2_mc.parent = this;
	this.life2_mc.setTransform(44.8,13.1,0.333,0.333,0,0,0,39.1,39.1);

	this.life1_mc = new lib.ball();
	this.life1_mc.name = "life1_mc";
	this.life1_mc.parent = this;
	this.life1_mc.setTransform(13,13,0.333,0.333,0,0,0,39,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ball_mc_3},{t:this.ball_mc_2},{t:this.ball_mc_1},{t:this.ball_mc}]}).to({state:[{t:this.life1_mc},{t:this.life2_mc},{t:this.life3_mc}]},1).to({state:[{t:this.life1_mc},{t:this.life2_mc}]},1).to({state:[{t:this.life1_mc}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-14.2,122.1,27.7);


// stage content:
(lib.pong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// info
	this.info_mc = new lib.info();
	this.info_mc.name = "info_mc";
	this.info_mc.parent = this;
	this.info_mc.setTransform(266.6,191.2,1,1,0,0,0,-36.3,59.7);
	this.info_mc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.info_mc).wait(1));

	// lives
	this.lives_mc = new lib.lives_mc();
	this.lives_mc.name = "lives_mc";
	this.lives_mc.parent = this;
	this.lives_mc.setTransform(60.2,14.4,1,1,0,0,0,47.2,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.lives_mc).wait(1));

	// ball
	this.score_txt = new cjs.Text("000", "45px 'Times New Roman'");
	this.score_txt.name = "score_txt";
	this.score_txt.textAlign = "center";
	this.score_txt.lineHeight = 52;
	this.score_txt.lineWidth = 163;
	this.score_txt.parent = this;
	this.score_txt.setTransform(466.5,2);

	this.ball_mc = new lib.ball();
	this.ball_mc.name = "ball_mc";
	this.ball_mc.parent = this;
	this.ball_mc.setTransform(300.5,92.7,0.692,0.692,0,0,0,39,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ball_mc},{t:this.score_txt}]}).wait(1));

	// paddle
	this.paddle_mc = new lib.paddle();
	this.paddle_mc.name = "paddle_mc";
	this.paddle_mc.parent = this;
	this.paddle_mc.setTransform(252,373.6,1,1,0,0,0,77.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.paddle_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274.2,200,550.9,398.6);
// library properties:
lib.properties = {
	id: 'DFF604B75CACF346BCD2B601894541CC',
	width: 550,
	height: 400,
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
an.compositions['DFF604B75CACF346BCD2B601894541CC'] = {
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