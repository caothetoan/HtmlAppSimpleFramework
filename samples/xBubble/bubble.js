var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Bubble = (function (_super) {
    __extends(Bubble, _super);
    function Bubble() {
        _super.apply(this, arguments);
        this.nextVelocity = BABYLON.Vector3.zero();
    }
    Bubble.prototype.canAbsorb = function (b) {
        var r1 = this.radius;
        var r2 = b.radius;
        return r1 * r1 > 2 * r2 * r2;
    };
    Bubble.prototype.canDamage = function (b) {
        var r1 = this.radius;
        var r2 = b.radius;
        return r1 * r1 > r2 * r2;
    };
    Bubble.prototype.absorb = function (b, amount) {
        var diff = Bubble.subtract(b, amount);
        var r = Math.sqrt((this.get_square() + diff) / Math.PI);
        this.radius = r;
    };
    Bubble.prototype.annihilate = function (b, amount) {
        var b1;
        var b2;
        if (this.radius >= b.radius) {
            b1 = this;
            b2 = b;
        }
        else {
            b1 = b;
            b2 = this;
        }
        var diff = Bubble.subtract(b2, amount);
        var r = Math.sqrt((b1.get_square() - diff) / Math.PI);
        b1.radius = r;
    };
    Bubble.subtract = function (b, amount) {
        var r = b.radius - amount;
        var s = b.get_square();
        b.radius = r;
        return s - b.get_square();
    };
    Bubble.prototype.isAnnihilated = function () {
        return this.radius <= 0;
    };
    Bubble.canBeAbsorbedColor = new BABYLON.Color4(0, 0, 1, 1);
    Bubble.canDamageColor = new BABYLON.Color4(1, 0, 1, 1);
    Bubble.canAnnihilateColor = new BABYLON.Color4(1, 0, 0, 1);
    return Bubble;
})(Circle);
