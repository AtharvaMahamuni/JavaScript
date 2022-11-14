let array1 = [1, 3, 5, 7, 9, 10];

// Binary search takes O(log(n)) time complexity and every time the array gets half in length while doing the serach of an element.

// Prerequisite for the binary search is the array needs to be in sorted order. Here it should be in ascending order.


// TODO: iterative search
function iterativeBinarySearch(array, key) {
    let low = 0;
    let high = array.length-1;

    while(low <= high) {
        let mid = low + Math.floor((high - low)/2);
        if(array[mid] == key)
            return mid;
        else if(array[mid] < key) 
            low = mid + 1;
        else 
            high = mid - 1;
    }
    return false;
}

console.log(iterativeBinarySearch(array1, 5));

// -----

// TODO: recursive search
function recursiveBinarySearch(array, key, low, high) {
    if(low > high)
        return false;

    let mid = low + Math.floor((high - low)/2);

    if(array[mid] == key)
        return mid;
    else if(key > array[mid])
        return recursiveBinarySearch(array, key, mid+1, high);
    else
        return recursiveBinarySearch(array, key, low, mid-1);
}

console.log(recursiveBinarySearch(array1, 9, 0, array1.length-1));