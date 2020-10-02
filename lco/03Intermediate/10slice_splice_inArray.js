var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

//console.log(users.slice(1,3));
users.splice(1, 3, "Hi", "Bye"); //Hi&Bye get inserted instead of 1,2&3
console.log(users);
