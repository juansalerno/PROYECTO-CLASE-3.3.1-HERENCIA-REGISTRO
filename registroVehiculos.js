"use strict";
exports.__esModule = true;
var RegistroVehiculos = /** @class */ (function () {
    function RegistroVehiculos() {
        this.baseDatos = [];
    }
    RegistroVehiculos.prototype.getVehiculosList = function () {
        console.log("\n");
        for (var i = 0; i < this.baseDatos.length; i++) {
            console.log(this.baseDatos[i]);
        }
        console.log("\n");
    };
    RegistroVehiculos.prototype.addVehiculo = function (vehiculo) {
        this.baseDatos.push(vehiculo);
    };
    RegistroVehiculos.prototype.getVehiculoByIndex = function (index) {
        if (index > 0 && index <= this.baseDatos.length)
            return this.baseDatos[(index - 1)];
        else {
            console.log("Indice inválido.\n");
            return null;
        }
    };
    RegistroVehiculos.prototype.getVehiculoPorPatente = function (patente) {
        for (var i = 0; i < this.baseDatos.length; i++) {
            if (this.baseDatos[i].getPatente().toLowerCase() == patente.toLowerCase()) {
                return this.baseDatos[i];
            }
        }
        console.log('No se ha encontrado vehículo con la patente ingresada');
        return null;
    };
    RegistroVehiculos.prototype.getIndicePorPatente = function (patente) {
        for (var i = 0; i < this.baseDatos.length; i++) {
            if (this.baseDatos[i].getPatente().toLowerCase() == patente.toLowerCase()) {
                return i;
            }
        }
        console.log('No se ha encontrado vehículo con la patente ingresada');
        return null;
    };
    RegistroVehiculos.prototype.deleteVehiculoPorIndice = function (index) {
        if (index > 0 && index <= this.baseDatos.length) {
            this.baseDatos.splice(index - 1, 1);
            console.log("Vehiculo eliminado de la lista.\n");
        }
        else {
            console.log("Indice inválido.\n");
        }
    };
    RegistroVehiculos.prototype.deleteVehiculoPorPatente = function (patente) {
        var indice = this.getIndicePorPatente(patente);
        this.baseDatos.splice(indice, 1);
        console.log("Vehiculo eliminado de la lista.\n");
    };
    RegistroVehiculos.prototype.updateVehiculo = function (vehiculo, indice) {
        if (indice > 0 && indice <= this.baseDatos.length) {
            this.baseDatos.splice((indice - 1), 1, vehiculo);
            console.log("Vehiculo actualizado.\n");
        }
        else {
            console.log("Indice inválido debido a que ingresó un numero menor a 0 o bien un numero mayor a la cantidad de vehiculos que actualmente se enuentran en el listado\n");
            console.log('La cantidad de vehiculos actuales son los siguientes: \n');
            this.getVehiculosList();
        }
    };
    return RegistroVehiculos;
}());
exports["default"] = RegistroVehiculos;
