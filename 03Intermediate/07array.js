var countries = ["India", "USA", "Canada", "Russia"];

var cities = new Array("Solapur", "Mumbai", "Delhi", "Pune", "Jaipur");

console.log(countries);
console.log(cities);

// var user = ["Atharva", "athrva123@email.com", 21, 2020];

//Pushing into country
// countries.push("Vakanda");
// console.log(countries);

//Poping from country
// countries.pop();
// console.log(countries);

// countries.unshift(cities[0]); // it will add the new element at the start.
// console.log(countries);

// countries.shift(); // It will remove the starting element.
// countries.shift();
// countries.shift();
// console.log(countries);

// console.log(countries.indexOf('Canada')); // It will return the index no. and if there is no element it will ruturn 0.

console.log(countries.fill(0)); // It will fill the entire array with 0
console.log(Array.from("Atharva"))