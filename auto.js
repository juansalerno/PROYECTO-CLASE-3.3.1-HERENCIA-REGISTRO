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
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, modelo, year, color, patente) {
        var _this = _super.call(this, marca, modelo, year, color, patente) || this;
        _this.conBaul = true;
        return _this;
    }
    Auto.prototype.getConBaul = function () {
        return this.conBaul;
    };
    Auto.prototype.cambiarEstadoBaul = function () {
        if (this.conBaul)
            this.conBaul = false;
        else
            this.conBaul = true;
    };
    return Auto;
}(vehiculo_1["default"]));
exports["default"] = Auto;
