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

// A -> B -> C -> D -> null


// TODO: Return the linked list as an array

const returnArray = (head) => {
    let current = head;

    let list = [];

    while(current !== null) {
        list = [...list, current.value];
        current = current.next;
    }

    return list;
}

// console.log(returnArray(a));



// TODO: Recursive approach to return the array of linked list

const fillList = (head, list) => {
    if(head === null) return;

    list.push(head.value);
    fillList(head.next, list)
}

const returnArrayRecursive = (head) => {
    let list = [];
    let current = head;

    // fillList function
    fillList(current, list);

    return list;
}

console.log(returnArrayRecursive(a));