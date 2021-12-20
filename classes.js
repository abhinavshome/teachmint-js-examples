class Car {
    constructor() {
        this.numOfWheels = 4;
    }

    drive() {
        console.log('driving...')
    }
};

let myCar = new Car();

console.log(myCar.numOfWheels);
myCar.drive();