
const User = require("./06classes.js");


const atharva = new User("Atharva", "atharvamahamuni54@gmail.com");

console.log(atharva.getInfo());


atharva.enrollCourse("React Bootcamp");
atharva.enrollCourse("Angular Bootcamp");

console.log(atharva.getCourseList());


let courses = atharva.getCourseList();

courses.forEach((c) => console.log(c));
