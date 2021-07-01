const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")


const center = document.querySelector(".center")

// This line will help you to grab the color which is rgb(228, 66, 54) in this case.
// console.log(window.getComputedStyle(red).backgroundColor);


const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// calling the function to get color
console.log(getBGColor(orange));

// This way we can grab various things from the UI.


// What is Event?
// -> https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events




// Here I am writing a code which will show the orange circle at the center when I hover the mouse over the orange box.
var orangeElementColor = getBGColor(orange);

// Event listener function
orange.addEventListener('mouseenter', ()=>{
    center.style.background = orangeElementColor;
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