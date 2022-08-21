// TODO: Find if an array is sorted or not 

const isSorted = (array, index = 0) => {

    if(index === array.length-1) return true;

    if(array[index] <= array[index+1])
        return isSorted(array, index+1);
    
    return false;
}

// TODO: Do the linear search and find the key element from an array

const linearSearch = (array, key, index = 0) => {
    if((index === array.length)) return -1;

    if(array[index] === key) return index;

    return linearSearch(array, key, index+1);
}

// console.log(linearSearch([3, 4, 61, 1, 6, 2, 7, 9], 3));

// TODO: Linear search find the indexes of all the occurances

const linearSearchAll = (array, key, index = 0, result = []) => {
    
    if(array.length === index) return result;

    if(array[index] === key)  result.push(index);

    return linearSearchAll(array, key, index+1, result)
}

// console.log(linearSearchAll([3, 4, 61, 3, 6, 2, 7, 9], 3));
// console.log(linearSearchAll([3, 4, 61, 3, 6, 3, 7, 3], 3));


// TODO: Second approach to solve the linear search problem.

function allLinearSearch(array, key, index = 0) {

    if(array.length === index) return [];

    let nextCall = allLinearSearch(array, key, index+1);

    if(array[index] === key)
        return [index, ...nextCall];
    
    return nextCall;
}

// console.log(allLinearSearch([3, 4, 61, 3, 6, 2, 7, 9], 3));
// console.log(allLinearSearch([3, 4, 61, 3, 6, 3, 7, 3], 3));


// TODO: Binary Search 

const binarySearchHelper = (array, key, low, high) => {

    if(high < low) return 'ELement not present';

    let mid = low + Math.floor((high - low) / 2);
    
    if(array[mid] === key)
        return `Element is at ${mid} index`;

    else if(array[mid] < key)
        return binarySearchHelper(array, key, mid+1, high);
    
    else
        return binarySearchHelper(array, key, low, mid-1);
}

const binarySearch = (array, key) => {
    return binarySearchHelper(array, key, 0, array.length - 1);
}

// console.log(binarySearch([1, 22, 33, 44, 55, 66, 77, 88, 999], 33));
// console.log(binarySearch([1, 22, 33, 44, 55, 66, 77, 88, 999], 999));
// console.log(binarySearch([1, 22, 33, 44, 55, 66, 77, 88, 999], 1));
// console.log(binarySearch([1, 22, 33, 44, 55, 66, 77, 88, 999], 11));


// TODO: Find the point of rotation with the binary search logic.

const rotationPointHelper = (array, low, high) => {
    if(high < low) return 'Array is not rotated';

    let mid = low + Math.floor((high - low)/2);

    if(array[mid] < array[mid-1]) return `Rotation point is at index ${mid}`;
    if(array[mid+1] < array[mid]) return `Rotation point is at index ${mid+1}`;

    if(array[mid] > array[high]) return rotationPointHelper(array, mid+1, high);
    if(array[mid] < array[low]) return rotationPointHelper(array, low, mid-1);
} 

const rotationPoint = (array) => {
    return rotationPointHelper(array, 0, array.length-1);
} 

// console.log(rotationPoint([ 77, 88, 999, 1, 22, 33, 44, 55, 56, 57]));
// console.log(rotationPoint([ 58, 66, 77, 88, 999, 1, 22, 33, 44, 55, 56, 57]));
// console.log(rotationPoint([999, 1, 22, 33, 44, 55, 56, 57]));
// console.log(rotationPoint([ 58, 66, 77, 88, 999, 1]));



// TODO: Binary search in rotated array

const binarySearchRotatedHelper = (array, key, low, high) =>{

    let mid = low + Math.floor((high-low)/2);

    // 4 Cases will occur
    if(array[mid] === key) return mid;

    if(array[low] < array[mid] && key < array[mid] && key > array[low])
        return binarySearchRotatedHelper(array, key, low, mid-1);

    if(array[mid] < array[high] && key > array[mid] && key < array[high])
        return binarySearchRotatedHelper(array, key, mid+1, high);

    if(array[high] < array[mid])
        return binarySearchRotatedHelper(array, key, mid+1, high);

    if(array[low] > array[mid])
        return binarySearchRotatedHelper(array, key, low, mid-1);

    return -1;
}

const binarySearchRotated = (array, key) => {
    return binarySearchRotatedHelper(array, key, 0, array.length-1);
}

console.log(binarySearchRotated([66, 77, 88, 999, 1, 22, 33, 44, 55], 33));
console.log(binarySearchRotated([ 1, 22, 33, 44, 55], 33));
console.log(binarySearchRotated([22, 33, 44, 55, 66, 77, 88, 999,], 33));
console.log(binarySearchRotated([22, 33, 44, 55, 66, 77, 88, 999, 1], 999));
console.log(binarySearchRotated([999, 1, 22, 33, 44, 55, 66, 77, 88], 1));
console.log(binarySearchRotated([66, 77, 88, 999, 1, 22, 33, 44, 55], 11));