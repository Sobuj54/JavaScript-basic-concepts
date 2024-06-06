// rest(...) operator is used to take undetermined amount of parameters

function values(...rest) {
  console.log(rest); //this rest will have the array of given arguments
}

values(10, 20, 30, 25);
