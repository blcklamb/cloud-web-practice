class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }
  getModelName() {
    return this.modelName;
  }
  getModelYear() {
    return this.modelYear;
  }
  getPrice() {
    return this.price;
  }
  getType() {
    return this.type;
  }
  setModelName(modelName) {
    this.modelName = modelName;
  }
  setModelYear(modelYear) {
    this.modelYear = modelYear;
  }
  setPrice(price) {
    this.price = price;
  }
  setType(type) {
    this.type = type;
  }
}

let car = new Car("model3", 2023, "e", 40_000_000);
console.log(car.getPrice());
car.setPrice(43_000_000);
console.log(car.getPrice());

class ElectricCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    super(modelName, modelYear, "e", price);
    this.chargeTime = chargeTime;
  }
  getChargeTime() {
    return this.chargeTime;
  }
  setChargeTime(chargeTime) {
    this.chargeTime = chargeTime;
  }
}

let elecCar = new ElectricCar("ionic6", 2022, 45_000_000, 120);
console.log(elecCar);
console.log(elecCar.getChargeTime());
elecCar.setChargeTime(50);
console.log(elecCar.getChargeTime());
