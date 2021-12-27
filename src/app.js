import Two from "two.js";
var WaferMap = /** @class */ (function () {
    function WaferMap(el) {
        this.el = el;
    }
    WaferMap.prototype.draw = function () {
        var two = new Two({
            fullscreen: false,
            autostart: true
        }).appendTo(this.el);
        var rect = two.makeRectangle(two.width / 2, two.height / 2, 50, 50);
        two.bind('update', function () { return rect.rotation += 0.001; });
        two.update();
    };
    return WaferMap;
}());
export { WaferMap };
//# sourceMappingURL=app.js.map