var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BlurApp = (function (_super) {
    __extends(BlurApp, _super);
    function BlurApp(graphicOutput, inputControllerHandlers) {
        _super.call(this, graphicOutput, inputControllerHandlers);
        this.imageScale = new BABYLON.Vector2(1, 1);
        this.radius = 0;
    }
    BlurApp.prototype.set_image = function (urlOrBase64Data, onImageLoaded) {
        var _this = this;
        this.image = null;
        this.imageScale.x = 1;
        this.imageScale.y = 1;
        ColorBuffer.fromHtmlImage(urlOrBase64Data, function (cb) {
            _this.image = cb;
            _this.imagePos = new BABYLON.Vector3((_this.graphicOutput.get_width() - _this.image.width) / 2, (_this.graphicOutput.get_height() - _this.image.height) / 2, 0);
            _this.bluredImage = ColorBuffer.create(_this.image.width, _this.image.height);
            ImageEffects.blur(_this.image, _this.bluredImage, _this.radius);
            if (onImageLoaded)
                onImageLoaded();
        });
    };
    BlurApp.prototype.set_radius = function (v) {
        this.radius = v;
        if (this.image != null)
            ImageEffects.blur(this.image, this.bluredImage, v);
    };
    BlurApp.prototype.doLogicStep = function () {
    };
    BlurApp.prototype.drawFrame = function () {
        this.renderer2d.output.clear();
        if (this.image != null) {
            this.renderer2d.drawImage(this.imagePos.x, this.imagePos.y, this.imagePos.z, this.bluredImage, this.imageScale);
        }
        this.graphicOutput.drawBuffer();
    };
    BlurApp.prototype.handleKeyboardEvent = function (eventArgs) {
        _super.prototype.handleKeyboardEvent.call(this, eventArgs);
    };
    BlurApp.prototype.handleMouseEvent = function (eventArgs) {
        var scaleDelta = -eventArgs.wheelDelta * 0.001;
        this.imageScale.x += scaleDelta;
        this.imageScale.y += scaleDelta;
        if (eventArgs.leftButtonClicked) {
            this.imagePos.x += eventArgs.deltaX;
            this.imagePos.y += eventArgs.deltaY;
        }
    };
    return BlurApp;
})(App);
