import Vehiculo from './vehiculo';

export default class Camion extends Vehiculo {
    private pesoPropio: number;
    private pesoCarga: number;

    public constructor(marca: string, modelo: string, year: number, color: string, patente: string, pesoPropio: number, pesoCarga: number) {
        super(marca, modelo, year, color, patente);
        this.pesoCarga = pesoCarga;
        this.pesoPropio = pesoPropio;
    }

    public getPesoPropio(): number {
        return this.pesoPropio;
    }

    public getPesoCarga(): number {
        return this.pesoCarga;
    }
}