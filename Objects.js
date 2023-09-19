// js objects
var car = {
  name: "mercedes",
  color: "black",
  price: "100k",
  gears: 5,
  "company name": "mercedes benz",
};

console.log(car);

// accessing object using dot notation
var Name = car.name;
console.log(Name);
// updating object using dot notation
car.price = 100000252;
// console.log(car);

// creating new object key and value using dot notation
car.tyres = 4;
console.log(car);

// ----------------->>-------------------->>
// accessing object using bracket notation .we can use bracket notation any time we want but it is necessary to use bracket notation when the key has space in it.
var companyName = car["company name"];
console.log(companyName);
// creating new key value inside object using bracket notation
car["made in"] = 1997;
console.log(car);

// -------------------------->>------------------->>
// deleting key values form object
delete car.price;
console.log(car);

//---------------------->>------------------->>>
// checking if a object has a specific property or not..by using hasOwnProperty() method ..this method will return true if the key exists otherwise it will return false
var hasKey = car.hasOwnProperty("tyres");
console.log(hasKey);
// inside car object tyres key exists so the result is true

// -------------------->>----------------------------->>
// assigning values of object fields to variables
var obj = {
  time: 20,
  speed: 32,
  name: "car",
};

const { time: x, speed: y, name: z } = obj; //now x=20 ,y=32, z="car"
console.log(x, y, z);
