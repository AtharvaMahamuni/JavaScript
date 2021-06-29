

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

console.log(users.slice(1,3)); // starting value i.e. 1 is always inclusive but 2nd value i.e. 3 is exclusive.

console.log(users)
users.splice(1, 3, "Hi", "Bye"); //Hi&Bye get inserted as 1 is a starting index
// FIXME: Here 3 is not a index but it is a count, so 3 elements from 1st index get replaced.
console.log(users);
