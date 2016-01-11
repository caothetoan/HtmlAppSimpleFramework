var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Figure = (function () {
    function Figure() {
        this.size = BABYLON.Vector3.Zero();
        this.projectedSize = BABYLON.Vector3.Zero();
        this.position = BABYLON.Vector3.Zero();
        this.projectedPosition = BABYLON.Vector3.Zero();
        this.rotation = BABYLON.Vector3.Zero();
        this.velocity = BABYLON.Vector3.Zero();
        this.color = new BABYLON.Color4(0, 0, 0, 0);
    }
    return Figure;
})();
var Figure3d = (function (_super) {
    __extends(Figure3d, _super);
    function Figure3d() {
        _super.apply(this, arguments);
    }
    return Figure3d;
})(Figure);
var Figure2d = (function (_super) {
    __extends(Figure2d, _super);
    function Figure2d() {
        _super.apply(this, arguments);
    }
    return Figure2d;
})(Figure);
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        _super.apply(this, arguments);
    }
    return Rectangle;
})(Figure2d);
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        _super.apply(this, arguments);
    }
    Circle.prototype.get_diameter = function () { return this.size.x; };
    Circle.prototype.set_diameter = function (d) { this.size.x = d; };
    Circle.prototype.get_projectedDiameter = function () { return this.projectedSize.x; };
    Circle.prototype.get_radius = function () { return this.get_diameter() / 2.0; };
    Circle.prototype.set_radius = function (r) { this.set_diameter(r * 2); };
    Circle.prototype.get_square = function () { return this.get_radius() * this.get_radius() * Math.PI; };
    Circle.prototype.get_projectedRadius = function () { return this.get_projectedDiameter() / 2.0; };
    return Circle;
})(Figure2d);
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite(image) {
        _super.call(this);
        this.image = image;
    }
    return Sprite;
})(Rectangle);
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(image) {
        _super.call(this, image);
        this.fullSize = BABYLON.Vector3.Zero();
        this.fullProjectedSize = BABYLON.Vector3.Zero();
        this.countH = 1;
        this.countV = 1;
    }
    return Tile;
})(Sprite);
