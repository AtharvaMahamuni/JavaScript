//TODO: This def:
//For all regular function calls, this points to regular object.

console.log(this);

var user = {
  firstName: "Atharva",
  lastName: "Mahamuni",
  noOfCourses: 5,
  courseCount: function () {
    console.log("Line 7", this);
  },
};

user.courseCount();
