let store = { drivers: [], passengers: [], trips: [] }
class Person{
  constructor(name){
    this.name = name
    this.id = store[this.constructor.name.toLowerCase() + "s"].push(this) - 1
  }
  trips(){
    return store.trips.filter( ( trip ) => { return trip[this.constructor.name.toLowerCase()]() === this  } )
  }
}
class Driver extends Person{
    constructor(name){
      super(name)
    }
   passengers(){
    return  this.trips().map( (trip) => { return trip.passenger() } )
   }
}

class Passenger extends Person{
  constructor(name){
    super(name)
  }
  drivers(){
   return  this.drivers().map( (trip) => { return trip.drivers() } )
  }

}
class Trip{
  constructor(driver, passenger){
    this.id = store[this.constructor.name.toLowerCase() + "s"].push(this) - 1
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.driverObj = driver
    this.passengerObj = passenger
  }
  driver(){
    return this.driverObj
  }
  passenger(){
    return this.passengerObj
  }
}
