
// Functional approcah to define the object.

var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};

// When there is new keyword object get created and memory get allocated which is pointed by the object name. So it invokes the consturctor. 
var atharva = new User("Atharva", 2);
console.log(atharva);

var sam = new User("Sam", 1);
console.log(sam);