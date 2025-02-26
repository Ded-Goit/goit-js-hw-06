'use strict';

class Storage {
  #items = [];
  constructor(array) {
    //The constructor accepts an initial array of products, which is written to this.#items.
    this.#items = array; //When creating a new instance of the class, the passed array is written to a private property.
  }
  getItems() {
    return this.#items; //The method returns the current array of items stored in the private #items property.
  }
  addItem(newItem) {
    this.#items.push(newItem); //The method takes a new item newItem and adds it to the #items array using the push method.
  }
  removeItem(itemToRemove) {
    //The method takes the name of the product to be deleted.
    this.#items = this.#items.filter(
      item => item !== itemToRemove
    ); /**The filter method creates a new array 
    in which all items that are not equal to itemToRemove are stored,
     and accordingly the item to be removed is not. */
  }
}
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// Leave this code for review by your mentor.
