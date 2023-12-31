// click event listener
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  alert("clicked");
});

// ------------>>----------------->>
// submit event
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const wholeForm = e.target; //getting the whole form html
  const input = wholeForm.input.value; // getting value of the input field whose name attribute is input
  console.log(input);
});

// --------->>--------------->>
// keypress event listener
const input = document.getElementById("alone-input");
input.addEventListener("keypress", (e) => {
  console.log(e.key);
});

// ------------------->>------------------>>
// mouseover event listener
const developer = document.getElementById("my-name");
developer.addEventListener("mouseover", () => {
  developer.style.color = "orange";
});
