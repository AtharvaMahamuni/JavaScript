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

// TODO: Breadth first traversal
// o/p -> a, b, c, d, e, f

// In the breadth first traversal we use the queue data structure to keep the record of nodes in the similar heights which will help us to give the outputs in a linear fashion at every height of a tree. Breadth-first traversal gives the o/p as above.

// Time Complexity - O(n) //if adding and removing from queue takes constant time.
// Space complexity - O(n)
// where, n is # of nodes

// So here we get the linear time and space solution.


// TODO: Breadth first traversal iterative approach

let breadthFirstTraversal = (root) => {
    if(root === null) return [];

    let result = [];
    let queue = [root];

    while(queue.length > 0) {
        // let current = queue[0];
        // queue = queue.slice(1);

        let current = queue.shift();
        result.push(current.val);

        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right);
    }

    return result;
}

console.log(breadthFirstTraversal(a));


// TODO: Breadth first traversal recursive solution

// It is tricky and not that great way to solve this problem recursively 
// We don't get an advantage of doing so because of queue is implemented.
// It is really hard and doesn't make sense to have the recursive solution for breadth first traversal.