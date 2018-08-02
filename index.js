let store = { drivers: [] }
class Drivers{
    constructor(name){
      this.name = name
      this.id = store.push(this) - 1
    }
}
