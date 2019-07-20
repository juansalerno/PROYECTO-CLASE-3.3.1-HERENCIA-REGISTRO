import Vehiculo from './vehiculo';

export default class Moto extends Vehiculo {
    private cilindradas: number;

    public constructor(marca: string, modelo: string, year: number, color: string, patente: string, cilindradas: number) {
        super(marca, modelo, year, color, patente);
        this.cilindradas = cilindradas;
    }

    public getCilindradas() {
        return this.cilindradas
    }

}