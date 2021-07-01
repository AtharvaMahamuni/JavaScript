var User = {
    name: "",
    getUserName: function(){
        console.log(`User name is: ${this.name}`);
    },
}

// It will give an empty object on node engine
// In browser it will give the proto object;
var atharva = Object.create(User);
console.log(atharva);

atharva.name = "Atharva";
atharva.getUserName();



// By using create method in Object. Read more on MDN docs.
var sam = Object.create(User, {
    name: {
        value: "Sammy"
    },
    courseCount: { value: 3}, 
});

sam.getUserName();