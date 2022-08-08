// we want to make user purchase from website
// 3 things to verify
// user is logged in or not
// user is verified email or not
// card info is valid or not

var loggedIn = true;
var emailVerified = true;
var cardValid = true;

// if (loggedIn) {
//   console.log("You are successfully logged in.");
//   if (emailVerified) {
//     console.log("Your email is verified");
//     if (cardValid) {
//       console.log("Your card id valid, now you can make the purchase");
//     }
//   }
// }

//Using &&
if (loggedIn && emailVerified && cardValid) {
  console.log("Everything is verified, now you can make the purchase.");
} else {
  console.log("Sorry, you can't make the purchase.");
}
