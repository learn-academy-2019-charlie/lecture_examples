// Class Review

// Classes are: Blueprint for objects

// Objects are made up of behaviors & data

class Coffee {
    constructor(cream, sugars){
        this.cream = cream
        this.sugars = sugars
    }
    
    coffeeProfile() {
        console.log(`This coffee has ${this.sugars} sugars`)
    }
}

let coffee = new Coffee(true, 2)
console.log(coffee)
coffee.coffeeProfile()

// Basic inheritance: Sharing the blueprint

class Dog {
    constructor(name){
        this.name = name
        this.paws = 4
        this.ears = 'pointed'
    }
    
    bark(){
        console.log('BARK!')
    }
}

let dog = new Dog('Airbud')
console.log(dog)
dog.bark()

class Beagle extends Dog{
    
}

// let beagle = new Beagle()
// console.log(beagle)

// Expressing variation through attributes (altering the constructor)

class Beagle extends Dog {
    constructor(name){
      // Running the Dog class constructor
      super(name)
      this.ears = "floppy"
    }
    
}

// let beagle = new Beagle('Snoopy')
// console.log(beagle)


// Expressing variation through behavior (adding custom methods)

class Beagle extends Dog {
    constructor(name, fur){
       super(name) // Running the Dog class constructor
       this.ears = "floppy"
       this.fur = fur
    }
    
    howl(){
        console.log('ROOOO!')
    }
    
}

let beagle = new Beagle('Snoopy', 'short/coarse')
console.log(beagle)
beagle.bark()
beagle.howl()


// dog.howl() -> Is invalid