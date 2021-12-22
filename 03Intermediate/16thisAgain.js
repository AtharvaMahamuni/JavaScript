//TODO: 
// Remember this for line no. 16
//For all regular function calls, this points to window object in browser or global empty object '{}' in case of node.

console.log(this);

var user = {
  firstName: "Atharva",
  lastName: "Mahamuni",
  noOfCourses: 5,
  courseCount: function () {
    console.log("LINE 7", this); // this contains or points to the user object.

    function sayHello(){ // regular function 
      console.log("Hello");
      console.log("Line 16 : ", this); // this here will not contain the object but it contain the window object.
    }

    sayHello(); // not a regular function call but the object function call
  },
};

user.courseCount();

// FIXME: this on the line no.12 points to the object it is in, i.e. user object.
// FIXME: this on the line no.16 contains the global context becuase it is a object call not a regular function call.