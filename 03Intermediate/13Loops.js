// for (let i = 0; i < 10; i++) console.log(i);

const myStates = [
  "Maharashtra",
  "Gujrat",
  "Tamil Nadu",
  2003,
  "Rajasthan",
  "Assam",
];

for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] !== "string") continue;
  console.log(myStates[i]);
}
