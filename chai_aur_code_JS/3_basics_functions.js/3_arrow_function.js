const obj = {
  myName: "sobuj",
  age: 24,
  show: function () {
    console.log(`My name is ${this.myName}`); //this refers to the current object
  },
};

obj.show();
// console.log(this); // {}

// function first() {
//   console.log(this); // some global object
// }
// first();

// const func = function () {
//   console.log(this); //some global object
// };
// func();

const arrow = () => {
  console.log(this); // {}
};
arrow();
