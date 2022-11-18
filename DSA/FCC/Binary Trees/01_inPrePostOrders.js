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

// TODO: preorder - a, b, d, e, c, f
const preorder = (root) => {
    if(root === null) return;

    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}
// preorder(a);


// TODO: inorder - d, b, e, a, c, f
const inorder = (root) => {
    if(root === null) return;

    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}
// inorder(a);


// TODO: postorder - d, e, b, f, c, a
const postorder = (root) => {
    if(root === null) return;

    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}
postorder(a);


// When want to return the array with values

var inorderTraversal = function(root) {
    if(root === null) return [];

    let leftChilds = inorderTraversal(root.left);
    let rightChilds = inorderTraversal(root.right);

    return [...leftChilds, root.val, ...rightChilds];
};


var postorderTraversal = function(root) {
    if(root === null) return [];

    let leftChilds = postorderTraversal(root.left);
    let rightChilds = postorderTraversal(root.right);

    return [...leftChilds, ...rightChilds, root.val];
};


var preorderTraversal = function(root) {
    if(root === null) return [];

    let leftChilds = preorderTraversal(root.left);
    let rightChilds = preorderTraversal(root.right);

    return [root.val, ...leftChilds, ...rightChilds];
};
