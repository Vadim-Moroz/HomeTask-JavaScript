function Car(model, producer, year , max_speed, engine) {
    this.model = model
    this.producer = producer
    this.year = year
    this.max_speed = max_speed
    this.engine = engine
}
let cars=[
    new Car("Model S", "Tesla", 2022, 250, 1020),
    new Car("Mustang", "Ford", 2021, 250, 450),
    new Car("Civic", "Honda", 2020, 220, 182),
    new Car("Corolla", "Toyota", 2023, 210, 169),
    new Car("A6", "Audi", 2022, 250, 340),
    new Car("X5", "BMW", 2021, 243, 340),
    new Car("C-Class", "Mercedes-Benz", 2023, 250, 258),
    new Car("CX-5", "Mazda", 2022, 201, 187),
    new Car("Sportage", "Kia", 2024, 190, 180),
    new Car("Octavia", "Skoda", 2021, 230, 190)
];

Car.prototype.forEach = function (callback) {
    for (let car of this){
        callback(car);
    }
}
cars.forEach((car) => {console.log(car)});
Car.prototype.filter = function (callback) {
    const arr =[];
    for (let car of this){
    if (callback(this)){
            arr.push(this)
        }
    }
    return arr;
}
console.log(cars.filter(((car) => car.max_speed > 230)));