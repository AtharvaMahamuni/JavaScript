

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

    static signup() { // This is like private and we can't access this in the child class
        return "sign up here";
    }
}


class SubAdmin extends User {

    constructor(name, email){
        super(name, email);
    }

    getAdminInfo(){
        return "I am subadmin";
    }

    login() { // overriding
        return "Login for sub admin";
    }
}

module.exports = User;


const tom = new SubAdmin('tom', 'tom@my.dev');

console.log(tom.getAdminInfo());
console.log(tom.getInfo());  

console.log(tom.login());
// console.log(tom.signup()); // can't be accessed from parent class.