// TODO: Here we have to remove the duplicate letters from the string.
// We can make use of set in JS to perform search operations in O(n) time complexity.

let string1 = 'abcadbacdabk';
let string2 = 'dgjlasjdluoeoewuvjljs';
let string3 = 'aaaaaaaag';


function removeDuplicate(string) {

    // spliting string becasue it is immutable
    string = string.split('');

    // initializing set to have the unique elements
    let myDiary = new Set();

    let read = 0;
    let write = 0;

    for(let i = 0; i<string.length; i++) {
        if(!myDiary.has(string[read])) {
            myDiary.add(string[read]);
            string[write] = string[read]
            write += 1
        }
        read += 1
    }

    // joining string
    string = string.join('')
    return string.slice(0, write)
}

console.log(removeDuplicate(string1));
console.log(removeDuplicate(string2));
console.log(removeDuplicate(string3));