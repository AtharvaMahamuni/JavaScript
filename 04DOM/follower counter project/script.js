// SetTiemout(function, milliseconds)
//It will stop the function till the time given.


//SetInterval(function, milliseconds)
// It is like the duration for how much time function will run
// It will help to change the number for particular time or duration.

// var number = document.querySelector(".counter")
// This way we can grab the entire .counter into the number
// The value in number is now : <h1 class="counter">1000</h1>

// Now when I use the 
// number.innerText
// Output is : "1000"

// And now I can change the inner value easily
// number.innerText = "Atharva"
// Output is : "Atharva"


var counter = document.querySelector(".counter")

let count = 0;

setInterval(()=>{
  if (count < 1000) {
    count+= 5;
    counter.innerText = count;
  }
}, 1)


var followers = document.querySelector(".followers")

setTimeout(()=>{
  followers.innerText = "Followers on Bird App!!!"
}, 800)