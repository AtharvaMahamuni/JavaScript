//TODO: This def:

//For all regular function calls, this points to window object in browser or global empty object '{}' in case of node.

console.log(this);

var user = {
  firstName: "Atharva",
  lastName: "Mahamuni",
  noOfCourses: 5,
  courseCount: function () {
    console.log("LINE 7", this);

    function sayHello(){
      console.log("Hello");
      console.log("Line 16 : ", this);
    }

    sayHello();
  },
};

user.courseCount();

// FIXME: this on the line no.12 points to the object it is in.
// FIXME: this on the line no.16 contains the global context becuase it is a object call not a rgular function call.