var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MouseEventArgs = (function (_super) {
    __extends(MouseEventArgs, _super);
    function MouseEventArgs() {
        _super.apply(this, arguments);
        this.wheelDelta = 0;
    }
    return MouseEventArgs;
})(InputDeviceEventArgs);
var Mouse = (function (_super) {
    __extends(Mouse, _super);
    function Mouse() {
        _super.apply(this, arguments);
    }
    return Mouse;
})(InputDevice);
