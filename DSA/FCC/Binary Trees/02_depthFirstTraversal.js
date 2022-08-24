class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');
let e = new Node('E');
let f = new Node('F');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


// Binary Tree after above execution
    //         a
    //       /  \
    //     b      c
    //    /  \     \
    //   d   e      f

// TODO: Depth first traversal
// o/p -> a, b, d, e, c, f

// In the depth first traversal we use the stack data structure to keep the record of previous node and go deep into the tree. Depth-first traversal gives the o/p as above.

// Time Complexity - O(n) //if adding and removing from stack takes constant time.
// Space complexity - O(n)
// where, n is # of nodes

// So here we get the linear time and space solution.


// TODO: Depth-first Traversal Iterative approach

const depthFirstTraversal = (root) => {
    if(root === null) return [];

    const result = [];
    const stack = [root];

    while(stack.length > 0) {
        let current = stack.pop();
        result.push(current.val);

        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }

    return result;
}

// console.log(depthFirstTraversal(a));


// TODO: Depth-first Traversal recursive approach

const depthFirstRecursive = (root) => {
    if(root === null) return [];

    let leftValues = depthFirstRecursive(root.left);
    let rightValues = depthFirstRecursive(root.right);

    return [root.val, ...leftValues, ...rightValues]
}

// console.log(depthFirstRecursive(a));