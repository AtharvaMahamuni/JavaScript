// Whatever is the datatype on the left-hand side should be same on right-hand side and we can do the destructuring

//TODO: Array destructuring
// const user = ["atharva", 3, "admin"];

// // var role = user[2];
// // var name = user[0];

// var [name, courseCount, role] = user; // dsturcturing the data

// console.log(role);

// TODO: Object destructuring
const myUser = {
    name: "Atharva",
    courseCount: 5,
    role: "admin"
};

console.log(myUser.role);

var {name, myCourseCount, role} = myUser;

console.log(role);
// console.log(myCoureCount); //This will give error becuase the name should be matched in the case of objects
