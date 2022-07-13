// const fs = require("fs");

// // Making asynchronous call to read the file
// fs.readFile("./file.txt", "utf8", (error, data) => {
//   if (error) return console.error(error); // if error occured
//   console.log(data); // showing the data
// });


// fetch("https://api.chucknorris.io/jokes/random")
//   .then(response => response.json()) // JSON format conversion of response (Asynchronous)
//   .then(json => console.log(json)) // Logging the data on console
//   .catch(error => console.error(error)); // If error is catched


const { MongoClient } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017", (error, client) => {
  // this function is a callback
  if (error) return console.error(error); // catching error
  const db = client.db("testDB"); // using data
  console.log('Connected to database...')
  client.close(); // using data
});