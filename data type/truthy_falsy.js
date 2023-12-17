/*
A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context. Falsy values are :

    false, 0, "", Null, undefined, NaN
    
*/

const num = 0;
// this is falsy
if (num) {
  console.log("kisu ase");
} else {
  console.log("kisu nai");
}
// output will be "kisu nai"

// Truthy
/*
In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. 

That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.
*/
