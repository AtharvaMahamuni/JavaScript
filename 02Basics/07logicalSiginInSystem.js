// To login in app you need to do following things:
//TODO:
//Check if user logged in with google or facebool or emial
//If any one of this is true allow him to access the site

var facebookLogin = false;
var googleLogin = false;
var emailLogin = false;

// if (facebookLogin) {
//   console.log("Logged in");
// }
// if (googleLogin) {
//   console.log("Logged in");
// }
// if (emailLogin) {
//   console.log("Logged in");
// }

if (facebookLogin || googleLogin || emailLogin) {
  console.log("Logged in");
} else {
  console.log("Logged in Fail.");
}
