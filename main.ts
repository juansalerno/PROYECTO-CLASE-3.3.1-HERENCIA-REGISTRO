import RegistroVehiculos from './registroVehiculos';
import Vehiculo from './vehiculo';
import Moto from './moto';
import Camion from './camion';
import Auto from './auto';
import * as readlineSync from './node_modules/readline-sync';


let miRegistro = new RegistroVehiculos();

console.log('Bienvenido al Registro Vehicular \n');

console.log('Seccion Ingresos y Reemplazos de vehiculos \n');

let tipoVehiculoAgregarOReemplazar: string = readlineSync.question('Ingrese el tipo de vehiculo que desea agregar o reemplazar (auto, moto o camion) o presione "ENTER" para salir: \n');
while (tipoVehiculoAgregarOReemplazar != '') {
    switch (tipoVehiculoAgregarOReemplazar.toLowerCase()) {
        case 'moto':
            let arregloDatosMoto: string[] = new Array(6);
            arregloDatosMoto[0] = readlineSync.question('Ingrese marca: ');
            arregloDatosMoto[1] = readlineSync.question('Ingrese modelo: ');
            arregloDatosMoto[2] = readlineSync.question('Ingrese año: ');
            arregloDatosMoto[3] = readlineSync.question('Ingrese color: ');
            arregloDatosMoto[4] = readlineSync.question('Ingrese patente: ');
            arregloDatosMoto[5] = readlineSync.question('Ingrese cilindradas: ');

            let moto: Vehiculo = new Moto(arregloDatosMoto[0], arregloDatosMoto[1], parseInt(arregloDatosMoto[2]), arregloDatosMoto[3], arregloDatosMoto[4], parseInt(arregloDatosMoto[5]))

            let eleccionMoto = readlineSync.questionInt('Presione 1 para agregarlo al listado o presione 2 para reemplazarlo por otro: \n');

            if (eleccionMoto == 1) {
                miRegistro.addVehiculo(moto);
            }
            else if (eleccionMoto == 2) {
                let posicionMoto = readlineSync.questionInt('En qué posicion de la lista se encuentra la moto que desea reemplazar?: \n')
                miRegistro.updateVehiculo(moto, posicionMoto);
            }
            break;

        case 'camion':
            let arregloDatosCamion: string[] = new Array(7);
            arregloDatosCamion[0] = readlineSync.question('Ingrese marca: ')
            arregloDatosCamion[1] = readlineSync.question('Ingrese modelo: ')
            arregloDatosCamion[2] = readlineSync.question('Ingrese año: ')
            arregloDatosCamion[3] = readlineSync.question('Ingrese color: ')
            arregloDatosCamion[4] = readlineSync.question('Ingrese patente: ')
            arregloDatosCamion[5] = readlineSync.question('Ingrese peso propio del camion (en Kg): ')
            arregloDatosCamion[6] = readlineSync.question('Ingrese peso de la carga del camion (en Kg): ')

            let camion: Vehiculo = new Camion(arregloDatosCamion[0], arregloDatosCamion[1], parseInt(arregloDatosCamion[2]), arregloDatosCamion[3], arregloDatosCamion[4], parseInt(arregloDatosCamion[5]), parseInt(arregloDatosCamion[6]))

            let eleccionCamion = readlineSync.questionInt('Presione 1 para agregarlo al listado o presione 2 para reemplazarlo por otro: \n');

            if (eleccionCamion == 1) {
                miRegistro.addVehiculo(camion);
            }
            else if (eleccionCamion == 2) {
                let posicionCamion = readlineSync.questionInt('En qué posicion de la lista se encuentra el camion que desea reemplazar?: \n');
                miRegistro.updateVehiculo(camion, posicionCamion)
            }
            break;
        case 'auto':
            let arregloDatosAuto: string[] = new Array(5);
            arregloDatosAuto[0] = readlineSync.question('Ingrese marca: ');
            arregloDatosAuto[1] = readlineSync.question('Ingrese modelo: ');
            arregloDatosAuto[2] = readlineSync.question('Ingrese año: ');
            arregloDatosAuto[3] = readlineSync.question('Ingrese color: ');
            arregloDatosAuto[4] = readlineSync.question('Ingrese patente: ');

            let auto: Vehiculo = new Auto(arregloDatosAuto[0], arregloDatosAuto[1], parseInt(arregloDatosAuto[2]), arregloDatosAuto[3], arregloDatosAuto[4]);

            let eleccionAuto = readlineSync.questionInt('Presione 1 para agregarlo al listado o presione 2 para reemplazarlo por otro: \n');

            if (eleccionAuto == 1) {
                miRegistro.addVehiculo(auto);
            }
            else if (eleccionAuto == 2) {
                let posicionAuto = readlineSync.questionInt('En qué posicion de la lista se encuentra el auto que desea reemplazar?: \n')
                miRegistro.updateVehiculo(auto, posicionAuto);
            }
            break;
        default: console.log('Ha ingresado un dato erróneo.\n');
    }

    tipoVehiculoAgregarOReemplazar = readlineSync.question('Ingrese el tipo de vehiculo que desea agregar o reemplazar (auto, moto o camion) o presione "ENTER" para salir: \n');
}

console.log('Seccion Busqueda, impresión y eliminacion de vehiculos \n');

let vehiculoBuscado: string = readlineSync.question('Presione 1 para buscar un vehículo por numero de lista, presione 2 para buscar por patente o presione "ENTER" para salir: \n');
while (vehiculoBuscado != '') {
    switch (vehiculoBuscado) {
        case '1':
            let numeroListaBuscado: number = readlineSync.questionInt('Ingrese el numero en la lista del vehiculo buscado: \n');
            let eleccionUsuario1: number = readlineSync.questionInt('Presione 1 para mostrarlo en pantalla o presiones 2 para eliminarlo: \n');
            if (eleccionUsuario1 == 1) {
                console.log(miRegistro.getVehiculoByIndex(numeroListaBuscado));
            }
            else if (eleccionUsuario1 == 2) {
                miRegistro.deleteVehiculoPorIndice(numeroListaBuscado);
                console.log('Vehiculo eliminado.\n');
            }
            break;
        case '2':
            let patenteBuscada: string = readlineSync.question('Ingrese la patente del vehiculo buscado: \n');
            let eleccionUsuario2: number = readlineSync.questionInt('Presione 1 para mostrarlo en pantalla o presiones 2 para eliminarlo: \n')
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
    vehiculoBuscado = readlineSync.question('Presione 1 para buscar un vehículo por numero de lista, presione 2 para buscar por patente o presione "ENTER" para salir: \n')
}

// impresion del listado total a los fines de control:
console.log('Impresion del listado actualizado con las modificaciones realizadas: \n');

miRegistro.getVehiculosList();

