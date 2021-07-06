var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "Dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);


for (let key of myMap.keys()) {
    console.log(`Key is ${key}`);
}


for (let value of myMap.values()) {
    console.log(`Value is ${value}`);
}


for (let [key, value] of myMap) { // FIXME: forOf loop gives keys first and then values
    console.log(`Key is ${key} and the Value is ${value}`);
}

myMap.forEach((key) => console.log(`${key}`)); // It will print the values instead of keys. Keys are considered as the indexes here
myMap.forEach((value) => console.log(`${value}`)); // It will print the values
myMap.forEach((value, key) => console.log(`${value} have a key ${key}`)); // FIXME: forEach gives the value first and then keys