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


(lib.wheelfront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#FF064F"],[0,1],-0.1,31.5,-0.1,-31.4).s().p("AjeDeQhchcAAiCQAAiCBchcIACgDQBchZCAAAQCBAABbBZIACADQBdBcAACCQAACChdBcQhcBdiCAAQiCAAhchdg");
	this.shape.setTransform(346.5,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#FF064F"],[0,1],-31.5,0,31.5,0).s().p("AjeDeQhchcAAiCQAAiCBchcIACgDQBchZCAAAQCBAABbBZIACADQBdBcAACCQAACChdBcQhcBdiCAAQiCAAhchdg");
	this.shape_1.setTransform(346.5,31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#FF064F"],[0,1],0.1,-31.4,0.1,31.5).s().p("AjeDeQhchcAAiCQAAiCBchcIACgDQBchZCAAAQCBAABbBZIACADQBdBcAACCQAACChdBcQhcBdiCAAQiCAAhchdg");
	this.shape_2.setTransform(346.5,31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#FF064F"],[0,1],31.5,0.1,-31.4,0.1).s().p("AjeDeQhchcAAiCQAAiCBchcIACgDQBchZCAAAQCBAABbBZIACADQBdBcAACCQAACChdBcQhcBdiCAAQiCAAhchdg");
	this.shape_3.setTransform(346.5,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(315,0,63,63);


(lib.car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ANSFUQhbhaiBAAQiAAAhcBaIwZAAQhbhaiBAAQiAAAhcBaIhfAAIAAqnMAktAKng");
	this.shape.setTransform(432.5,34);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.car, new cjs.Rectangle(315.1,0,235,68), null);


(lib.backwheel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#FF064F"],[0,1],0,31.3,-0.1,-31.3).s().p("AjeDeQhchcAAiCQAAiCBchcIACgDQBdhZB/AAQCBAABbBZIACADQBdBcAACCQAACChdBcQhbBdiDAAQiBAAhdhdg");
	this.shape.setTransform(344.5,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#FF064F"],[0,1],-27.2,15.6,27.2,-15.7).s().p("AjeDeQhchcAAiCQAAiCBchcIACgDQBchZCAAAQCBAABbBZIACADQBdBcAACCQAACChdBcQhcBdiCAAQiCAAhchdg");
	this.shape_1.setTransform(342.5,31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#FF064F"],[0,1],0,-31.1,0.2,31.1).s().p("AjeDeQhchcAAiCQAAiCBchcIACgDQBchZCAAAQCBAABbBZIACADQBdBcAACCQAACChdBcQhcBdiCAAQiCAAhchdg");
	this.shape_2.setTransform(342.5,31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#FF064F"],[0,1],31.2,0.1,-31.4,0.1).s().p("AjeDeQhchcAAiCQAAiCBchcIACgDQBchZCAAAQCBAABbBZIACADQBdBcAACCQAACChdBcQhcBdiCAAQiCAAhchdg");
	this.shape_3.setTransform(342.5,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#FF064F"],[0,1],-0.1,31.3,-0.1,-31.3).s().p("AjeDeQhchcAAiCQAAiCBchcIACgDQBchZCAAAQCBAABbBZIACADQBdBcAACCQAACChdBcQhcBdiCAAQiCAAhchdg");
	this.shape_4.setTransform(342.5,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(313,0,63,63);


(lib.wholecar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.car();
	this.instance.parent = this;
	this.instance.setTransform(-197.5,34,1,1,0,0,0,117.5,34);

	this.wheel2 = new lib.wheelfront();
	this.wheel2.name = "wheel2";
	this.wheel2.parent = this;
	this.wheel2.setTransform(-135.5,99.5,1,1,0,0,0,31.5,31.5);

	this.wheel = new lib.backwheel();
	this.wheel.name = "wheel";
	this.wheel.parent = this;
	this.wheel.setTransform(-280.4,99.5,1,1,0,0,0,31.5,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wheel},{t:this.wheel2},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wholecar, new cjs.Rectangle(0,0,235,131), null);


// stage content:
(lib.project2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop a Movie Clip
		Stops the specified movie clip on stage.
		
		Instructions:
		1. Use this code for movie clips that are currently playing.
		*/
		
		//this.car1.stop();
		
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		//this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.car1.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(5);
			this.car1.wheel.gotoAndStop(5);
			this.car1.wheel2.gotoAndStop(5);
		}
		
	}
	this.frame_25 = function() {
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(35));

	// Layer_1
	this.car1 = new lib.wholecar();
	this.car1.name = "car1";
	this.car1.parent = this;
	this.car1.setTransform(-22.8,334.5,1,1,0,0,0,-22.8,65.5);

	this.timeline.addTween(cjs.Tween.get(this.car1).to({x:292.3},50).wait(10));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAkugE9IAAgqIEOAAIAAMfIhVAAIAAUKIClAAIAACMIm4AAIAAiMIBuAAEAkugE9QALgCALAAQAvAAAhAhQAhAhAAAvQAAAughAhQghAhgvAAQgLAAgLgCQghgGgYgZQghghAAguQAAgvAhghQAYgYAhgHgAgJ8HIMfAAIAAMgIsfAAgARg5xILVAAIAALVIrVAAgAISMCIJiAAIAARMIpiAAgEAkugA0QALgCALAAQAvAAAhAhQAhAgAAAvQAAAughAhQghAhgvAAQgLAAgLgCQghgGgYgZQghghAAguQAAgvAhggQAYgYAhgHIAAgsEAkuADKIAAgiEAkuAGnQghgGgZgZQggggAAgvQAAgvAgghQAZgZAhgGQALgCALAAQAvAAAgAhQAiAhAAAvQAAAvgiAgQggAhgvAAQgLAAgLgCgEAl5AG4IBuAAEAl5AG4IhLAAIAAgREAnnAbCIhuAAIAA0KA2B7fIKoAAIAAKoIqoAAgEgqLgdNILBAAIAALBIrBAAgA9hLkIKAAAIAARqIqAAAg");
	this.shape.setTransform(271,213);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgWBuQgggGgZgYQggghgBgvQABgtAggiQAZgYAggGQALgCALgBQAvABAgAgQAhAiAAAtQAAAvghAhQggAggvAAQgLAAgLgCg");
	this.shape_1.setTransform(508.3,244.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgWBvQgggHgYgZQgiggAAgvQAAgtAighQAYgZAggHQALgCALAAQAvAAAhAiQAgAhAAAtQAAAvggAgQghAigvgBQgLAAgLgBg");
	this.shape_2.setTransform(508.3,218.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AgWBuQgggGgYgZQgiggAAgvQAAgtAigiQAYgYAggGQALgCALAAQAvAAAhAgQAgAiAAAtQAAAvggAgQghAhgvABQgLAAgLgDg");
	this.shape_3.setTransform(508.3,192.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AAyGQIhtAAIhLAAIAAgRQALACALAAQAvAAAgghQAhghAAgvQAAgughghQggghgvAAQgLAAgLACIAAgiQALACALAAQAvAAAhghQAgghAAgvQAAgtggghQghghgvAAQgLAAgLACIAAgsQALACALAAQAvAAAhghQAgghAAguQAAgvggghQghghgvAAQgLAAgLACIAAgqIENAAIAAMfg");
	this.shape_4.setTransform(519.5,217.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AjbLLIAAiMIBuAAIA3AAIAA0JIBtAAIAAUJIhtAAIBtAAIClAAIAACMg");
	this.shape_5.setTransform(519,328.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AYLHYIAArTILVAAIAALTgAGhGNIAAsfIMgAAIAAMfgAvVE9IAAqmIKnAAIAAKmgEgjfADpIAArBILBAAIAALBg");
	this.shape_6.setTransform(228.3,73.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AOJI1IAAxLIJiAAIAARLgA3qI1IAAxpIKAAAIAARpg");
	this.shape_7.setTransform(233.5,343.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660000").s().p("AXhfGIAAxMIpiAAIAARMIsqAAMAAAg9ZMAjKAAAMAAAA9ZgAXNskILVAAIAArVIrVAAgAFjtvIMgAAIAAsgIsgAAgAt0fGIAAxqIqAAAIAARqIsqAAMAAAgvaILBAAIAArBIrBAAIAAjwMAhSAAAMAAAA+LgAwUu/IKoAAIAAqoIqoAAg");
	this.shape_8.setTransform(234.5,201);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,202.1,542,399);
// library properties:
lib.properties = {
	id: 'A49F323DF990BE43A2F018BA6496AC39',
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
an.compositions['A49F323DF990BE43A2F018BA6496AC39'] = {
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