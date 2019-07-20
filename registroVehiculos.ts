import Vehiculo from './vehiculo';
import Moto from './moto';
import Camion from './camion';
import Auto from './auto';


export default class RegistroVehiculos {
    private baseDatos: Vehiculo[]

    public constructor() {
        this.baseDatos = [];

    }

    public getVehiculosList(): void {
        console.log("\n");
        for (let i = 0; i < this.baseDatos.length; i++) {
            console.log(this.baseDatos[i]);
        }
        console.log("\n");
    }

    public addVehiculo(vehiculo: Vehiculo): void {
        this.baseDatos.push(vehiculo);
    }



    public getVehiculoByIndex(index: number): Vehiculo {
        if (index > 0 && index <= this.baseDatos.length)
            return this.baseDatos[(index - 1)]
        else {
            console.log("Indice inválido.\n");
            return null;
        }
    }

    public getVehiculoPorPatente(patente: string): Vehiculo {
        for (let i = 0; i < this.baseDatos.length; i++) {
            if (this.baseDatos[i].getPatente().toLowerCase() == patente.toLowerCase()) {
                return this.baseDatos[i];
            }
        }
        console.log('No se ha encontrado vehículo con la patente ingresada');
        return null;
    }

    public getIndicePorPatente(patente: string): number {
        for (let i = 0; i < this.baseDatos.length; i++) {
            if (this.baseDatos[i].getPatente().toLowerCase() == patente.toLowerCase()) {
                return i;
            }
        }
        console.log('No se ha encontrado vehículo con la patente ingresada');
        return null;
    }

    public deleteVehiculoPorIndice(index: number): void {
        if (index > 0 && index <= this.baseDatos.length) {
            this.baseDatos.splice(index - 1, 1);
            console.log("Vehiculo eliminado de la lista.\n");
        }
        else {
            console.log("Indice inválido.\n");
        }
    }

    public deleteVehiculoPorPatente(patente: string): void {
        let indice = this.getIndicePorPatente(patente);
        this.baseDatos.splice(indice, 1);
        console.log("Vehiculo eliminado de la lista.\n");
    }



    public updateVehiculo(vehiculo: Vehiculo, indice: number): void {
        if (indice > 0 && indice <= this.baseDatos.length) {
            this.baseDatos.splice((indice - 1), 1, vehiculo);
            console.log("Vehiculo actualizado.\n");
        } else {
            console.log("Indice inválido debido a que ingresó un numero menor a 0 o bien un numero mayor a la cantidad de vehiculos que actualmente se enuentran en el listado\n");
            console.log('La cantidad de vehiculos actuales son los siguientes: \n');
            this.getVehiculosList();
        }
    }
}

