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
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, modelo, year, color, patente, pesoPropio, pesoCarga) {
        var _this = _super.call(this, marca, modelo, year, color, patente) || this;
        _this.pesoCarga = pesoCarga;
        _this.pesoPropio = pesoPropio;
        return _this;
    }
    Camion.prototype.getPesoPropio = function () {
        return this.pesoPropio;
    };
    Camion.prototype.getPesoCarga = function () {
        return this.pesoCarga;
    };
    return Camion;
}(vehiculo_1["default"]));
exports["default"] = Camion;
