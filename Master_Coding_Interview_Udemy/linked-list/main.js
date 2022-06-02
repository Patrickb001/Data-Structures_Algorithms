// const basket = ["apples", "grapes", "pears"];

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) return this.append(value);
    let currentNode = new Node(value);

    let previousNode = this.traverseToIndex(index - 1);
    let nextNode = previousNode.next;
    previousNode.next = currentNode;
    currentNode.next = nextNode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index <= 0) {
      this.length--;
      return (this.head = this.head.next);
    }
    if (index > this.length) {
      this.tail = this.traverseToIndex(this.length - 2);
      this.tail.next = null;
      this.length--;
      return this.tail;
    }
    let previousNode = this.traverseToIndex(index - 1);
    let removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    return this;
  }
  traverseToIndex(index) {
    if (index < 0) return null;
    if (index >= this.length) return this.tail;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  reverse() {
    if (!this.head.next) return this.head;
    let index = this.length - 1;
    let currentNode = this.traverseToIndex(index);
    let value = currentNode?.value;
    let reversedLinkedList = new LinkedList(value);
    while (currentNode !== null) {
      index--;
      currentNode = this.traverseToIndex(index);
      value = currentNode?.value;
      if (value) {
        reversedLinkedList.append(value);
      }
    }
    console.log(reversedLinkedList.printList());
    return reversedLinkedList;
  }
}
// let newLinkedList = new LinkedList(1);
// newLinkedList.append(2);
// newLinkedList.append(3);
// newLinkedList.append(4);
// console.log(newLinkedList.printList());
// console.log(newLinkedList.reverse());

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      previous: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const currentNode = this.traverseToIndex(0);
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    currentNode.previous = this.head;
    this.head.previous = null;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) return this.append(value);

    let currentNode = new Node(value);

    let previousNode = this.traverseToIndex(index - 1);
    let nextNode = previousNode.next;
    previousNode.next = currentNode;
    currentNode.next = nextNode;
    nextNode.previous = currentNode;
    currentNode.previous = previousNode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index <= 0) {
      this.length--;
      this.head = this.head.next;
      this.head.previous = null;
      return;
    }
    if (index >= this.length) {
      this.tail = this.traverseToIndex(this.length - 2);
      this.tail.next = null;
      this.length--;
      return this.tail;
    }
    let previousNode = this.traverseToIndex(index - 1);
    let removedNode = previousNode.next;
    let nextNode = removedNode.next;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;
    this.length--;
    return this;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

// const doubleLinkedList = new DoublyLinkedList(2);

// doubleLinkedList.prepend(5);
// doubleLinkedList.append(5);
// doubleLinkedList.append(10);
// doubleLinkedList.insert(10, 7);
// doubleLinkedList.remove(1);
// console.log(doubleLinkedList.printList());

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(4, 23);
// myLinkedList.remove(2);
// myLinkedList.remove(0);
// myLinkedList.remove(-5);
// myLinkedList.remove(50);
// console.log(myLinkedList);
// console.log(myLinkedList.printList());
