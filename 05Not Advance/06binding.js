const atharva = {
    firstName: "Atharva",
    lastName: "Mahamuni",
    role: "Admin",
    courseCount: 3,
    getInfo: function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    }
}

// Everything in JS is a object.
// We ran this code on browser and when we dig dipper there are the proto objects.
// There you will see the bind function in getInfo method prototype


const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4
};

// atharva.getInfo(); // This will run fine

// dj.getInfo(); // This will not run becuase funtion is never writtern for this.

//FIXME:
// Now there is so much explination for bind 
// It is all about memory management and playing with references.
// In the object atharva all this inside getInfo function are the references of the atharva object so when we write this.anything it will print that.

// Now the next thing in dj object getInfo method doesn't work because this method is not written for it.

// With bind function our goal is to point the above this to the dj so that it can run the getInfo method and to do that we write the following line.
atharva.getInfo.bind(dj); 


// Above code will bind dj with getInfo but not print run it for that we have 2 ways as follows:

// TODO: way 1:
// atharva.getInfo.bind(dj)(); 

// TODO: way 2:
// var djInfo = atharva.getInfo.bind(dj); 
// djInfo();

// There is similar fuction like bind known as call
// bind gives us reference back where as call directly calls the method.

atharva.getInfo.call(dj); 