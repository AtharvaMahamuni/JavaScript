const names = ["FaceBook", "Instagram", "Twitter", "YouTube"];

// for (const i of names) {
//   console.log(i);
// }

const nameObject = {
  fb: "FaceBook",
  yt: "YouTube",
  tw: "Twitter",
  ig: "Instagram",
};

for (const i in nameObject) {
  //   console.log(i);
  console.log(nameObject[i]);
}
