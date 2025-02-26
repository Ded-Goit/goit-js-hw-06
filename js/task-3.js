'use strict';

class StringBuilder {
  #value;
  constructor(initialValue) {
    //When creating an instance of the class, the initial string initialValue is written to the private property #value.
    this.#value = initialValue;
  }
  getValue() {
    //The method returns the current value of the string, which is stored in #value.
    return this.#value;
  }
  padEnd(str) {
    /**The method takes the string str and appends it to the end of the current value #value.
     * The += operator concatenates (appends) the string to the end of the existing one.*/
    this.#value += str;
  }
  padStart(str) {
    /**The method takes the string str and appends it to the beginning of the current value #value.Here,
     *  the new string is formed by concatenating: first str, then the current value.*/
    this.#value = str + this.#value;
  }
  padBoth(str) {
    /**The method calls the padStart and padEnd methods, 
    thus adding the specified string simultaneously to the beginning and end of the current value.*/
    this.padStart(str);
    this.padEnd(str);
  }
}
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
//Leave this code for review by your mentor.
