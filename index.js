let store = { drivers: [], passengers: [] }
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

class Passeneger extends Person{
  constructor(name){
    super(name)
  }

}
