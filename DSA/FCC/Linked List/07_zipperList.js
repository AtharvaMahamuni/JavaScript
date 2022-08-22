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

// A    ->  B   ->  C   ->  D   ->  null
//head1
const x = new Node('X');
const y = new Node('Y');

x.next = y;
// X    ->      Y    ->  null
//head2

let head1 = a;
let head2 = x;


const printLinkedList = (head) => {
    let current = head;

    while(current !== null) {
        console.log(current.value);
        current = current.next;
    }
}


// TODO: zipper list

const zipperList = (head1, head2) => {

    let count = 0;
    let tail = null;

    while(head1 !== null && head2 !== null) {
       if(count%2 === 0) { //head1
            let temp = head1.next;
            tail = head1;
            tail.next = head2;
            head1 = temp;
        }
       if(count%2 === 1) { //head2
            let temp = head2.next;
            tail = head2;
            tail.next = head1;
            head2 = temp;
        }
        count += 1;
    }
}





printLinkedList(a);
printLinkedList(x);
console.log('----------------');
zipperList(a, x);
printLinkedList(a);