var name = "Atharva";
console.log("Say name line no.2: ", name);

sayName();

function sayName() {
  var name = "Mr. A";
  console.log("Say name line no. 6: ", name);

  sayNameIn();

  function sayNameIn() {
    var name = "Mr. AM";
    console.log("say Name line no. 13", name);
  }
}
