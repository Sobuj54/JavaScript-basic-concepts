"use strict";

console.log("first"); //printed first

setTimeout(() => {
  console.log("second");
}, 1000); //printed fifth

setTimeout(() => {
  console.log("third");
}, 0); //printed third

console.log("fourth"); //printed second

setTimeout(() => {
  console.log("fifth");
}, 500); //printed fourth
