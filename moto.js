"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var vehiculo_1 = require("./vehiculo");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modelo, year, color, patente, cilindradas) {
        var _this = _super.call(this, marca, modelo, year, color, patente) || this;
        _this.cilindradas = cilindradas;
        return _this;
    }
    Moto.prototype.getCilindradas = function () {
        return this.cilindradas;
    };
    return Moto;
}(vehiculo_1["default"]));
exports["default"] = Moto;
