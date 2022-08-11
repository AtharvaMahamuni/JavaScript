// TODO: The task here is to create the all possible subsets of given array/string using recurssion.

let array1 = [1, 2, 3]
let array2 = ['a', 'b', 'c', 'd', 'e']
let array3 = 'xyz'


function subset(array, index = 0, holder = [], answer = []) {
    if(index === array.length) {
        answer.push(holder)
        return
    }    

    subset(array, index+1, [...holder, array[index]], answer)
    subset(array, index+1, [...holder], answer)

    return answer
}

console.log(subset(array1))
console.log(subset(array2))
console.log(subset(array3))