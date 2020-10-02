var user = {
  firstName: "Atharva",
  lastName: "Mahamuni",
  role: "admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },

  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
};

var courseList = true;

console.log(user.getCourseCount());
user.buyCourse("React js");
user.buyCourse("Angular");
console.log(user.getCourseCount());
