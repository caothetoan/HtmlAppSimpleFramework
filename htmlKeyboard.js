var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HtmlKeyboard = (function (_super) {
    __extends(HtmlKeyboard, _super);
    function HtmlKeyboard() {
        var _this = this;
        _super.call(this);
        window.addEventListener("keydown", function (e) { return _this.inputEvent.raise(new KeyboardEventArgs(e.keyCode)); }, true);
    }
    return HtmlKeyboard;
})(Keyboard);
//# sourceMappingURL=htmlKeyboard.js.map