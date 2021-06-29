//We want to assign role as per the user who log in
//admin - He have access of everything
//subadmin - He can create and delete the cousrses
//testPrep - He can create and delete the tests
//student - He can consume the content
//trialUser - Just come to explore

var role = "testPrep";

switch (role) {
  case "admin":
    console.log("You have all access.");
    break;

  case "subAdmin":
    console.log("You can create and delete courses");
    break;

  case "testPrep":
    console.log("You can create and delete tests");
    break;
    
  case "student":
    console.log("You can consume the content");
    break;

  default:
    console.log("You are just trial user.");
    break;
}
