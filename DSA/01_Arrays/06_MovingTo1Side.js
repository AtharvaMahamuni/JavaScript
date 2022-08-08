// TODO: Here we have the number 0 multiple times in an array.
// Task here is to move all the 0's to the left or right side of an array by maintaining the sequence of other non-zero elements.
// The elements in an array are in any random order.

let array1 = [1, 0, 5, 7, 9, 0, 4, 5, 0]
let array2 = [0, 1, 2, 3, 4, 0]
let array3 = [1, 2, 3, 4, 5, 6]

function movingToOneSide(array) {
    let read = array.length - 1;
    let write = array.length - 1;

    while(read >= 0){
        if(array[read] != 0) {
            array[write] = array[read];
            write -= 1;
        }
        read -= 1;
    }

    while(write >= 0) {
        array[write] = 0
        write -= 1;
    }   
    
    return array;
}

console.log(movingToOneSide(array1))
console.log(movingToOneSide(array2))
console.log(movingToOneSide(array3))