

class User {
    // name = ""; // We can declare this as well but not preffered that much
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    #courseList = [];  //# make this variable private now we can't access it without getter and setter.

    getInfo(){ 
        return { name: this.name, email: this.email };
    }

    enrollCourse(name){ // setter method
        this.#courseList.push(name);
    }

    getCourseList(){ // getter method
        return this.#courseList;
    }

    login(){
        return "You are logged in";
    }
}

module.exports = User;

