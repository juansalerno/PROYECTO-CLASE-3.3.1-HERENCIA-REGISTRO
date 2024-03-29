"use strict";
exports.__esModule = true;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, year, color, patente) {
        this.estaPrendido = false;
        this.velocidadActual = 0;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.kilometraje = 0;
        this.patente = patente;
    }
    Vehiculo.prototype.encenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Vehiculo.prototype.acelerar = function () {
        this.velocidadActual += 1;
    };
    Vehiculo.prototype.frenar = function () {
        this.velocidadActual -= 1;
    };
    Vehiculo.prototype.setKilometraje = function (n) {
        this.kilometraje += n;
    };
    Vehiculo.prototype.getStatus = function () {
        return this.estaPrendido;
    };
    Vehiculo.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModel = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getYear = function () {
        return this.year;
    };
    Vehiculo.prototype.getKilometraje = function () {
        return this.kilometraje;
    };
    Vehiculo.prototype.getColor = function () {
        return this.color;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    return Vehiculo;
}());
exports["default"] = Vehiculo;
