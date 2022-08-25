// In this problem we have to use the queue as a stack data structure.


class Queue{
    constructor() {
        this.array = []; 
    }

    enqueue(val) {
        this.array.push(val);
    }

    dequeue() {
        let temp = this.array.shift()
        return temp;
    }

    size() {
        return this.array.length;
    }

    print() {
        console.log(this.array);
    }
}


let queue1 = new Queue;
let queue2 = new Queue;


// queue1.enqueue(10);
// queue1.enqueue(20);
// queue1.enqueue(30);
// queue1.enqueue(40);

// queue1.print();

// console.log(queue1.dequeue());

// queue1.print();

let stackPush = (val) => {
    queue1.enqueue(val)
}

let stackPop = () => {
    if(queue1.size() === 0 && queue2.size() === 0) 
        return -1;
    
    while(queue1.size() > 1) {
        queue2.enqueue(queue1.dequeue());
    }

    let val = queue1.dequeue();

    let tempRef = queue1;
    queue1 = queue2;
    queue2 = tempRef;

    return val;
}

stackPush(10);
stackPush(20);
stackPush(30);
stackPush(40);
stackPush(50); 


// console.log(stackPop());
console.log(stackPop());
console.log(stackPop());

stackPush(50); 
console.log(stackPop());