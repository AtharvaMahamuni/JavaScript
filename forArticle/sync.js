
//1
// const fs = require("fs");

// try {
//   // Storing the data form file.txt file in data
//   const data = fs.readFileSync("./file.txt", "utf8");
//   console.log(data); // To show the data
// } catch (error) {
//   console.error(error); // if error is catched
// }

// 2
// const element = document.getElementById("elementID"); // gets the element
// element.classList.add("some class"); // adds a class to element
// element.click(); // clicks on element
// console.log(element); // logs the element to console



// 4
// const http = require("http")

// http
//   .createServer(function(req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("Hello World!");
//     res.end();
//   })
//   .listen(8080);


const http = require("http")

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    console.log("Server is running...")
    res.write("Hello World!");
    res.end();
  })
  .listen(8080);