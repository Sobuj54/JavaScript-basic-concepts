const dcHeroes = ["superman", "wonder women", "batman"];
const marvelHeroes = ["iron man", "spider man", "captain america"];

// dcHeroes.push(marvelHeroes);
// console.log(dcHeroes); ["superman", "wonder women", "batman", ["iron man", "spider man", "captain america"]]

// const allHeroes = dcHeroes.concat(marvelHeroes);
// console.log(allHeroes);
// [
//     'superman',
//     'wonder women',
//     'batman',
//     'iron man',
//     'spider man',
//     'captain america'
//   ]

const allHeroes = [...dcHeroes, ...marvelHeroes]; //best way of combining two array using spread operator
console.log(allHeroes);

// turn any multi-dimensional array in single dimension using flat() method
const multiArray = [1, 25, 5, [10, 25, 3, [2, 5, 1, [10, 23]]]];
const singleArray = multiArray.flat(Infinity);
console.log(singleArray); //[1,25,5,10,25,3,2,5,1,10,23]

console.log(Array.isArray("sobuj")); //false
console.log(Array.from("Sobuj")); //creates an array [ 'S', 'o', 'b', 'u', 'j' ]

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3)); //creates array of variables [100,200,300]
