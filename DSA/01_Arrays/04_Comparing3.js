//TODO: There are 3 arrays from which we have to find the common element from all this three.
// All 3 array needs to be sorted. In ascending order for the following code.

// set 1
let array11 = [1, 3, 5, 7, 10]
let array12 = [6, 7, 8, 9]
let array13 = [1, 2, 3, 4, 5, 6, 7]

// set 2
let array21 = [11, 22, 33, 44, 55, 66]
let array22 = [1, 3, 5, 7, 9, 11]
let array23 = [2, 6, 8, 11, 14, 16, 18]

// set 3
let array31 = [1, 2, 3]
let array32 = [4, 5, 6]
let array33 = [2, 4, 8]

function findCommonInThree(array1, array2, array3) {
    // 3 comparisons
    let ptr1 = 0;
    let ptr2 = 0;
    let ptr3 = 0;

    while(ptr1<array1.length && ptr2<array2.length && ptr3<array3.length)
    {
        if ((array1[ptr1] == array2[ptr2]) && (array1[ptr1] == array3[ptr3]))
            return array1[ptr1];
        else if((array1[ptr1]<array2[ptr2]) && (array1[ptr1]<array3[ptr3]))
            ptr1 += 1;
        else if((array2[ptr2]<array1[ptr1]) && (array2[ptr2]<array3[ptr3]))
            ptr2 += 1;
        else
            ptr3 += 1;
    }

    return false;
}

console.log(findCommonInThree(array11, array12, array13));
console.log(findCommonInThree(array21, array22, array23));
console.log(findCommonInThree(array31, array32, array33));



