// array
const arr = [1, 2, 3, 4];
console.log(arr);

// object
const obj = {
  name: "sobuj",
  age: 24,
};
console.log(obj);

// function
const func = function () {
  console.log("inside func");
};
func();

console.table([typeof arr, typeof obj, typeof func]); //object,object,function
