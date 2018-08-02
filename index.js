let store = { drivers: [] }
class Drivers{
    constructor(name){
      this.name = name
      store.push(this)
    }
}
