// TODO: The task here is to identify whether the given string is palindorme or not.

let string1 = 'abba';
let string2 = 'bcdadcb';
let string3 = 'aabc';

function isPalindrome(string) {
    let revString = string.split('');

    let tempVar;
    let start = 0;
    let end = string.length - 1;

    while(start <= end) {
        tempVar = revString[start];
        revString[start] = revString[end];
        revString[end] = tempVar;

        start += 1;
        end -= 1;
    }
    
    revString = revString.join('');

    if(revString === string)
        return true;
    return false;
}

console.log(isPalindrome(string1));
console.log(isPalindrome(string2));
console.log(isPalindrome(string3));