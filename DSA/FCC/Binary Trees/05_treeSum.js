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


// This problem can also be solved with both DFS and BFS approraches. We will do the same as done in the previous tree includes question.


// TODO: Find the sum of elements in tree with BFS.


const treeSum = (root) => {
    if(root === null) return 0;

    let result = 0;
    let queue = [root];

    while(queue.length > 0) {
        let current = queue.shift();
        result += current.val;

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }

    return result;
}

// console.log(treeSum(a));


// TODO: With the recursive approach of DFS

const treeSumRecursive = (root, result = 0) => {
    if(root === null) return 0;

    let leftChild = treeSumRecursive(root.left, result);
    let rightChild = treeSumRecursive(root.right, result);

    return (root.val+leftChild+rightChild);
}

console.log(treeSumRecursive(a))