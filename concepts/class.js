// class - constructor & method
class Vehicle {
    constructor(brand, engine) {
        this.brand = brand
        this.engine = engine
    }
    co2() {
        console.log(`${this.brand} is known for its environment friendly design.`);
    }
}
class Car extends Vehicle {
    constructor(brand, engine, model) {
        super(brand, engine)
        this.model = model
    }
    co2() {
        super.co2()
        console.log(`${this.brand} produces engines that produce less carbon footprint per year.`);
    }
}

const mercedes = new Car('Mercedes', 'V8 Turbo', 'S-class')
console.log(mercedes);
mercedes.co2()