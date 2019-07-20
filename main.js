"use strict";
exports.__esModule = true;
var registroVehiculos_1 = require("./registroVehiculos");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
var auto_1 = require("./auto");
var readlineSync = require("./node_modules/readline-sync");
var miRegistro = new registroVehiculos_1["default"]();
console.log('Bienvenido al Registro Vehicular \n');
console.log('Seccion Ingresos y Reemplazos de vehiculos \n');
var tipoVehiculoAgregarOReemplazar = readlineSync.question('Ingrese el tipo de vehiculo que desea agregar o reemplazar (auto, moto o camion) o presione "ENTER" para salir: \n');
while (tipoVehiculoAgregarOReemplazar != '') {
    switch (tipoVehiculoAgregarOReemplazar) {
        case 'moto':
            var datosMoto = readlineSync.question('Ingrese marca, modelo, año, color, patente y cilindradas separando con ",": \n');
            var eleccionMoto = readlineSync.questionInt('Presione 1 para agregarlo al listado o presione 2 para reemplazarlo por otro: \n');
            var arregloDatosMoto = datosMoto.split(',');
            var moto = new moto_1["default"](arregloDatosMoto[0], arregloDatosMoto[1], parseInt(arregloDatosMoto[2]), arregloDatosMoto[3], arregloDatosMoto[4], parseInt(arregloDatosMoto[5]));
            if (eleccionMoto == 1) {
                miRegistro.addVehiculo(moto);
            }
            else if (eleccionMoto == 2) {
                var posicionMoto = readlineSync.questionInt('En qué posicion de la lista se encuentra la moto que desea reemplazar?: \n');
                miRegistro.updateVehiculo(moto, posicionMoto);
            }
            break;
        case 'camion':
            var datosCamion = readlineSync.question('Ingrese marca, modelo, año, color, patente, peso propio (en kg) y peso de la carga (en Kg) separando con ",": \n');
            var eleccionCamion = readlineSync.questionInt('Presione 1 para agregarlo al listado o presione 2 para reemplazarlo por otro: \n');
            var arregloDatosCamion = datosCamion.split(',');
            var camion = new camion_1["default"](arregloDatosCamion[0], arregloDatosCamion[1], parseInt(arregloDatosCamion[2]), arregloDatosCamion[3], arregloDatosCamion[4], parseInt(arregloDatosCamion[5]), parseInt(arregloDatosCamion[6]));
            if (eleccionCamion == 1) {
                miRegistro.addVehiculo(camion);
            }
            else if (eleccionCamion == 2) {
                var posicionCamion = readlineSync.questionInt('En qué posicion de la lista se encuentra el camion que desea reemplazar?: \n');
                miRegistro.updateVehiculo(camion, posicionCamion);
            }
            break;
        case 'auto':
            var datosAuto = readlineSync.question('Ingrese marca, modelo, año, color y patente separando con ",": \n');
            var eleccionAuto = readlineSync.questionInt('Presione 1 para agregarlo al listado o presione 2 para reemplazarlo por otro: \n');
            var arregloDatosAuto = datosAuto.split(',');
            var auto = new auto_1["default"](arregloDatosAuto[0], arregloDatosAuto[1], parseInt(arregloDatosAuto[2]), arregloDatosAuto[3], arregloDatosAuto[4]);
            if (eleccionAuto == 1) {
                miRegistro.addVehiculo(auto);
            }
            else if (eleccionAuto == 2) {
                var posicionAuto = readlineSync.questionInt('En qué posicion de la lista se encuentra el auto que desea reemplazar?: \n');
                miRegistro.updateVehiculo(auto, posicionAuto);
            }
            break;
        default: console.log('Ha ingresado un dato erróneo.\n');
    }
    tipoVehiculoAgregarOReemplazar = readlineSync.question('Ingrese el tipo de vehiculo que desea agregar o reemplazar (auto, moto o camion) o presione "ENTER" para salir: \n');
}
console.log('Seccion Busqueda, impresión y eliminacion de vehiculos \n');
var vehiculoBuscado = readlineSync.question('Presione 1 para buscar un vehículo por numero de lista, presione 2 para buscar por patente o presione "ENTER" para salir: \n');
while (vehiculoBuscado != '') {
    switch (vehiculoBuscado) {
        case '1':
            var numeroListaBuscado = readlineSync.questionInt('Ingrese el numero en la lista del vehiculo buscado: \n');
            var eleccionUsuario1 = readlineSync.questionInt('Presione 1 para mostrarlo en pantalla o presiones 2 para eliminarlo: \n');
            if (eleccionUsuario1 == 1) {
                console.log(miRegistro.getVehiculoByIndex(numeroListaBuscado));
            }
            else if (eleccionUsuario1 == 2) {
                miRegistro.deleteVehiculoPorIndice(numeroListaBuscado);
                console.log('Vehiculo eliminado.\n');
            }
            break;
        case '2':
            var patenteBuscada = readlineSync.question('Ingrese la patente del vehiculo buscado: \n');
            var eleccionUsuario2 = readlineSync.questionInt('Presione 1 para mostrarlo en pantalla o presiones 2 para eliminarlo: \n');
            if (eleccionUsuario2 == 1) {
                console.log(miRegistro.getVehiculoPorPatente(patenteBuscada));
            }
            else if (eleccionUsuario2 == 2) {
                miRegistro.deleteVehiculoPorPatente(patenteBuscada);
                console.log('Vehiculo eliminado.\n');
            }
            break;
        default:
            console.log('Ha ingresado un dato erróneo.\n');
    }
    vehiculoBuscado = readlineSync.question('Presione 1 para buscar un vehículo por numero de lista, presione 2 para buscar por patente o presione "ENTER" para salir: \n');
}
// impresion del listado total a los fines de control:
console.log('Impresion del listado actualizado con las modificaciones realizadas: \n');
miRegistro.getVehiculosList();
