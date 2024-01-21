"use strict";

// this keyword points to the object..this keyword only works in methods
const obj = {
  first_name: "sobuj",
  last_name: "ahmed",
  born: 2000,
  addName: function () {
    console.log(`My name is ${this.first_name} ${this.last_name}`);
  },
  calcAge: function () {
    console.log(2024 - this.born);
  },
  // this keyword does not work in arrow functions
  greet: () => {
    console.log(this.first_name); //output: undefined
  },
};

obj.greet();
obj.addName();
obj.calcAge(); //24

const obj2 = {
  born: 1999,
};

obj2.calcAge = obj.calcAge; //this is known as method borrowing.
obj2.calcAge(); //25
