// check if a string is palindrome or not

function palindrome(str) {
  if (str.length === 0) {
    return "empty";
  }
  if (str.length < 2) {
    return "single character";
  }
  const reversed = str.split("").reverse().join("");
  if (reversed === str) {
    return "palindrome";
  } else {
    return "not palindrome";
  }
}

console.log("the string is " + palindrome("mom"));
