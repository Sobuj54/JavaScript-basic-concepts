// function definition
function show() {
  console.log("hi this is show function");
}

show();

// function with argument
function withArg(a, b) {
  console.log(a + b);
}
console.log("function with argument :");
withArg(10, 25);

// function with default argument
function defaultArg(a = 10, b = 10) {
  return a + b;
}

console.log("default arg :", defaultArg());

// understanding scope
var myGlobal = 10;

function func1() {
  // if we do not use keywords like var,const,let then the variable will be in global scope ..like this in below example
  oopsGlobal = 100;
}

function func2() {
  var output = "";
  console.log(typeof oopsGlobal);
  //   the type is : undefined

  if (typeof myGlobal !== "undefined") {
    output = "my global :" + myGlobal;
  }
  if (typeof oopsGlobal !== "undefined") {
    output = "oops global :" + oopsGlobal;
  }
  console.log(output);
}

func2();
