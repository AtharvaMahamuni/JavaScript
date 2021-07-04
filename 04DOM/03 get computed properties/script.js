// TODO: So here we have a chllange to grab a element from the squres on screen when we click or hover a mouse over it.

const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")


const center = document.querySelector(".center")


//FIXME: window.getComputedStyle() : The Window.getComputedStyle() method returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any basic computation those values may contain. Individual CSS property values are accessed through APIs provided by the object, or by indexing with CSS property names.

// This line will help you to grab the color which is rgb(228, 66, 54) in this case.
// console.log(window.getComputedStyle(red).backgroundColor);


const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor; // here we are using .background to grab it from the CSS properties.
}

// calling the function to get color
console.log(getBGColor(orange));

// This way we can grab various things from the UI.


// What is Event?
// -> https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
// Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired.

// addEventListner() : The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is delivered to the target. Common targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).


// Here I am writing a code which will show the orange circle at the center when I hover the mouse over the orange box.
var orangeElementColor = getBGColor(orange);

// Event listener function
orange.addEventListener('mouseenter', ()=>{
    center.style.background = orangeElementColor; // Here we are passing the grabbed color to the background of center.
});


// With the help of this code I will get see the pink color when I click on the pink box.
var ElementColor = getBGColor(pink);

// Event listener function
pink.addEventListener('click', ()=>{
    center.style.background = ElementColor;
});


const magicColorChanger = (element, color)=>{
    return element.addEventListener("mouseenter", ()=>{
        center.style.background = color;
    });
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(pink, getBGColor(pink));