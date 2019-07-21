export default class Vehiculo {

    protected estaPrendido: boolean
    protected velocidadActual: number
    protected color: string
    protected marca: string
    protected modelo: string
    protected year: number
    protected kilometraje: number
    protected patente: string

    public constructor(marca: string, modelo: string, year: number, color: string, patente: string) {
        this.estaPrendido = false;
        this.velocidadActual = 0;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.kilometraje = 0;
        this.patente = patente;
    }

    public encenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        }
    }

    public acelerar(): void {
        this.velocidadActual += 1;
    }

    public frenar(): void {
        this.velocidadActual -= 1;
    }

    public setKilometraje(n: number): void {
        this.kilometraje += n;
    }

    public getStatus(): boolean {
        return this.estaPrendido;
    }

    public getVelocidadActual(): number {
        return this.velocidadActual;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getModel(): string {
        return this.modelo;
    }

    public getYear(): number {
        return this.year;
    }

    public getKilometraje(): number {
        return this.kilometraje;
    }

    public getColor(): string {
        return this.color;
    }

    public getPatente(): string {
        return this.patente;
    }

}