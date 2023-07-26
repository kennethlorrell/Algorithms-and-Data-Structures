import Node from "../SinglyLinkedList/Node.js";

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.size) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }

    this.last = newNode;

    return ++this.size;
  }

  dequeue() {
    if (!this.size) {
      return undefined;
    }

    const firstNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = firstNode.next;
      firstNode.next = null;
    }

    this.size--;

    return firstNode.value;
  }
}

const queue = new Queue();
console.log(queue);
