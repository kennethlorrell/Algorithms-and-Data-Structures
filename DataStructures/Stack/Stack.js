import Node from '../SinglyLinkedList/Node.js';

export default class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.size) {
      this.last = newNode;
    } else {
      newNode.next = this.first;
    }

    this.first = newNode;

    return ++this.size;
  }

  pop() {
    if (!this.size) {
      return undefined;
    }

    const poppedNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = poppedNode.next;
      poppedNode.next = null;
    }

    this.size--;

    return poppedNode.value;
  }
}

// const stack = new Stack();
// console.log(stack);
