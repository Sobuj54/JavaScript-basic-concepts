const date = new Date();
console.log("plain date: ", date);
console.log("date converted to string: ", date.toString());
console.log("date converted to local date: ", date.toLocaleDateString());
console.log("date converted to iso string: ", date.toISOString()); //it's the normal date when created
console.log("date converted to date string: ", date.toDateString());
console.log("date converted to local string: ", date.toLocaleString());
console.log("date converted to json: ", date.toJSON());
console.log("get the day: ", date.getDay());
console.log("get the month: ", date.getMonth() + 1); //remember month starts from 0
console.log("get the year: ", date.getFullYear());
console.log("get the hours: ", date.getHours());
console.log("get the time: ", date.getTime());

// ------------------->>>>>
// creating my own custom date
const myDate = new Date(1971, 2, 26); //26 march 1971 =>month starts from 0 to 11 >>0 is january and 11 is december
console.log("my custom date: ", myDate.toDateString());

// another way of date format
const secondDate = new Date("2024-01-12"); //in string format month starts from 01
console.log("second date: ", secondDate.toLocaleDateString());
