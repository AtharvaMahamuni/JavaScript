let array1 = [5, 6, 8, 10, 1, 2, 3, 4]
let array2 = [22, 11, 14, 15, 16, 18, 19]
let array3 = [11, 22, 33, 44, 55, 66, 77, 10]
let array4 = [7, 8, 1, 2, 3]

// Rotation point is the point where the sorted array is rotated from the half.
// Array is sorted but from somewhere in the middle there is an break in the sequence and new sorted array is connected in from. That exact point or the index is the rotation point.


function RotationPoint(array) {
    let low = 0;
    let high = array.length - 1;

    while(low <= high) {
        let mid = low + Math.floor((high - low)/2);

        if(array[mid] < array[mid-1])
            return mid;
        else if(array[mid+1] < array[mid])
            return mid+1;
        else if(array[mid] > array[high])
            low = mid+1;
        else if(array[mid] < array[low])
            high = mid-1;
    }

    return false;
}

console.log(RotationPoint(array1))
console.log(RotationPoint(array2))
console.log(RotationPoint(array3))
console.log(RotationPoint(array4))