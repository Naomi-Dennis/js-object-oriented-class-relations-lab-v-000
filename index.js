let store = { drivers: [] }
class Driver{
    constructor(name){
      this.name = name
      this.id = store.push(this) - 1
    }
}
