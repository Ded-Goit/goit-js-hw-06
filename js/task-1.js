'use strict';

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Change code below this line
  getBalance() {
    return this.balance; //The current balance is returned.
  },
  getDiscount() {
    return this.discount; //Returns the discount value
  },
  setDiscount(value) {
    this.discount = value; //Takes the new discount value and updates the discount property of the object using this.discount.
  },
  getOrders() {
    return this.orders; //Returns an array of orders, which is located in the orders property of the object.
  },
  addOrder(cost, order) {
    this.balance -=
      cost -
      cost *
        this
          .discount; /** The amount for the order is calculated taking into account the discount: cost - cost * this.discount.
This amount is subtracted from the current balance using the -= operator.*/
    this.orders.push(order); //After updating the balance, the new order is added to the orders array.
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
// Leave this code for review by your mentor.
