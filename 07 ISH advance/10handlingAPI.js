const fetch = require('node-fetch');

fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log("Data is : ", data); // It will give entire object
        var joke = data.value; // We are taking the joke from the object
        console.log("JOKE: ", joke); 
    })
    .catch()