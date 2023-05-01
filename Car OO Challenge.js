class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    honk(){
        return "Beep.";
    }
    
    toString(){
        const {make, model, year} = this;
        return `The vehicle is a ${make} ${model} from ${year}.`
    }
}

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    
    revEngine(){
        return "VROOM!!!"
    }
}

// Had to use solution for this one, because I wasn't aware of the "instanceof" operator, nor how to add an entire class into a function

class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(automobile){
        if (!(automobile instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity){
            return "Sorry, we're full.";
        }
        this.vehicles.push(automobile);
        return "Vehicle added!";
    }
}