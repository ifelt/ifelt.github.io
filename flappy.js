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


(lib.StartInstructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-0.5,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("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");
	this.shape_1.setTransform(-0.5,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.StartInstructions, new cjs.Rectangle(-125.1,-6.1,249.3,19.6), null);


(lib.ScreenFlash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.4)").s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape.setTransform(80,80);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScreenFlash, new cjs.Rectangle(-70,-120,300,400), null);


(lib.GetReady = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtXCHIgGgPQgKAGgLAEQgKADgJAAIgBAAIAAAAIgpgCQgXgCgSgMQgTgLgMgUQgKgTgBgXIAAhHQABgfAIgVQAIgVANgNQANgNAPgFQAPgFAPAAIAkAAQAUAAASALQATAMAMASQAMATAAAVIAAAZIgzACQAAgNgDgMQgEgMgIgHQgHgIgMAAIgDAAIgDABIgcAFQgMACgGAQQgGAQAAAgIAAAWQAAAOAFAPQAEAPAIAKQAHAKALAAIAYAAQADAAAGgDQAFgCADgFQADgEABgFIAAgCIgBgBIgfgDIgEggIBhAAIgBB2gANhCFIACiJIhKiGIBRAJIAmBTIAhhbIBRgBIhNCKIgMCFgAI2CFIAAkNIB3AAQAsABAVASQATATAAAhIAACQQAAANgCAKQgCAKgGAHQgIAHgOAEQgOADgYAAgAKDBcIAaAAQATAAAJgDQAIgDACgGQACgHAAgJIABghIACgqQACgXAAgZQAAgOgEgGQgDgHgGgBQgFgCgGAAIgxAAgAHPCFIgKhWIg9AAIgJBWIhHAAIA4kOIBnAAIBPEOgAGMgCIA1gDIgdhigABqCFIgBkOIC3AAIAAAyIhvAGIAAAvIBmAIIAAAyIhhAAIAAAkIByAIIAABBgAAPCFIAAhRQAAgJgHgGQgGgFgHgDIgPgEIgGgBIAABtIhKAAIAAkOIBuAAQAaAAAPAFQAPAEAIAJQAHAIADAMQACAMAAAPQAAAdgFASQgEATgOAHQgOAJgbAAIAGACIAQAHIATAJQAJAGAHAGQAGAFABAGIAABSgAgcgpIAiAAQALAAAEgCQAFgDABgEQACgEgBgGQAAgLgDgJQgFgJgOAAIgiAAgAoPCFIAKi2IhIgCIgFhWIDfACIABBPIhMAMIAACxgAshCFIAAkOIC3AAIAAAyIhwAGIAAAvIBmAIIAAAyIhgAAIAAAkIByAIIAABBg");
	this.shape.setTransform(-1.1,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("As7C7IgfgEQgIgBgHgFIgBAAQgOAEgNAAIgBAAIgBAAIgBAAIgpgCIAAAAQgfgCgYgQIgBAAQgYgQgPgZIgBgBQgOgZgBgfIAAgBIAAgjIAAgBIAAhHQABglAKgaIAAAAQAKgcASgQIAAgBQASgRAVgHIAAAAQAVgHATAAIAjAAIABAAQAcAAAaAQIAAAAQAJAFAIAHQAAgMAJgIQAJgJAMAAIC3AAQAHAAAFACQAGgCAGAAIDfACQANAAAIAJQAJAJAAAMIABBPIgBAGIABAeQAAALgHAJQgHAIgLACIg0AIIAACXQAAANgIAJQgJAIgNAAIhQAAQgIAAgIgEQgHgEgEgIQgDgHAAgIIABgaQgBgFAAgFIAGh0IgngBIgIgBIAAAbQAGACAEAFQAIAIAAAMIAABlQAAANgJAJQgJAIgMAAIi/AAIgFAAIgFADQgGADgHAAIgDAAgAImC1IhXAAQgLAAgJgHQgJgIgBgLIgHg8IgHAAIgGA7QgBAMgJAIQgJAHgLAAIhHAAIgHgBIgJABIi+AAQgGAAgEgBQgFABgGAAIhHAAQgMAAgHgIQgJAIgMAAIhKAAQgMAAgJgIQgJgJAAgNIAAkyQAAgNAJgIQAJgJAMAAIBuAAQAfAAATAGIABAAQAKAEAJAEIAEgFQAJgJAMAAIC3AAQANAAAJAJQAIAIAAANIAAAxIAAADIAAAiQAAAMgIAJIgBABIAAADIAAAbIAdiQQADgLAIgGQAIgHALAAIBnAAQAKAAAIAGQAIAGADAKIAkB8IAAhzQAAgMAJgJQAJgJAMAAIB3AAQA0ABAbAVIAAAAQACgMAJgGQAKgHALACIBRAIQAIABAGAFQAHAEADAIIAIARIAIgYQAEgJAHgFQAIgFAJAAIBRgBQALAAAIAHQAJAHACALQACAKgFAKIgCAEQAEAFABAHQACAKgFAKIhLCDIgLCAQgBAMgJAHQgIAIgMAAIhIAAQgIAAgHgEQgHgEgEgHQgEgHAAgIIABggIgBgEIABhfIglhDIAAAAIgBBsIAAABIAAAIIAAAEIAAAWIAAABQABARgDAMQgDATgNANIAAABQgMAMgXAGQgRAEgdAAIiFAAIgIgBIgIABIAAAAg");
	this.shape_1.setTransform(-1.1,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.GetReady, new cjs.Rectangle(-106.7,-6.4,211.3,37.4), null);


(lib.GameOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtsCIIgGgPQgKAGgLADQgKAEgJAAIgBAAIgBAAIgogDQgXgBgTgMQgSgMgMgTQgKgTgBgXIAAhHQABgfAIgVQAIgWANgMQANgNAPgFQAPgGAPAAIAjAAQAVABASALQATAMAMASQAMASAAAWIAAAZIgzABQAAgNgEgLQgEgMgHgIQgIgHgLAAIgDAAIgEABIgbAFQgMACgGAQQgGAPAAAhIAAAVQAAAPAEAPQAFAOAHAKQAIALAKgBIAZAAQADABAFgDQAFgDAEgEQADgFABgEIgBgCIAAgBIgfgDIgFggIBhAAIAAB1gAo5CGIAAkPIBOAAIBBCeIAwieIBTADIAGEMIhPAAIAAh/IghB/IhBAAIgZh1IgGB6gAPRCGIAAhSQAAgIgGgGQgHgFgIgDIgOgFIgHAAIAABtIhJAAIAAkPIBuAAQAaAAAQAGQAPAEAHAIQAIAJACAMQACAMAAAOQAAAegEASQgFATgOAHQgNAJgcAAIAHACIAPAHIATAJQAKAGAGAFQAGAGABAGIAABSgAOlgoIAjAAQALAAAEgCQAFgDABgEQACgEgBgGQABgLgEgJQgFgJgOAAIgjAAgAKPCGIAAkPIC3AAIAAAzIhwAGIAAAvIBmAIIAAAyIhhAAIAAAjIBzAIIAABCgAIwCGIgTgBIgYgBIgUAAIgKgBIhOkMIBQAIIArDPIAfjXIBQgCIhLERIgIAAgAE1CGIgBAAIgpgDQgXgBgSgMQgTgLgLgUQgLgSAAgYIAAhGQAAggAIgVQAIgWANgMQANgMAPgGQAQgGAPAAIAjAAQAUABATAMQASAKAMATQAMASABAWIAABjQgBAVgHARQgIAQgMAMQgMALgNAGQgOAGgNAAIgBAAgAEihLIgUACQgMABgFAQQgGAQgBAhIAAAWQAAAOAFAOQAEANAIAKQAIAIAKABIAQAAQAMgBAHgHQAIgIADgKQAEgLAAgHIgBgoQAAgagGgOQgGgPgJgFQgJgGgJAAIgBAAgAkLCGIAAkPIC3AAIAAAzIhwAGIAAAvIBmAIIAAAyIhhAAIAAAjIBzAIIAABCgAqgCGIgKhWIg9AAIgJBWIhGAAIA3kPIBnAAIBPEPgArigCIA0gCIgdhig");
	this.shape.setTransform(-1.2,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AtQC9IgfgDQgJgBgGgFIgBAAQgOAEgNAAIgBAAIgBAAIgBAAIgpgCIAAAAQgfgDgZgPIAAgBQgYgPgQgaIAAAAQgOgagBgeIAAgBIAAgnIAAgBIAAghIAAgBIAAglQABglAKgaIAAAAQAKgcARgRIABAAQASgSAVgGIAAAAQAUgIAUABIAjAAIABAAQAcAAAZAPIABABQAYAOAQAYIAAABQAOAWADAYIAQhOQACgLAIgHQAJgGAKAAIBnAAQAKAAAIAGQAIAGADAJIAkB9IAAh0QAAgNAJgJQAJgIAMAAIBOAAQAJgBAIAGQAIAFADAIIAhBRIAXhOQAEgKAIgGQAIgGAKABIBTACQAFAAAFACQAHgEAKAAIC3AAQAMAAAJAIQAJAJAAANIAAAwIAAAEIAAAmQAAAMgJAJIgBABIAAAlIAAAEIAAAYQAFADAFAEQAIAJAAAMIAAAoIAAACIAAA/QAAAMgJAJQgJAJgMAAIi/AAQgGAAgFgCQgFACgGAAIhPAAQgJAAgHgFQgIAFgJAAIhBAAQgGAAgFgCIgHAEQgHAEgIgBIhIgFIgGgBIgIABIhXAAQgLAAgJgIQgIgHgCgLIgHg8IgHAAIgGA7QgBALgJAIQgIAIgMAAIhGAAIgFAAIgFADQgGACgHAAIgDAAgAIuC4IgRgBIgCAAIgXAAIgTgBIgCAAIgIAAQgKAAgIgGQgIgHgDgJIgmiFIAAAmIAAABQgBAbgKAWQgKAWgQAPQgQAQgSAIIgBAAQgUAIgSAAIgBAAIgBAAIgCAAIgogCIgBAAQgegDgZgPIgBgBQgYgPgPgZIgBgBQgNgZgBgfIAAgBIAAgnIAAgBIAAhHQAAglAKgaIAAAAQALgcARgQQASgSAVgHIAAAAQAVgIAUABIAjAAIABAAQAcABAZAPQAJAFAIAHQAAgFACgGQAEgJAJgGQAIgFAKABIBQAJQAKABAHAGQAIAHACAKIAHAmIAHgtQACgLAIgHQAIgHALAAIBQgCQAGgBAFADIACAAIC3AAQAGAAAGACQAFgCAHAAIBuAAQAfAAATAGIABAAQAYAHAMAPQANAOADAVQADAOAAASIgBAaIAAAAIAAABIABAMIAAABQAAAigFATIgCAHQAHAKAAALIAAACIAAAmIAAAFIAABPQAAAMgJAJQgJAJgMAAIhHAAQgMAAgJgIQgJAIgMAAIhJAAIgIgBIgIABIi/AAQgMAAgJgJQgJgJAAgMIAAheIgcBmQgCAKgJAGQgIAGgKAAIgIAAIgBAAIgBAAg");
	this.shape_1.setTransform(-1.2,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.GameOver, new cjs.Rectangle(-108.9,-6.6,215.6,37.9), null);


(lib.LowerPipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// highlights
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6BDB12").ss(5,1,1).p("Agiu6IAAB4AAjrAIAAZ7");
	this.shape.setTransform(9.5,103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(55,126,0,0.4)").s().p("AkrAPIAAgPQAAgFAEgEQAFgFAGAAII5AAQAGAAAFAFQAEAEAAAFIAAAPg");
	this.shape_1.setTransform(30,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// pipe top
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#59C900","#459E00"],[0,1],-30,0,30,0).s().p("AkNCHQgeAAAAgeIAAjRQAAgeAeAAIIbAAQAeAAAAAeIAADRQAAAegeAAg");
	this.shape_2.setTransform(30,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(55,126,0,0.4)").s().p("AjvgKIAAgsIHfAAIAABtg");
	this.shape_3.setTransform(30,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// pipe bottom
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#59C900","#459E00"],[0,1],-24,0,24,0).s().p("AjvN/IAA79IHfAAIAAb9g");
	this.shape_4.setTransform(30,113.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.LowerPipe, new cjs.Rectangle(0,0,60,203), null);


(lib.GroundSlice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// edges
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85D93D").s().p("AvEAKIAAgTIeJAAIAAATg");
	this.shape.setTransform(96.5,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B841D").s().p("AvEAKIAAgTIeJAAIAAATg");
	this.shape_1.setTransform(96.5,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// grass
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#72BE32").s().p("AObAuQgKgEACgRQgSARgPgRQgUAbgPgbQglApgbgpQgZAfgRgfQgVAVgJgVQgiAygZgyQgcAXgRgXQgiApgagpQgoAvgggvQgTALgPgLQgcAxgUgxQgtAogjgoQgjApgTgpQgfAigNgiQg3AogqgoQgQAbgJgbQgWAWgLgWQgnAzgWgzQgZA0gXg0QgPAJgNgJQgXAWgNgWQgnAlgaglQgaAYgSgYQgPATgKgTQgkAtgagtQgYAUgSgUQgiAogbgoQgxArgXgrQgTALgTgLQgeAvgOgvQgwAmgggmQgiAngYgnQgcAfgMgfQg5AjgogjQgSAZgHgZQgUASgPgSQglAvgagvIAAhPIeJAAIAABPQgQAegNAAQgHAAgGgJg");
	this.shape_2.setTransform(96.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// grass copy
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5AA11F").s().p("AObAuQgKgEACgRQgSARgPgRQgUAbgPgbQglApgbgpQgZAfgRgfQgVAVgJgVQgiAygZgyQgcAXgRgXQgiApgagpQgoAvgggvQgTALgPgLQgcAxgUgxQgtAogjgoQgjApgTgpQgfAigNgiQg3AogqgoQgQAbgJgbQgWAWgLgWQgnAzgWgzQgZA0gXg0QgPAJgNgJQgXAWgNgWQgnAlgaglQgaAYgSgYQgPATgKgTQgkAtgagtQgYAUgSgUQgiAogbgoQgxArgXgrQgTALgTgLQgeAvgOgvQgwAmgggmQgiAngYgnQgcAfgMgfQg5AjgogjQgSAZgHgZQgUASgPgSQglAvgagvIAAhPIeJAAIAABPQgQAegNAAQgHAAgGgJg");
	this.shape_3.setTransform(96.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// grass copy 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#665025").s().p("AObAuQgKgEACgRQgSARgPgRQgUAbgPgbQglAogbgoQgZAfgRgfQgVAVgJgVQgiAygZgyQgcAXgRgXQgiApgagpQgoAvgggvQgTALgPgLQgcAxgUgxQgtAogjgoQgjApgTgpQgfAigNgiQg3AogqgoQgQAbgJgbQgWAWgLgWQgnAzgWgzQgZAzgXgzQgPAJgNgJQgXAWgNgWQgnAkgagkQgaAYgSgYQgPATgKgTQgkAtgagtQgYAUgSgUQgiAogbgoQgxAqgXgqQgTAKgTgKQgeAvgOgvQgwAmgggmQgiAngYgnQgcAfgMgfQg5AjgogjQgSAZgHgZQgUASgPgSQglAvgagvIAAhPIeJAAIAABPQgQAegNAAQgHAAgGgJg");
	this.shape_4.setTransform(96.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// dirt
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B6233").s().p("AvED6IAAnzIeJAAIAAHzg");
	this.shape_5.setTransform(96.5,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.GroundSlice, new cjs.Rectangle(0,0,193.1,50), null);


(lib.CollisionPoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgNANQgGgFAAgIQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAIgGAFQgGAHgIAAQgHAAgGgHg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CollisionPoint, new cjs.Rectangle(0,0,4,4), null);


(lib.Trees = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Front
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1CD241").s().p("AiPEwIgJgIQgqATgxAAQhaAAhAg+QgvAqhAAAQg6AAgrgiQgyAig/AAQhIAAg2grQgcAIgfAAQgpAAgkgOQgnAXgxAAQhIAAg0gzQgWgWgNgaIgLAAIgFAAQgUApgiAjQhPBPhwAAQhwAAhPhPQgPgQgNgQIAApOQAcgIAgAAQBaAABBBBQAwAwAMA/QBBANA0AsQAjgSAqAAQBGAAAyAxQATAUAMAXQAJgCAKAAIAKABIAKgLQA8g8BVAAQBIAAA2ArQAbgIAgAAQBVAAA7A8IAQASQAZgIAdAAQAkAAAgANIAMgIQALgPAOgOQBDhCBdAAQBCAAA0AiQBLhABkAAQByAABRBQIADAEQA4goBHAAQBYAABAA9QAfgOAlAAQBGAAAyAxQAOAOALAQQARguAmgnQBGhGBkAAQBjAABGBGQAZAaARAdQAJgQAOgOQAygyBGAAQBGAAAyAyQATATAMAXIAFgCIgBgPQAAhhBFhFQBFhEBhAAIADAAIAAHTIgDAAIgcgBQgMAlgeAdQgyAzhGAAQhGAAgzgzQgTgTgLgWQgXAGgaAAQhGAAgygyIgJgKQgSAvgmAmQhGBGhjAAQhkAAhGhGQgkgkgRgrQgLATgQAQQgyAxhGAAQgiAAgcgLIgCACQhBBBhbAAQhAAAgzggIgPAQQhRBRhyAAQhxAAhQhRg");
	this.shape.setTransform(162.1,352.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Middle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5BE7AB").s().p("AN8EcQgXgXgOgaIgLAMQgqAqg6AAQg8AAgqgqQgcgcgKgkQggAhgvAAQgvAAghgiQgIgIgFgIQgNAUgSASQg2A3hOAAQhNAAg4g3QgbgcgNgiQgTAIgWAAQgpAAgdgdQgIgJgGgJQgLAtgiAkQgxAwhEAAQguAAgngXQgKAcgWAWQgsArg9AAQg9AAgrgrQgcgcgJghIgUAAQhMAAg1g1IgHgHIgIAIQgrArg8AAQgpAAgggTQgKAOgMALQg2A3hOAAQhOAAg2g3QgmgmgMgwQgaAIgeAAQhGAAgxgyQgygxAAhGIAAgCQgTAKgWAAQgkAAgagaQgRgSgGgWQgfAWgpAAQgfAAgagNIAAjiQAagNAfAAQA1AAAkAkQAmAlgBA1IAAAAQAPgFAQAAQAkAAAZAaQAOAOAHARIAJgKQAxgyBGAAQBHAAAxAyQAeAdAMAkQAjgQApAAQBNAAA2A1QAogjA4AAQAyAAAmAdQALgUATgRQA1g2BMAAQBLAAA2A2QA0AzACBGQAWADAUAJQALgmAegfQAxgwBEAAQBEAAAxAwQAaAbAMAgQAIgQANgOQAdgdApAAQAhAAAZASQALgPAMgOQA4g2BNAAQBOAAA2A2QAjAjANAsQAggdAsAAQAvAAAhAgQARARAIATQAFgHAHgHQAqgpA8AAQA6AAAqApIALANQAOgbAXgXQA5g4BRAAQBPAAA3A1QAZgJAcAAQATAAASAFQANguAjgjQA3g3BNAAQAnAAAgAOQAGgrAegeQAlglA0AAQAvAAAiAdIAADCQgiAcgvAAIgLAAQADAPgBAQQABBOg3A2Qg3A3hOAAQg/AAgwgkIgOAQQglAmg3AAQgMAAgKgCQgMAQgPAPQg5A5hRAAQhRAAg5g5g");
	this.shape_1.setTransform(162,341.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Back
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B6FFFC").s().p("AK0E0QgQgQgKgRQgoAng5AAQg6gBgpgpQgIgHgGgJQgVAFgWAAQhDAAgwgvQgbgcgLgiIgRABQg1AAgngiQgEAlgbAaQgeAfgrAAQgYAAgTgIIgDACQgRATgbAAQgbAAgTgTIgJgLQgjARgpAAQhHAAg0gzIAAgBIgEAEQgsAshAAAQg/AAgtgsQgYgZgLgeQgKAZgWAVQgmAog5AAQgsAAgjgaIgGAGQgtAvhBAAQhBAAgvgvQgMgMgIgNIgUABQg1AAglglQgkglAAg0IAAgMQgdAVgkgBQgmABgdgWQgbAbglAAQgKgBgJgCQgHAJgIAHQgqArg7AAQg8AAgpgrQgrgpAAg7IABgRQgvgBglgcIAAjkQAlgeAzgBQA7ABAqAqQAqAqABA7IgBASQA4ABApApIAJAJQAMgDANAAQASAAAQAGQAHgLAKgKQAhghAvAAQAuAAAhAhQAiAhgBAvIAAAFQAigbAtAAQAsAAAhAbQAfgRAkgBIAAgJQAAg/AsgtQAtgsA/AAQA/AAAtAsQAiAkAIAuIALAAQAoAAAbAcQAKAKAIANQAhgVAqABQA2gBApAhQAHgLAKgKQA0gyBHgBQBIABAzAyQArArAHA4QAVgLAbAAQAdAAAXANIAAgJQAAg6AqgqQArgqA7gBQA7ABAqAqQARARAKATQAUgEAWgBQBCAAAvAwQAXAUAKAaIABAAQAJgmAfgeQArgrA9AAQA9AAAsArQASATALAVQAUgJAYAAQAqAAAdAcQAFgrAhghQAngoA5ABQAuAAAjAaIACgDQApgpA6AAQAvAAAjAbQAHgMALgLQAfgeAogDQgBgLAAgMQAAgvAggiQAiggAvAAQAuAAAiAgQAdAdAEAnQATAIARARIAKAMIAAChIgKALQgmAmg2AAQgnAAgegTIgFAGQgjAjgwAAQgdAAgYgNQgKAagVAVQgkAjgvAFQgGAhgaAZQghAhguAAQgvAAghghQgWgWgIgcQgqgHgfggIgNgOQgGAWgTATIgEADQADAPAAAQQAABAgsAsQgtAsg/AAQg/AAgtgsg");
	this.shape_2.setTransform(162,332.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Trees, new cjs.Rectangle(-9.1,297,342.5,94.1), null);


(lib.Clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Front
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECF8FF").s().p("A6cIRIgKiKIAAtrQAUgFAXAAQBBAAAuAtQAkAkAJAvQBrAIBOBNQBNBNAJBoQAJgNAMgLQA3g3BPAAQAbAAAYAHIAAgOQAAhUA8g7QA8g7BVAAQBUAAA8A7QApAoAOAzQAygeA/AAQA1AAAsAUIACgCQArgqA7AAQA7AAAqAqQAqApAAA7IAAACQANgUARgRQBDhBBcAAQBdAABCBBQAiAiARApQALgUASgSQAzgxBHAAQAYAAAWAFIgBgVQgBhmBKhIQBIhIBnAAQBnAABJBIQA8A7ALBPQAlAHAeAXIAAgLQAAhCAvgvQAwgvBCAAQBDAAAwAvQARARALAUQADhcBDhCQBFhFBhAAQBiAABGBFIADADIAAPZg");
	this.shape.setTransform(-0.4,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Back
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D0EFFF").s().p("A5hIRIAAwfIANgBIAUgBQBiAABFBFQBDBCACBcQALgUASgRQAvgvBDAAQBCAAAwAvQAvAvAABCIAAALQAegXAmgHQALhPA7g7QBJhIBnAAQBnAABJBIQAtAtARA3IAOgPQBQhPBwAAQBxAABPBPQAZAZARAcQBNAHA6A5QASARAMAUIAAgCQAAg7AqgpQAqgqA7AAQA8AAAqAqIACACQAsgUA1AAQA/AAAzAeQAOgzAogoQA8g7BUAAQA1AAArAXQAKgMAMgMQBVhVB5AAQB4AABWBVIADAEQAogiA2AAQAlAAAfAQQALgZAVgVQAugtBCAAQAWAAAUAFIAANrIgKCKg");
	this.shape_1.setTransform(-8.8,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clouds, new cjs.Rectangle(-172.2,-66.3,342.2,109.4), null);


(lib.Pipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Upper Pipe
	this.instance = new lib.LowerPipe();
	this.instance.parent = this;
	this.instance.setTransform(26.7,-150.8,1,1,0,180,0,29.7,101.8);
	this.instance.cache(-2,-2,64,207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Lower Pipe
	this.instance_1 = new lib.LowerPipe();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.7,150.8,1,1,0,0,0,29.7,101.8);
	this.instance_1.cache(-2,-2,64,207);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pipe, new cjs.Rectangle(-3,-252,60,504), null);


(lib.Bird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// collision points
	this.hit8 = new lib.CollisionPoint();
	this.hit8.name = "hit8";
	this.hit8.parent = this;
	this.hit8.setTransform(25.6,-29.1,1,1,0,0,0,2,2);

	this.hit7 = new lib.CollisionPoint();
	this.hit7.name = "hit7";
	this.hit7.parent = this;
	this.hit7.setTransform(1.4,-26.1,1,1,0,0,0,2,2);

	this.hit6 = new lib.CollisionPoint();
	this.hit6.name = "hit6";
	this.hit6.parent = this;
	this.hit6.setTransform(-12.2,-23.1,1,1,0,0,0,2,2);

	this.hit5 = new lib.CollisionPoint();
	this.hit5.name = "hit5";
	this.hit5.parent = this;
	this.hit5.setTransform(-27.6,-12.2,1,1,0,0,0,2,2);

	this.hit4 = new lib.CollisionPoint();
	this.hit4.name = "hit4";
	this.hit4.parent = this;
	this.hit4.setTransform(-17.9,26.9,1,1,0,0,0,2,2);

	this.hit3 = new lib.CollisionPoint();
	this.hit3.name = "hit3";
	this.hit3.parent = this;
	this.hit3.setTransform(1.4,24.1,1,1,0,0,0,2,2);

	this.hit2 = new lib.CollisionPoint();
	this.hit2.name = "hit2";
	this.hit2.parent = this;
	this.hit2.setTransform(27.4,17.6,1,1,0,0,0,2,2);

	this.hit1 = new lib.CollisionPoint();
	this.hit1.name = "hit1";
	this.hit1.parent = this;
	this.hit1.setTransform(42.4,2,1,1,0,0,0,2,2);

	this.hit0 = new lib.CollisionPoint();
	this.hit0.name = "hit0";
	this.hit0.parent = this;
	this.hit0.setTransform(34,-17,1,1,0,0,0,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit0},{t:this.hit1},{t:this.hit2},{t:this.hit3},{t:this.hit4},{t:this.hit5},{t:this.hit6},{t:this.hit7},{t:this.hit8}]}).to({state:[]},14).wait(1));

	// Wing
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C90102").s().p("AB4BlIiDg4IgegQIgqgZIgvgfQgFgFgCgIQgCgGACgJQADgRAOgPQAPgPASgDQAIgBAHABQAIACAEAEIBgBxIBWBPIABACIACABIAOALg");
	this.shape.setTransform(-23.2,-15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C90102").s().p("AAeBHIh5iAIgIgKIgDgFQgDgDAAgEIgBgHQABgIADgHQAIgQARgKQATgKARABQAIAAAHAEIAGAEIAEAFIBZDHIAiA9g");
	this.shape_1.setTransform(-20.1,-18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C90102").s().p("AAlBzIgng/IAAgBIgBgCIgag1IgVg6IgMgxQAAgIAEgGQACgFAIgFQAOgKAVgBQAUgBAPAJIALAKQAEAHAAAFIgEBaIAEA6IABADIAAABIAAACIALA9IAOAwg");
	this.shape_2.setTransform(-15.6,-19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C90102").s().p("AAZA/IhCgiIgqgZIgvgfQgFgFgCgIQgCgGACgJQADgRAOgPQAPgPASgDQAIgBAHABQAIACAEAEIBgBxIBWBPIABACIACABIAOALg");
	this.shape_3.setTransform(-23.2,-15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C90102").s().p("AABAsIhkhvIgDgFQgDgDAAgEIgBgHQABgIADgHQAIgQARgKQATgKARABQAIAAAHAEIAGAEIAEAFIBZDHIAiA9g");
	this.shape_4.setTransform(-20.1,-18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C90102").s().p("Ah/AyQgNgCgIgQQgIgQACgTQADgVALgNQALgNAOABQASACD8BPQjvASglAAIgGAAg");
	this.shape_5.setTransform(-24.8,-7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C90102").s().p("AhXBrQgQgDgQgPQgOgPgDgRQgBgJABgHQADgHAFgFIAugfQAtgbAsgXICCg3IgnAkIgIAHIg1A0QggAhggAoIggAoQgFAFgHABIgIABIgIgBg");
	this.shape_6.setTransform(-23.1,6.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C90102").s().p("AhOCEQgSgJgJgRQgDgFgBgJQAAgIAEgHIADgGIA3hDIADgCIACgCIAqgtIBuheIgXAmQgHALgPAcIgYAvQgLAWgLAZIgDAGIgBACIgeBPIgDAGQgDAGgHADQgGAFgIAAIgHABQgOAAgPgIg");
	this.shape_7.setTransform(-20.3,9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C90102").s().p("AgwCJQgIgGgCgFQgEgHAAgHIACgMIAKgkIACgGIADgKIAqhgIABgCIAAgBIAcguIABgCIACgCIAiguIgOAxIgLA9IAAACIAAABIgBADIgEBRIAEBEQAAAEgEAHIgLAKQgPAIgUAAQgVAAgOgKg");
	this.shape_8.setTransform(-15.6,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C90102").s().p("AgwCJQgIgGgCgFQgEgHAAgHIACgMIAKgkIAVg8IAag0IABgCIAAgBIAcguIABgCIACgCIAiguIgUBQIgFAeIAAACIAAABIgBADIgEBRIAEBEQAAAEgEAHIgLAKQgPAIgUAAQgVAAgOgKg");
	this.shape_9.setTransform(-15.6,10.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C90102").s().p("AAaBjIgcgvIAAgBIgBgCIgag1IgVg6IgMgxQAAgIAEgGQACgFAIgFQAOgKAVgBQAUgBAPAJIALAKQAEAHAAAFIgDAqIADBqIABADIAAABIAAACIASBXIAHAWg");
	this.shape_10.setTransform(-15.6,-19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_8}]},1).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_9}]},1).to({state:[{t:this.shape_6},{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_10},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},1).wait(1));

	// eye
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAkIgIgGQgNgNAAgRQAAgRANgMQANgNAQAAQASAAAMANIABACQAMAMAAAPQAAARgNANQgMANgSAAQgLAAgKgHg");
	this.shape_11.setTransform(9.9,-15.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AECCE7").s().p("AhfBkQgog6AAhRIAAgSQAeAYAbAMQAEAuAVAjQAZAqAiAAQAiAAAYgqQAagpAAg6QgBgggHgbQAPgaANghQAaAzAABDQAABRgnA6QgpA6g4AAQg3AAgog6g");
	this.shape_12.setTransform(14.4,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D4EBFF").s().p("Ah6BIQAEhGAkgzQAog6A4AAQA4AAAoA6IANAWQgNAggPAaQgGgWgLgSQgZgqgiAAQgKAAgJAEIgBgCQgMgMgSAAQgRAAgNAMQgMANAAARQAAASAMALIAIAHQgMAgAAApIABASQgcgMgegYg");
	this.shape_13.setTransform(13,-13.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D0000").s().p("AhPBLIAAgSQAAgpAMgfQAJAGAMAAQASAAANgNQAMgMAAgSQAAgQgLgMQAJgEAJAAQAiAAAZAqQALATAHAWQgyBWhAAAQgWAAgYgKg");
	this.shape_14.setTransform(14.5,-10);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#410000").s().p("Ag7A7QgVgjgDgvQBeAmBChzQAHAbAAAhQAAA5gZAqQgZAqgiAAQgiAAgZgqg");
	this.shape_15.setTransform(14.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[]},14).wait(1));

	// body
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C90102").s().p("Ah3CLQgKApAcAgQhSAAhTghQgVgSgPgTICJAmIAWhsQBHBIBvAeQhQhYgOhXQA8jWCKgDQCkAcgFCyQgECxhYAaIBbgMIgPAOIgRAOQhOAMhBAAQilAAhQhQg");
	this.shape_16.setTransform(0.6,-3.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AEaAPQAFixikgdQiJADg9DWQAOBYBQBXQhvgehHhIIgWBtIiJgmQgkgyAIg+QAPhrByhFQByhECRgZQCSgZBUBNQBUBOAABwQAABnhHBJIhbALQBYgaAEixg");
	this.shape_17.setTransform(2.6,-6.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AjfACQgZgNgTgQQBSAhBTgBQgcgeAJgqQBwBvEVgsQhUBAiHAEIgSAAQiKAAh0hCg");
	this.shape_18.setTransform(0.8,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).to({state:[]},14).wait(1));

	// beak
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE054").s().p("AgkAgIAEg/QAPgYAYgNQAgAXgCAeQgaAOgoADIA+AKQACAmgdATg");
	this.shape_19.setTransform(40.7,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).to({_off:true},14).wait(1));

	// crest
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AAAA3QgJgJgPgDQgOgHgOADQgFg6AGgXQAegeAVArQgOAagHAcQAVgXAngLQAeAigYAfQgsgIgBAHg");
	this.shape_20.setTransform(26.4,-30.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).to({_off:true},14).wait(1));

	// tail
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AguAlQgIgMgHgUQgHgTAAgPQgBgPAGgCQAHgDB+AKQhdBUgIADIgCAAQgFAAgIgLg");
	this.shape_21.setTransform(-35.2,2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("Ag9AxQgGgBgBgPQgCgPAEgUQAEgUAIgOQAHgNAGABQAIABBnBHQhzAZgOAAIgCAAg");
	this.shape_22.setTransform(-33.5,-7.2,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).to({state:[]},14).wait(1));

	// feet
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE054").s().p("AgUBEQgOgHgPgPQgOgQgGgOQgGgOAFgEQAHgHCJg9IgWAqQggA9gOAXIgHANQgDACgEAAQgFAAgHgDg");
	this.shape_23.setTransform(-19.1,20.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E5C222").s().p("AgvA8QgIgGgIgKQANgXAgg8IBSgZQhUB6gIAGQgCABgDAAQgFAAgJgFg");
	this.shape_24.setTransform(-12,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).to({state:[]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-35.9,86.6,64.8);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Trees
	this.instance = new lib.Trees();
	this.instance.parent = this;
	this.instance.setTransform(162.1,344,1,1,0,0,0,162.1,344);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Clouds
	this.instance_1 = new lib.Clouds();
	this.instance_1.parent = this;
	this.instance_1.setTransform(162.7,309.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Sky
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#70C6CE").ss(1,1,1).p("A3b/PMAu3AAAMAAAA+fMgu3AAAg");
	this.shape.setTransform(150,200.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#56CCFF","#E7F7FF"],[0,1],0,-199.9,0,200).s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape_1.setTransform(150,200.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-9.6,-0.9,342.9,402), null);


// stage content:
(lib.flappy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function Bird()
		{
			this.mc = exportRoot.bird;
			this.initY = this.mc.y;
			this.state = Bird.DEAD;
			this.velocity = 0;
			this.setupCollisionPoints();
			//this.mc.rotation = -22;
		}
		
		Bird.ALIVE = 0;
		Bird.DYING = 1;
		Bird.DEAD = 2;
		Bird.MAX_UP_ANGLE = -22.5;
		Bird.MAX_DOWN_ANGLE = 90;
		
		Bird.prototype.isAlive = function()
		{
			return(this.state == Bird.ALIVE);
		}
		
		Bird.prototype.isDead = function()
		{
			return(this.state == Bird.DEAD);
		}
		
		Bird.prototype.startFlying = function()
		{
			//console.log("Bird::startFlying()");
			this.state = Bird.ALIVE;
			this.mc.y = this.initY;
			this.mc.play();
			this.velocity = 0;
			this.flap();
		}
		
		Bird.prototype.update = function()
		{
			//console.log("Bird::update()");
			if(this.state == Bird.ALIVE || this.state == Bird.DYING)
			{
				this.updateVelocity();
				this.updateRotation();
			}
		}
		
		Bird.prototype.updateVelocity = function()
		{
			this.velocity += Main.GRAVITY;
			if(this.velocity > Main.MAX_VELOCITY)
			{
				this.velocity = Main.MAX_VELOCITY;
			}
			this.mc.y += this.velocity;
		}
		
		Bird.prototype.flap = function()
		{
			if (this.state == Bird.ALIVE && this.mc.y > 0)
			{
				this.velocity = Main.FLAP_IMPULSE;
				createjs.Sound.play("flap");
			}
		}
		
		Bird.prototype.setupCollisionPoints = function()
		{
			this.collisionPoints = [this.mc.hit0,this.mc.hit1,this.mc.hit2,this.mc.hit3,this.mc.hit4,this.mc.hit5,this.mc.hit6,this.mc.hit7,this.mc.hit8];
			for (var i = 0; i < this.collisionPoints.length; i++)
			{
				this.collisionPoints[i].visible = false;
			}
		}
		
		Bird.prototype.hitTest = function(target)
		{
			for (var i = 0; i < this.collisionPoints.length; i++)
			{
			var pt = this.collisionPoints[i].localToLocal(0,0,target);
			var collision = target.hitTest(pt.x,pt.y);
			if (collision == true)
			{
				return true;
			}
		}
		return false;
		}
		
		Bird.prototype.hitGround = function()
		{
			if(this.state == Bird.ALIVE)
			{
				createjs.Sound.play("hit");
			}
			this.state = Bird.DEAD;
			this.mc.stop();
		}
		
		Bird.prototype.fallFromSky = function()
		{
			if(this.state == Bird.ALIVE)
			{
				this.state = Bird.DYING;
				this.velocity = 0;
				createjs.Sound.play("hit");
			}
		}
		
		Bird.prototype.updateRotation = function()
		{
			if(this.velocity > 0)
			{
				var diff = Bird.MAX_DOWN_ANGLE - Bird.MAX_UP_ANGLE;
				var norm = this.velocity / Main.MAX_VELOCITY;
				this.mc.rotation = Bird.MAX_UP_ANGLEE +(diff * norm);
			}
			else
			{
				this.mc.rotation = Bird.MAX_UP_ANGLE;
			}
		}
		
		Bird.prototype.getPosition = function()
		{
			return{x: this.mc.x, y: this.mc.y};
		}
		function Pipes()
		{
			this.scrolling = false;
			this.distanceBetweenPipes = exportRoot.pipe1.x - exportRoot.pipe0.x;
			this.leftBound = -exportRoot.pipe0.nominalBounds.width;
			this.maxPipeY = exportRoot.pipe0.y;
			this.minPipeY = exportRoot.pipe2.y;
			//this.pipes = [exportRoot.pipe0, exprotRoot.pipe1, exportRoot.pipe2];
			this.setupStartPosition();
		}
		
		Pipes.prototype.startScrolling = function()
		{
			this.scrolling = true;
			this.setupStartPosition();
			this.approachingPipe = this.pipes[0];
		}
		
		Pipes.prototype.stopScrolling = function()
		{
			this.scrolling = false;
		}
		
		Pipes.prototype.update = function()
		{
			if(this.scrolling == true)
			{
				//console.log("pipes::update() scrolling");
				this.updatePipePositions();
				this.checkLeftPipeIsOutsideScreen();
			}
		}
		
		Pipes.prototype.updatePipePositions = function()
		{
			for(var i = 0; i < this.pipes.length; i++)
			{
				var pipe = this.pipes[i];
				pipe.x -= Main.SCROLL_SPEED;
			}
		}
		
		Pipes.prototype.checkLeftPipeIsOutsideScreen = function()
		{
			var leftMostPipe = this.pipes[0];
			var rightMostPipe = this.pipes[2];
			if(leftMostPipe.x < this.leftBound)
			{
				leftMostPipe.x = rightMostPipe.x + this.distanceBetweenPipes;
				this.setRandomYPosition(leftMostPipe);
				this.pipes.shift();
				this.pipes.push(leftMostPipe);
			}
		}
		
		Pipes.prototype.setRandomYPosition = function(pipe)
		{
			var delta = this.minPipeY - this.maxPipeY;
			pipe.y = this.maxPipeY + Math.round(Math.random() * delta);
		}
		
		Pipes.prototype.setupStartPosition = function()
		{
			this.pipes = [exportRoot.pipe0, exportRoot.pipe1, exportRoot.pipe2];
			for(var i = 0; i< this.pipes.length; i++)
			{
				var pipe = this.pipes[i];
				pipe.x = (lib.properties.width * 1.5) + (i * this.distanceBetweenPipes);
				this.setRandomYPosition(pipe);
			}
		}
		
		Pipes.prototype.isBirdTouchingAPipe = function(bird)
		{
			for(var i = 0; i < this.pipes.length; i++)
			{
				if(bird.hitTest(this.pipes[i]))
				{
					return true;
				}
			}
			return false;
		}
		
		Pipes.prototype.setNextApproachingPipe = function()
		{
			for(var i = 0; i < this.pipes.length; i++)
			{ 
				if( this.pipes[i]== this.approachingPipe)
				{
					this.approachingPipe = this.pipes[i+1];
					return;
				}
		}
		}
		
		Pipes.prototype.hasBirdPassedApproachingPipe = function(bird)
		{
			var birdXPosition = bird.getPosition().x;
			if(birdXPosition > this.approachingPipe.x)
			{
				return true;
			}
			return false;
		}
		function Ground()
		{
			this.scrolling = false;
			this.slices = [exportRoot.ground0, exportRoot.ground1, exportRoot.ground2];
			this.sliceWidth = exportRoot.ground1.x - exportRoot.ground0.x;
			this.leftBound = exportRoot.ground0.x - this.sliceWidth;
			}
		
		Ground.prototype.update = function()
		{
			if (this.scrolling == true)
			{
				//console.log("Ground::Update() scrolling");
				this.updateSlicePositions();
				this.checkLeftSliceIsOutsideScreen();
				}
		}
		
		Ground.prototype.startScrolling = function()
		{
			this.scrolling = true;
		}
		
		Ground.prototype.stopScrolling = function()
		{
			this.scrolling = false;
		}
		
		Ground.prototype.updateSlicePositions = function()
		{
			for(var i = 0; i < this.slices.length; i++)
			{
				var slice = this.slices[i];
				slice.x -= Main.SCROLL_SPEED;
			}
		}
		Ground.prototype.checkLeftSliceIsOutsideScreen = function()
		{
			var firstSlice = this.slices[0];
			var lastSlice = this.slices[2];
			if ( firstSlice.x < this.leftBound)
			{
				firstSlice.x = lastSlice.x + this.sliceWidth;
				this.slices.shift();
				this.slices.push(firstSlice);
			}
		}
		
		Ground.prototype.isBirdTouchingGround = function(bird)
		{
			for (var i = 0 ; i < this.slices.length; i++)
			{
				if (bird.hitTest(this.slices[i]))
				{
					return true;
				}
			}
			return false;
		}
		function UI()
		{
			this.scoreLable1 = exportRoot.score;
			this.gameOverPrompt = exportRoot.gameOverPrompt;
			this.getReadyPrompt = exportRoot.getReadyPrompt;
			this.anyKeyPrompt = exportRoot.anyKeyPrompt;
			this.screenFlash = exportRoot.screenFlash;
			this.startInstructions = exportRoot.startInstructions;
			this.getReady();
		}
		
		UI.prototype.updateScore = function(score)
		{
			this.scoreLable1.text = score;
		}
		
		UI.prototype.gameStart = function()
		{
			this.gameOverPrompt.visible = false;
			this.getReadyPrompt.visible = false;
			this.startInstructions.visible = false;
			this.screenFlash.visible = false;
			this.updateScore(0);
		}
		
		UI.prototype.getReady = function()
		{
			this.gameOverPrompt.visible = false;
			this.getReadyPrompt.visible = true;
			this.startInstructions.visible = true;
			this.screenFlash.visible = false;
		}
		
		UI.prototype.gameOver = function()
		{
			this.gameOverPrompt.visible = true;
			this.getReadyPrompt.visible = false;
			this.startInstructions.visible = true;
		}
		
		UI.prototype.triggerScreenFlash = function()
		{
			this.screenFlash.visible = true;
			this.screenFlash.alpha = 1;
			createjs.Tween.get(this.screenFlash).to({alpha:0},100);
		}
		function Main()
		{
			this.ground = new Ground();
			this.pipes = new Pipes();
			this.bird = new Bird();
			this.ui = new UI();
			this.score = 0;
			this.registerSound();
		/*	
			exportRoot.screenFlash.visible = false;
			exportRoot.gameOverPrompt.visible = false;
			exportRoot.getReadyPrompt.visible = false;
			exportRoot.startInstructions.visible = false;
			*/
			createjs.Ticker.addEventListener("tick", this.update.bind(this));
			canvas.onmousedown = this.userPressed.bind(this);
			window.onkeydown = this.userPressed.bind(this);
		}
		Main.SCROLL_SPEED = 3.0;
		Main.GRAVITY = 0.55;
		Main.FLAP_IMPULSE = -8.15;
		Main.MAX_VELOCITY = 15;
		
		Main.prototype.update = function(evt)
		{
			//console.log("Main::update()");
			this.ground.update();
			this.pipes.update();
			this.bird.update();
			this.checkForBirdCollidingWithGround();
			this.checkForBirdCollidingWithPipes();
			this.checkForBirdPassingPipe();
		}
		Main.prototype.userPressed = function(evt)
		{
			//console.log("Main::userPressed()");
			if(this.bird.isDead())
			{
				this.startGame();
			}
			else
			{
				this.bird.flap();
			}
		}
		Main.prototype.startGame = function()
		{
			this.ground.startScrolling();
			this.pipes.startScrolling();
			this.bird.startFlying();
			this.score = 0;
			this.ui.gameStart();
		}
		Main.prototype.birdHitGround = function()
		{
			this.bird.hitGround();
			this.ground.stopScrolling();
			this.pipes.stopScrolling();
			this.ui.gameOver();
		}
		Main.prototype.birdHitPipe = function()
		{
			this.bird.fallFromSky();
			this.ground.stopScrolling();
			this.pipes.stopScrolling();
			this.ui.triggerScreenFlash();
		}
		Main.prototype.checkForBirdCollidingWithGround = function()
		{
			if( this.bird.isDead() == false)
			{
				if(this.ground.isBirdTouchingGround(this.bird))
				{
					this.birdHitGround();
				}
			}
		}
		Main.prototype.checkForBirdCollidingWithPipes = function()
		{
			if ( this.bird.isAlive())
			{
				if (this.pipes.isBirdTouchingAPipe(this.bird))
				{
					this.birdHitPipe();
				}
			}
		}
		Main.prototype.checkForBirdPassingPipe = function()
		{
			if(this.bird.isAlive())
			{
				if(this.pipes.hasBirdPassedApproachingPipe(this.bird))
				{
					this.pipes.setNextApproachingPipe();
					//console.log("Main::checkForBirdPassingPipe()-Scored a point!");
					this.scoredPoint();
				}
			}
		}
		Main.prototype.scoredPoint = function()
		{
			this.score++;
			//exportRoot.score.text = this.score;
			this.ui.updateScore(this.score);
			createjs.Sound.play("point");
		}
		Main.prototype.registerSound = function()
		{
			createjs.Sound.registerSound("point.wav","point");
			createjs.Sound.registerSound("flap.wav","flap");
			createjs.Sound.registerSound("hit.wav","hit");
		}
		var main = new Main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// score
	this.score = new cjs.Text("0", "24px 'Arial'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 29;
	this.score.lineWidth = 98;
	this.score.parent = this;
	this.score.setTransform(138.5,9);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	// Screen Flash
	this.screenFlash = new lib.ScreenFlash();
	this.screenFlash.name = "screenFlash";
	this.screenFlash.parent = this;
	this.screenFlash.setTransform(237.5,308,1,1,0,0,0,80,80);
	this.screenFlash.visible = false;
	this.screenFlash.cache(-72,-122,304,404);

	this.timeline.addTween(cjs.Tween.get(this.screenFlash).wait(1));

	// Game Over
	this.gameOverPrompt = new lib.GameOver();
	this.gameOverPrompt.name = "gameOverPrompt";
	this.gameOverPrompt.parent = this;
	this.gameOverPrompt.setTransform(149.8,98.3,1,1,0,0,0,-1.2,12.3);
	this.gameOverPrompt.cache(-111,-9,220,42);

	this.timeline.addTween(cjs.Tween.get(this.gameOverPrompt).wait(1));

	// Get Ready
	this.getReadyPrompt = new lib.GetReady();
	this.getReadyPrompt.name = "getReadyPrompt";
	this.getReadyPrompt.parent = this;
	this.getReadyPrompt.setTransform(149.9,98.2,1,1,0,0,0,-1.1,12.2);
	this.getReadyPrompt.cache(-109,-8,215,41);

	this.timeline.addTween(cjs.Tween.get(this.getReadyPrompt).wait(1));

	// Start Instructions
	this.startInstructions = new lib.StartInstructions();
	this.startInstructions.name = "startInstructions";
	this.startInstructions.parent = this;
	this.startInstructions.setTransform(150.5,246.6,1,1,0,0,0,-0.5,3.6);
	this.startInstructions.cache(-127,-8,253,24);

	this.timeline.addTween(cjs.Tween.get(this.startInstructions).wait(1));

	// Bird
	this.bird = new lib.Bird();
	this.bird.name = "bird";
	this.bird.parent = this;
	this.bird.setTransform(95.2,173.7,0.384,0.544,0,0,0,3.3,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.bird).wait(1));

	// Ground
	this.ground2 = new lib.GroundSlice();
	this.ground2.name = "ground2";
	this.ground2.parent = this;
	this.ground2.setTransform(443,375.9,1,1,0,0,0,96,24.9);
	this.ground2.cache(-2,-2,197,54);

	this.ground1 = new lib.GroundSlice();
	this.ground1.name = "ground1";
	this.ground1.parent = this;
	this.ground1.setTransform(283,375.9,1,1,0,0,0,96,24.9);
	this.ground1.cache(-2,-2,197,54);

	this.ground0 = new lib.GroundSlice();
	this.ground0.name = "ground0";
	this.ground0.parent = this;
	this.ground0.setTransform(96,375.9,1,1,0,0,0,96,24.9);
	this.ground0.cache(-2,-2,197,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ground0},{t:this.ground1},{t:this.ground2}]}).wait(1));

	// Pipes
	this.pipe2 = new lib.Pipe();
	this.pipe2.name = "pipe2";
	this.pipe2.parent = this;
	this.pipe2.setTransform(329.6,250,1,1,0,0,0,26.6,0);

	this.pipe1 = new lib.Pipe();
	this.pipe1.name = "pipe1";
	this.pipe1.parent = this;
	this.pipe1.setTransform(149.6,200,1,1,0,0,0,26.6,0);

	this.pipe0 = new lib.Pipe();
	this.pipe0.name = "pipe0";
	this.pipe0.parent = this;
	this.pipe0.setTransform(-30.4,100,1,1,0,0,0,26.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pipe0},{t:this.pipe1},{t:this.pipe2}]}).wait(1));

	// Background
	this.instance = new lib.Background();
	this.instance.parent = this;
	this.instance.setTransform(161.8,200.1,1,1,0,0,0,161.8,200.1);
	this.instance.cache(-12,-3,347,406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90,48,600.1,660);
// library properties:
lib.properties = {
	id: '5F1F6707FD2EF34F9383A251E2FCB254',
	width: 300,
	height: 400,
	fps: 60,
	color: "#CCCCCC",
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
an.compositions['5F1F6707FD2EF34F9383A251E2FCB254'] = {
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