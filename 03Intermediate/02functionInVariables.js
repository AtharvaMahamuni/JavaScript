//Assign the roles to user
//admin: who has all access
//sub-admin: who has access to add and delete course
//testPrep: who has access to add and delete tests
//user: who can access the courses
//trialUser: who has access to explore the website

//input: getUserRole(name, role)

function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} has all the access`;
      break; //this break is not useful due to return
    case "subUser":
      return `${name} has access to add and delete the courses`;
    case "testPrep":
      return `${name} has access to add and delete the tests`;
    case "user":
      return `${name} has access to consume content`;
    default:
      return `${name} he is a trial user`;
      break;
  }
}

var userRole = getUserRole("Atharva", "admin");
console.log(userRole);

console.log(getUserRole("sammy", "testPrep"));
