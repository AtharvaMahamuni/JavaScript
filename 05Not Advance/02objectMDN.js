var User = {
    name: "",
    getUserName: function(){
        console.log(`User name is: ${this.name}`);
    },
}

// It will give an empty object on node engine
// In browser it will give the proto object which contains methods used with the an object;
var atharva = Object.create(User); // this is little bit different than the functional one where we are using new keyword
console.log(atharva);

atharva.name = "Atharva";
atharva.getUserName(); // Atharva



// By using create method in Object. Read more on MDN docs.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// This is the way when we want to pass the values for constructor
var sam = Object.create(User, {
    name: { value: "Sammy" },  // this is the way to pass the value it is little bit weird
    courseCount: { value: 3}, 
});

sam.getUserName();