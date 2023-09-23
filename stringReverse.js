// reverse an string

function reverse(str) {
  let rtrStr = "";
  const strLen = str.length;

  for (let i = strLen - 1; i >= 0; i--) {
    rtrStr += str[i];
  }
  return rtrStr;
}

console.log(reverse("sobuj ahmed"));

// ---------------------->>>---------------------->>
// using built in methods to reverse string
const str = "sobuj";
const reversedStr = str.split("").reverse().join("");
console.log("using built in methods :", reversedStr);
function builtInReverse(str) {
  return str.split("").reverse().join("");
}
console.log(builtInReverse("name"));
