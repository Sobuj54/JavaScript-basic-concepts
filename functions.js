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
