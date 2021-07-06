// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

const uno = () => {
    console.log("I am one");
}

const dos = () => {

    // Resource don't get allocated for this but it get loadded last on the screen
    setTimeout(()=>{
        console.log("Woooohooo");
    }, 3000);

    // This will run first 
    console.log("I am two");
}

const tris = () => {
    console.log("I am three");
}

uno();
dos();
tris();


// FIXME: We don't want to load the other things if this are dependent on other things.
// So we use async and sync from JavaScript.