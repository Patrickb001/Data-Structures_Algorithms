// Stacks

// google
// udemy.com
// youtube

// Arrays
// Linked List

// Queues

// Matt -- Joy -- Samir  -- Pavel
// Arrays
// Linked List

// Exercise Stack Implementation (LinkedList)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   pop() {
//     const { value } = this.top;
//     if (this.length === 0) return null;
//     if (this.length === 1) {
//       this.top = this.top.next;
//       this.bottom = null;
//     } else {
//       this.top = this.top.next;
//     }
//     this.length--;
//     return value;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.bottom = new Node(value);
//       this.top = newNode;
//     } else {
//       newNode.next = this.top;
//       this.top = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   peek() {
//     return this.top.value;
//   }
//   isEmpty() {
//     return !this.top;
//   }
//   printStack() {
//     const stack = [];
//     let node = this.top;
//     while (node !== null) {
//       stack.push(node.value);
//       node = node.next;
//     }
//     return stack;
//   }
// }

// const myStack = new Stack();
// myStack.push("Google");
// myStack.push("Udemy");
// myStack.push("Discord");
// console.log(myStack.pop());
// myStack.pop();
// myStack.pop();
// console.log(myStack.peek());
// console.log(myStack.printStack());

// console.log(myStack);

//Discord
//Udemy
//Google

// Exercise Stack Implementation (LinkedList)

class Stack {
  constructor() {
    this.stack = [];
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    if (this.stack.length === 0) {
      this.stack.push(value);
      this.bottom = this.stack[0];
    } else {
      this.stack.push(value);
    }
    this.length = this.stack.length;
    this.top = this.stack[this.length - 1];
    return this.stack;
  }
  pop() {
    if (this.length === 0) return;
    const popped = this.stack.pop();
    this.length--;
    if (this.length === 0) {
      this.bottom = null;
      this.top = null;
      return null;
    } else if (this.length === 1) {
      this.top = this.bottom;
    } else {
      this.top = this.stack[this.length - 1];
    }
    return popped;
  }
  peek() {
    return this.stack[this.length - 1];
  }
}

// const myStack = new Stack();
// myStack.push("Google");
// myStack.push("Udemy");
// myStack.push("Discord");
// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.pop();
// console.log(myStack);

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    const { value } = this.first;
    this.first = this.first.next;
    this.length--;
    return value;
  }
  printQueue() {
    let currentNode = this.first;
    let queue = [];
    while (currentNode !== null) {
      queue.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return queue;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.enqueue("Kyle");
myQueue.dequeue();
// myQueue.dequeue();
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// myQueue.dequeue();
// myQueue.dequeue();

// console.log(myQueue.printQueue());

console.log(myQueue);
