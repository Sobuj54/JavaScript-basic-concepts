// selection by tag name
const tags = document.getElementsByTagName("h2");
console.log(tags);

// getting element by id
const name = document.getElementById("name");
console.log(name);

// getting element by class
const pro = document.getElementsByClassName("pro");
console.log(pro);

// ----------------
// same things with query selector
const getName = document.querySelector("#name"); //getting by id
console.log(getName);

const getProfession = document.querySelectorAll(".pro"); //getting by class
console.log(getProfession);

// -------------
// getting parent element or parent node
const parent = document.querySelector("#name").parentNode; //.parentElement for parent element
console.log("parent element:", parent);

// getting sibling elements
const sibling = document.querySelector(".pro").nextElementSibling; //gives next sibling
console.log("next siblings", sibling);

const previousSibling = document.querySelector(".pro").previousElementSibling;
console.log("previous siblings:", previousSibling);

// get child nodes
const child = document.querySelector(".wrapper").childNodes; //.children to get child elements
console.log("child nodes", child);
