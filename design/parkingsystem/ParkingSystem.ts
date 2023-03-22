export default class ParkingSystem {
  bigParkingSpaces: number;
  mediumParkingSpaces: number;
  smallParkingSpaces: number;

  constructor(big: number, medium: number, small: number) {
    this.bigParkingSpaces = big;
    this.mediumParkingSpaces = medium;
    this.smallParkingSpaces = small;
  }

  addCar(carType: number): boolean {
    switch (carType) {
      case 1:
        if (this.bigParkingSpaces === 0) {
          return false;
        }
        this.bigParkingSpaces -= 1;
        return true;
      case 2:
        if (this.mediumParkingSpaces === 0) {
          return false;
        }
        this.mediumParkingSpaces -= 1;
        return true;
      case 3:
        if (this.smallParkingSpaces === 0) {
          return false;
        }
        this.smallParkingSpaces -= 1;
        return true;

      default:
        throw new Error(`Unknown car type ${carType}`);
    }
  }
}
