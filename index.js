let store = { drivers: [] }
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
