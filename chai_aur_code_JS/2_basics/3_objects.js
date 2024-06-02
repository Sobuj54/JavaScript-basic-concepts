// object literals

const mySym = Symbol("123");

const myObj = {
  name: "Sobuj",
  "Full Name": "sobuj ahmed",
  age: 18,
  email: "sobuj@gmail.com",
  subjects: ["math", "dsd"],
  isAlive: true,
  [mySym]: "my symbol", //syntax of using symbol in object
  myFunc: function () {
    console.log("my func");
  },
};
console.log(myObj);
console.log(myObj.name); //dot notation to access object values
console.log(myObj["Full Name"]); //square bracket notation to access object values
console.log(myObj[mySym]); //accessing symbol
myObj.myFunc();

myObj.name = "ahmed";
Object.freeze(myObj); //this makes the object immutable
myObj.name = "sobuj";
console.log(myObj);
