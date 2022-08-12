// TODO: Target here is to remove the duplicates which are near to each other in string.
// For eg. myyleeggg -> myleg


let string1 = 'myyleeggg';
let string2 = 'atthaarvva';
let string3 = 'IamStrrrringgg333';

function nearByDuplicates(string) {
    if(string.length == 1)
        return string;

    if(string[0] != string[1])
        return string[0] + nearByDuplicates(string.slice(1));
    
    if(string[0] == string[1])
        return nearByDuplicates(string.slice(1));
}

console.log(nearByDuplicates(string1))
console.log(nearByDuplicates(string2))
console.log(nearByDuplicates(string3))