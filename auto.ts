import Vehiculo from './vehiculo';

export default class Auto extends Vehiculo {
    private conBaul: boolean;

    public constructor(marca: string, modelo: string, year: number, color: string, patente: string) {
        super(marca, modelo, year, color, patente);
        this.conBaul = true;
    }

    public getConBaul(): boolean {
        return this.conBaul
    }

    public cambiarEstadoBaul(): void {
        if (this.conBaul)
            this.conBaul = false;
        else
            this.conBaul = true;
    }
}