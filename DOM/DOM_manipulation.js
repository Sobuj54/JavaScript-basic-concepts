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

// ------------------------->>---------------------->>
const text = document.querySelector("#name");
// changing text
text.innerHTML = "Sobuj Ahmed";
// adding style
text.style.backgroundColor = "green";
text.style.padding = "15px";

// adding class
text.classList.add("heading");
// text.classList.remove("heading"); removing class

// -------------->>------------------>>
const section1 = document.querySelector("#section-1");
// creating element
const div = document.createElement("div");
section1.appendChild(div);
div.classList.add("custom");

const p = document.createElement("p");
const customDiv = document.querySelector(".custom");
customDiv.appendChild(p);
p.innerHTML = "custom element";

// adding id to a tag
p.setAttribute("id", "para");

// ----------->>------------>>>
// attributes of an image
const img = document.createElement("img");
img.src =
  "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.336852061.1702737158&semt=sph";

// same thing but using setAttribute method
// img.setAttribute("src","https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.336852061.1702737158&semt=sph")

img.alt = "random image";
// img.setAttribute("alt", "random image"); also the same thing

customDiv.appendChild(img);
