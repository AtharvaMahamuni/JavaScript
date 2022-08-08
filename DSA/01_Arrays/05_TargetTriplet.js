// TODO: There is an array having elements in sorted order(ascending for the following code).
// We need to find the 3 elements which matches with the given sum.

let array1 = [1, 2, 4, 5, 6, 7, 9, 10, 11, 12]
let array2 = [5, 10, 15, 20, 25, 30, 35, 40, 50, 55, 60, 65, 70, 75]
let array3 = [0, 2, 6, 8, 10, 12, 14, 16, 18, 20]

function targetTriplet(array, sum) {

    let ans = []

    for(let i = 0; i<array.length; i++){
        let left = i+1;
        let right = array.length-1;

        while(left < right) {
            if(array[i]+array[left]+array[right] == sum) {
                ans.push([array[i], array[left], array[right]]);
                left += 1;
                right -= 1;
            }            
            else if(array[i]+array[left]+array[right] < sum)
                left += 1;
            
            else
                right -= 1;            
        }
    }
    return ans;
}

console.log(targetTriplet(array1, 15));
console.log(targetTriplet(array2, 100));
console.log(targetTriplet(array3, 20));