import Node from "./Node.js";

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.length) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.length) {
      return undefined;
    }

    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead;
  }

  unshift(val) {
    const node = new Node(val);

    const oldHead = this.head;
    this.head = node;
    this.head.next = oldHead;

    if (!this.length) {
      this.tail = node;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;

    for (let i = 0; i !== index; i++) {
      current = current.next;
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
    } else if (index === this.length) {
      return !!this.push(value);
    } else if (index === 0) {
      return !!this.unshift(value);
    }
    const node = this.get(index - 1);
    const newNode = new Node(value);

    if (node.next) {
      newNode.next = node.next;
    }
    node.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      return !!this.shift();
    } else if (index === this.length - 1) {
      return !!this.pop();
    }
    const prevNode = this.get(index - 1);
    let target = prevNode.next;
    prevNode.next = target.next;
    target = null;
    this.length--;

    return true;
  }

  reverse() {
    // 1 -> 2 -> 3 -> 4 -> 5
    let node = this.head; // 1
    this.head = this.tail; // 5
    this.tail = node; // 1
    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next; // 2, 3, 4, 5
      node.next = prev; // null, 1, 2, 3
      prev = node; // 1, 2, 3, 4
      node = next; // 2, 3, 4, 5
    }

    return this;
  }

  rotate(num) {
    if (num === 0 || num >= this.length) {
      return this;
    }

    if (num < 0) {
      num = this.length + num;
    }

    const newHead = this.get(num);
    const newTail = this.get(num - 1);

    this.tail.next = this.head;
    this.head = newHead;
    this.tail = newTail;
    this.tail.next = null;

    return this;
  }
}

const list = new SinglyLinkedList();
list.push(1).push(2).push(3).push(4).push(5);
list.rotate(-1);
console.log(list);
