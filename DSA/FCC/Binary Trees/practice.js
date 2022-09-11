class Node {
    constructor(val) {
        this.val = val;
        this.leftChild = null;
        this.rightChild = null;
    }
}


let a = new Node(10); 
let b = new Node(50); 
let c = new Node(30); 
let d = new Node(40); 
let e = new Node(15); 
let f = new Node(80); 
let g = new Node(25);


a.leftChild = b;
a.rightChild = c;

b.leftChild = d;
b.rightChild = e;

c.leftChild = g;
c.rightChild = f;



const depthFirstTraversal = (root) => {

    const stack = [ root ];
    const result = [];

    while(stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);
        // console.log(current.val);

        if(current.rightChild !== null) stack.push(current.rightChild);
        if(current.leftChild !== null) stack.push(current.leftChild);
    }

    return result;
}

console.log(depthFirstTraversal(a));


const depthFirstTraversalRecursive = (root) => {

    if(root === null) return [];
    
    // result.push(root.val);

    // depthFirstTraversalRecursive(root.leftChild, result);
    // depthFirstTraversalRecursive(root.rightChild, result);

    // return result;

    let left = depthFirstTraversalRecursive(root.leftChild);
    let right = depthFirstTraversalRecursive(root.rightChild)

    return [root.val, ...left, ...right]
}

console.log(depthFirstTraversalRecursive(a));


const breadthFirstTraversal = (root) => {

    const queue = [ root ];
    const result = [];

    while(queue.length > 0) {
        let current = queue.shift();
        result.push(current.val);

        if(current.leftChild !== null) queue.push(current.leftChild);
        if(current.rightChild !== null) queue.push(current.rightChild);
    }

    return result;
}

console.log(breadthFirstTraversal(a))


const treeIncludes = (root, key) => {

    const stack = [ root ];
    // result = false;

    while(stack.length > 0) {
        let current = stack.pop();
        if(current.val === key) return true;

        if(current.leftChild) stack.push(current.leftChild);
        if(current.rightChild) stack.push(current.rightChild); 
    }

    return false;
}

console.log(treeIncludes(a, 15));
console.log(treeIncludes(a, 16));

const treeIncludesRecursive = (root, key) => {

    if(root === null) return false;
    if(root.val === key) return true;

    return treeIncludesRecursive(root.leftChild, key) || 
                treeIncludesRecursive(root.rightChild, key);
}

console.log(treeIncludesRecursive(a, 25))
console.log(treeIncludesRecursive(a, 19))



const treeSum = (root) => {

    const queue = [ root ];
    let sum = 0;

    while(queue.length > 0) {
        let current = queue.shift();
        sum += current.val;

        if(current.leftChild) queue.push(current.leftChild);
        if(current.rightChild) queue.push(current.rightChild);
    }

    return sum;
}

console.log(treeSum(a));


const treeMax = (root, max = -Infinity) => {
    if(root === null) return max;

    if(root.val > max) max = root.val;

    return Math.max(treeMax(root.leftChild, max), treeMax(root.rightChild, max));
}
console.log(treeMax(a));