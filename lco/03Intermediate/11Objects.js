var user = {
  firstName: "Atharva",
  lastName: "Mahamuni",
  role: "admin",
  loginCount: 32,
  facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]); //it neets to be in string format.

console.log(user);

// updating login count
user.loginCount = 44;
console.log(user);

// Data in table format
console.table(user);
