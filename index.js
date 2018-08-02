let store = { drivers: [] }
class Person{
  constructor(name){
    this.name = name
    this.id = store[this.constructor.name.toLowerCase() + "s"].push(this) - 1
  }
}
class Driver{
    constructor(name){
      this.name = name
      this.id = store.drivers.push(this) - 1
    }
}

class Passeneger{
  constuctor(name){
    this.name = name

  }
}
