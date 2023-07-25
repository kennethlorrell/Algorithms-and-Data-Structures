import Node from './Node.js';

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    const oldTail = this.tail;

    if (!this.length) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;

    return oldTail;
  }

  shift() {
    if (!this.length) {
      return undefined;
    }

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current;

    if (index <= Math.round(this.length / 2)) {
      current = this.head;
      for (let i = 0; i !== index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i !== index; i--) {
        current = current.prev;
      }
    }

    return current;
  }

  set(index, value) {
    const node = this.get(index);

    if (!node) {
      return false;
    }

    node.value = value;

    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      return !!this.unshift(value);
    } else if (index === this.length) {
      return !!this.push(value);
    } else {
      const newNode = new Node(value);
      const prevNode = this.get(index - 1);
      const nextNode = prevNode.next;

      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;
      this.length++;

      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      const removedNode = this.get(index);
      const prevNode = removedNode.prev;
      const nextNode = removedNode.next;

      if (!removedNode) {
        return null;
      }

      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      removedNode.prev = null;
      removedNode.next = null;
      this.length--;

      return removedNode;
    }
  }
}

const dll = new DoublyLinkedList();
console.log(dll);
