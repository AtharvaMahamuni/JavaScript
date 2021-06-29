const names = ["FaceBook", "Instagram", "Twitter", "YouTube"];

// FIXME: for-of loop
for (const i of names) {
  console.log(i);
}

const nameObject = {
  fb: "FaceBook",
  yt: "YouTube",
  tw: "Twitter",
  ig: "Instagram",
};

for (const i in nameObject) {
  // console.log(i + " : " + nameObject[i]);
  // console.log(nameObject[i]);

  console.log(`Key is: ${i} and the value is: ${nameObject[i]}`);
}
