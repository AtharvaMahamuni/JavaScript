var user = {
  firstName: "Atharva",
  lastName: "Mahamuni",
  role: "admin",
  loginCount: 32,
  facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user);

user.loginCount = 44;

console.log(user);
console.table(user);
