const name = "sobuj";
const age = 24;
console.log(`${name} is ${age}`); //template string
console.log(name.length);

// using String object to declare string
const college = new String("i am sobuj");
console.log(college);
console.log(college.toUpperCase());
console.log(college.length);
console.log(college.charAt(5)); //character at index 5
console.log(college.indexOf("s")); //index of a certain character
console.log(college.includes("sob")); //return boolean if it finds any match or not
console.log(college.substring(2, 5)); //first param is start index and second param is the last index.
console.log(college.slice(2, 6));
console.log(college);

const anotherString = "    sobuj     ";
console.log(anotherString);
console.log(anotherString.trim()); //this will remove start and end white spaces.

const url = "i am legend";
console.log(url.replace("legend", "$"));
console.log(url.split(" "));
