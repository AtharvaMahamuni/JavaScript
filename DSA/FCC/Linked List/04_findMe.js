class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;


// TODO: find the given key from the linked list. Perform the linear search

let findElement = ( head, key, index = 0) => {
    let current = head;

    while(current !== null) {
        if(current.value === key) {
            return index;
        }
        index += 1;
        current = current.next;
    }

    return -1;
}

// console.log(findElement(a, 'C'))


// TODO: Fine the element with the recursive approach

const findMeRecursive = (head, key, index = 0) => {
    if(head === null) return -1;
    if(head.value === key) return index;

    return findMeRecursive(head.next, key, index+1);
}

console.log(findMeRecursive(a, 'D'))
console.log(findMeRecursive(a, 'A'))
console.log(findMeRecursive(a, 'E'))