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
