class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let a = new Node(2);
let b = new Node(1);
let c = new Node(3);
let d = new Node(1);
let e = new Node(4);
let f = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


// Binary Tree after above execution
    //         a (2)
    //       /  \
    //    b(1)   c(3)
    //    /  \      \
    // d(1)  e(4)   f(5)
//o/p -> 10 (2+3+5)

// The task here is to find the path which has the max sum of its elements.
// This kind of problems are easier to solve with the recursive approaches.


const maxPathSum = (root) => {
    if(root === null) return -Infinity;
    if(root.left === null && root.right === null) return root.val;

    const leftChild = maxPathSum(root.left);
    const rightChild = maxPathSum(root.right);

    return root.val + (Math.max(leftChild, rightChild));
}

console.log(maxPathSum(a));