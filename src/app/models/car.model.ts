export class Car {
    id: number;
    licenseNumber: string;
    owner: string;
    carType: string;
    year: number;
    cm3: number;
    fuelType: string;

    constructor() {
        this.id = null;
        this.licenseNumber = '';
        this.owner = '';
        this.carType = '';
        this.year = 2019;
        this.cm3 = 1000;
        this.fuelType = '';
    }
}