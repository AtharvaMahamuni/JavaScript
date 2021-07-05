
// Functional approcah to define the object.
var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};


// TODO: Prototype this will help to wirte the method for above class outside the class.
// This method is like inside the User
User.prototype.getFirstName = function(){
    console.log(`Your first Name is ${this.firstName}`);
}

// When there is new keyword object get created and memory get allocated which is pointed by the object name. So it invokes the consturctor. 
// new keyword also helps to point the this keyword from window object to the User object
atharva = new User("Atharva", 2);
// console.log(atharva);

// console.log(atharva.firstName)
atharva.getFirstName() // It is a blunt call we don't know the property is exist or not but we can use hasOwnProperty() method to check that as given below

// console.log(atharva.courseCount);
atharva.getCourseCount();

var sam = new User("Sam", 1);
console.log(sam);


// This is more better way to call the method by checking whether we have the property or not.
// It will check whether the method or variable is present or not and then executes the function.
if (sam.hasOwnProperty("firstName")) { // Here we are passing the name of variable in ""
    sam.getFirstName();
}