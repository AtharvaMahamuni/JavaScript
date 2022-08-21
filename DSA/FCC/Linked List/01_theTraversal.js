class Node {
    constructor(val) {
         this.value = val;
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


// TODO: Print the linked list

const printLinkedList = (head) => {
    let current = head;

    while(current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

printLinkedList(a);