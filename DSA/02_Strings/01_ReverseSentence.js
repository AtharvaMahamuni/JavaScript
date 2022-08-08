// TODO: Here we have to reverse the sentence and not reverse the string.

let string1 = 'Hello my dear world';
let string2 = 'It is nice sentence';
let string3 = 'Hey';

function reverseSentence(string) {
    let splitString = string.split(' ');
    let reverseString = splitString.reverse();
    string = reverseString.join(' ');
    console.log(string);
}

reverseSentence(string1);
reverseSentence(string2);
reverseSentence(string3);