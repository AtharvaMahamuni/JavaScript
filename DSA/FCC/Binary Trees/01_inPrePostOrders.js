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

// TODO: preorder - d, b, e, a, c, f
const preorder = (root) => {
    if(root === null) return;

    preorder(root.left);
    console.log(root.val);
    preorder(root.right);
}
// preorder(a);


// TODO: inorder - a, b, d, e, c, f
const inorder = (root) => {
    if(root === null) return;

    console.log(root.val);
    inorder(root.left);
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