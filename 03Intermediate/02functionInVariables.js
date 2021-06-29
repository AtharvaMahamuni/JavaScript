//Assign the roles to user
//admin: who has all access
//sub-admin: who has access to add and delete course
//testPrep: who has access to add and delete tests
//user: who can access the courses
//trialUser: who has access to explore the website

//input: getUserRole(name, role)


// function getUserRole(name, role){
var getUserRole = function(name, role){ //This is similar as above works in same way

  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
      break; // This break will not work due to return
    case "subAdmin":
      return `${name} is subAdmin with access to create & delete the courses`;
    case "testPrep":
      return `${name} is testPrep with access to create & delete the tests`
    case "user":
      return `${name} is user to consume the content`
  
    default:
      return `${name} is a trial user`
      break;
  }

}

console.log(getUserRole("Atharva", "subAdmin"))

getRole = getUserRole("sammy", "user")
console.log(getRole)

getRole = getUserRole("sammy")
console.log(getRole)