const course = {
  courseName: "PHero",
  batch: 7,
  price: 5500,
};

// destructuring
const { courseName, batch, price } = course;
// renaming is also possible in following way
// const { courseName: name, batch, price } = course; here courseName is renamed as name

console.log(courseName, " ", batch, " ", price);
