console.log(this);

const details = {
    name: "Atharva",
    age: 21,
    thisprint: function () {
        this.name = "Someone else"
        this.age = 45;
        console.log(this);
    }
};

details.thisprint();

// details.name = "Someone else"
// details.age = 45;
// details.thisprint();
