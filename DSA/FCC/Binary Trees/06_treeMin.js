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
    //         a
    //       /  \
    //     b      c
    //    /  \     \
    //   d   e      f


// The problem here is to find the minimum value inside a tree.
// Basically it is extension of previous problems and can be solved with both iteratively and recursively.


// TODO: Tree min iterative - BFS

const treeMin = (root) => {
    // if(root === null) return false;

    let result = root.val;
    let queue = [ root ];

    while(queue.length > 0) {
        let current = queue.shift();
        
        if(current.val < result) {
            result = current.val;
        }   

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }

    return result;
}

// console.log(treeMin(a));


// TODO: Tree minimum recursive

const treeMinRecursive = (root) => {
    if(root === null) return Infinity;

    const minLeftChild = treeMinRecursive(root.left);
    const minRightChild = treeMinRecursive(root.right);

    // if(minLeftChild < minRightChild && minLeftChild < root.val)
    //     return minLeftChild;
    
    // else if(minRightChild < minLeftChild && minLeftChild < root.val)
    //     return minRightChild;
    
    // else return root.val;

    return Math.min(minLeftChild, minRightChild, root.val);
}

console.log(treeMinRecursive(a));