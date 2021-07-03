// Grammar and types in JS : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types

// We are going to genearte html elements directly from the JavaScript.

// It is good idea to keep arrays in plural
const courses = [
    {
        name: "Complete ReactJS course",
        price: "2.3"
    },
    {
        name: "Complete Angular course",
        price: "3.3"
    },
    {
        name: "Complete Android course",
        price: "2.0"
    },
    {
        name: "Complete C++ course",
        price: "1.0"
    },
    {
        name: "Complete Django course",
        price: "1.5"
    }
];

//In below function generateLIST 
// We have the ul which is element from HTML
// in which we want to add multiple li programmatically
// Every time when forEach loop executes it will create the following HTML element:
// all the textNode values are given programmatically from the above array of elements.
/*
    <li class="list-group-item">
        Javascript course
        <span class="float-right">$2.1</span>
    </li> 
*/


function genearteLIST(){
    const ul = document.querySelector(".list-group");

    ul.innerHTML = ""; // To clear the old values after sorting

    courses.forEach(course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);

        ul.appendChild(li);
    });
}

// genearteLIST(); // to directly load 


// To load the content at the time of page loading we follow the following method

window.addEventListener("load", genearteLIST());


// to get access of button:
const button = document.querySelector(".sort-btn");

// to create event with button to sort the items
button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price); // sorting my list according to prices
    genearteLIST();
});


// blue button to sort items in decending order
const  buttonDesc = document.querySelector(".sort-btn-desc");

buttonDesc.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    genearteLIST();
});
