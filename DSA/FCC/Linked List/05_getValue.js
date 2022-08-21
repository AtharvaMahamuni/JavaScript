class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');

a.next = b;
b.next = c;
c.next = d;


// TODO: Find the value of node at the given index of an list.

const getValue = (head, index) => {
    let current = head;
    let curIndex = 0;

    while(current !== null) {
        if(index === curIndex) return current.value;
        current = current.next;
        curIndex += 1;
    }

    return 'Out of bound';
}

// console.log(getValue(a, 1));
// console.log(getValue(a, 3));
// console.log(getValue(a, 6));


// TODO: The recursive approach

const getValueHelper = (head, index, curIndex) => {
    if(head === null) return 'Out of bound';

    if(index === curIndex) return head.value;

    return getValueHelper(head.next, index, curIndex+1);
}

const getValueRecursive = (head, index) => {
    let current = head;
    
    return getValueHelper(current, index, 0);
}

console.log(getValueRecursive(a, 3))
console.log(getValueRecursive(a, 2))
console.log(getValueRecursive(a, 4))