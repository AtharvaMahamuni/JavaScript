const uno = () => {
    return "I am One";
}

// const dos = () => {
//     setTimeout(() => {
//         return "I am Two";
//     }, 3000);
// }


const dos = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve("I am Two");
            // reject("I am Two"); // It will raise the error
        }, 3000);
    })
};

const tris = () => {
    return "I am Three";
}

const callMe = async() => { // async to make it async
    let valOne = uno()
    console.log(valOne);

    let valTwo = await dos(); // await to handle this function
    console.log(valTwo);

    let valThree = tris();
    console.log(valThree);
}

callMe();

// TODO: Promise docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise