class Node {
    constructor(value) {
         this.value = value;
         this.next = null;
    }
}

const a = new Node(3);
const b = new Node(1);
const c = new Node(5);
const d = new Node(8);

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> null


// TODO: Find the cummulative sum of a linked list

const cummulativeSum = (head) => {
    let current = head;
    let sum = 0;

    while(current !== null) {
        sum += current.value;
        current = current.next;
    }

    return sum;
}

// console.log(cummulativeSum(a));


// TODO: Find the cumulative sum using the recursion

let sumHelper = (head, sum) => {
    if(head === null) return sum;

    return sumHelper(head.next, sum+head.value);
}

let cummulativeSumRecursive = (head) => {
    let current = head;
    let sum = 0;

    return sumHelper(current, sum);
}

console.log(cummulativeSumRecursive(a));