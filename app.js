var App = (function () {
    function App(graphicOutput, inputDevices) {
        this.graphicOutput = graphicOutput;
        this.phisics = new Phisics();
        this.inputDevices = inputDevices;
        var rendererOutput = new RendererOutput(this.graphicOutput.get_buffer(), this.graphicOutput.get_width(), this.graphicOutput.get_height());
        this.renderer3d = new Renderer3d(rendererOutput);
    }
    App.prototype.start = function () {
        var _this = this;
        this.createScene(function (scene) {
            _this.scene = scene;
            requestAnimationFrame(function () { return _this.loopAnimation(); });
            if (_this.inputDevices.keyboard != null)
                _this.inputDevices.keyboard.inputEvent.addHandler(function (args) {
                    _this.handleKeyboardEvent(args);
                });
            if (_this.inputDevices.mouse != null)
                _this.inputDevices.mouse.inputEvent.addHandler(function (args) {
                    _this.handleMouseEvent(args);
                });
        });
    };
    App.prototype.createScene = function (continuation) {
        continuation(new Scene());
    };
    App.prototype.loopAnimation = function () {
        var _this = this;
        this.doAnimationStep();
        requestAnimationFrame(function () { return _this.loopAnimation(); });
    };
    App.prototype.doAnimationStep = function () {
        var now = new Date().getTime();
        var fps = 1000.0 / (now - this.previousFrameTime) >> 0;
        this.previousFrameTime = now;
        this.doLogicStep();
        this.drawFrame();
        this.drawFps(fps);
    };
    App.prototype.doLogicStep = function () {
    };
    App.prototype.drawFrame = function () {
        this.renderer3d.output.clear();
        this.renderer3d.drawScene(this.scene);
        this.graphicOutput.drawBuffer();
    };
    App.prototype.drawFps = function (fps) {
        this.graphicOutput.drawText(fps.toString(), 10, 25);
    };
    App.prototype.handleKeyboardEvent = function (eventArgs) {
    };
    App.prototype.handleMouseEvent = function (eventArgs) {
    };
    return App;
})();
