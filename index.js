let store = { drivers: [], passengers: [], trips: [] }
class Person{
  constructor(name){
    this.name = name
    this.id = store[this.constructor.name.toLowerCase() + "s"].push(this) - 1
  }
}
class Driver extends Person{
    constructor(name){
      super(name)
    }
}

class Passenger extends Person{
  constructor(name){
    super(name)
  }

}
