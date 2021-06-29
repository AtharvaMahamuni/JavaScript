var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

// counter.innerHTML = 1001;
let count = 0;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerHTML = count;
  }
}, 1);

setTimeout(() => {
  followers.innerHTML = "Followers on Instagram!!!";
}, 4000);
