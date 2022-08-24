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

// We can solve this problem with both breadth first and depth first traversal.


// TODO: Find if the targeted value is included in the tree or not with breadth first traversal approach.


const treeIncludesBF = (root, target) => {
    if(root === null) return false;

    let result = false;
    let queue = [root];

    while(queue.length > 0) {
        let current = queue.shift();
        if(current.val === target) return true;

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }

    return result;
}

// console.log(treeIncludesBF(a, 'D'));
// console.log(treeIncludesBF(a, 'F'));
// console.log(treeIncludesBF(a, 'Z'));


// TODO: The depth first version - This can be implemented with both iterative and recursive here let's do it recursively.


const treeIncludesDF = (root, target) => {
    if(root === null) return false;
    if(root.val === target) return true;

    let leftValues = (treeIncludesBF(root.left, target));
    let rightValues = (treeIncludesBF(root.right, target));

    return (leftValues || rightValues);
}

console.log(treeIncludesDF(a, 'D'));
console.log(treeIncludesDF(a, 'F'));
console.log(treeIncludesDF(a, 'Z'));

