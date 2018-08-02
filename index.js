var store = { drivers: [] }
class Driver{
    constructor(name){
      this.name = name
      this.id = window.store.push(this) - 1
    }
}
