// switch case
var value = 4;
// value is passes inside switch to compare with case
switch (value) {
  case 1:
    console.log("alpha");
    break;

  case 2:
    console.log("beta");
    break;

  case 3:
    console.log("gamma");
    break;

  case 4:
    console.log("x-ray");
    break;
}

// --------------------------->>-------------------->>>
// switch case with default statement
value = "e";

switch (value) {
  case "a":
    console.log("apple");
    break;

  case "b":
    console.log("book");
    break;

  case "c":
    console.log("cat");
    break;

  case "d":
    console.log("dog");
    break;

  default:
    console.log("nothing");
    break;
}

// ------------------------>>------------------------------>>
// one answer for multiple values or multiple cases
value = 10;

switch (value) {
  case 1:
  case 2:
  case 3:
    console.log("this answer is for case 1, 2 ,3");
    break;
  case 4:
  case 5:
  case 6:
    console.log("this answer is for case 4, 5 ,6");
    break;
  case 7:
  case 8:
  case 9:
    console.log("this answer is for case 7, 8 ,9");
    break;
  case 10:
  case 11:
  case 12:
    console.log("this answer is for case 10, 11 ,12");
    break;
  default:
    console.log("no value");
}
