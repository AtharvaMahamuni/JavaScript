// TODO:
// SetTiemout(function, milliseconds)
//It will stop the function till the time given.

// TODO:
//SetInterval(function, milliseconds)
// It is like the duration for how much time function will run
// It will help to change the number for particular time or duration.


// FIXME: querySelector : The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

// var number = document.querySelector(".counter")
// This way we can grab the entire .counter into the number
// The value in number is now : <h1 class="counter">1000</h1>


// FIXME: innerText : The innerText property of the HTMLElement interface represents the "rendered" text content of a node and its descendants. As a getter, it approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied it to the clipboard.

// Now when I use the 
// number.innerText
// Output is : "1000"

// And now I can change the inner value easily
// number.innerText = "Atharva"
// Output is : "Atharva"




// Here we are selecting the entire class i.e. counter class and initializing it in the counter variable.
var counter = document.querySelector(".counter")

let count = 0;

setInterval(()=>{
  if (count < 1000) {
    count+= 5;
    counter.innerText = count; // this will help to assign the count value to the textnode.
  }
}, 1)


var followers = document.querySelector(".followers")

setTimeout(()=>{
  followers.innerText = "Followers on Bird App!!!"
}, 800)