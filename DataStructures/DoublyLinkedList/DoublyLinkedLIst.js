class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedLIst {
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

    return node;
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

    return node;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return false;
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
}

const dll = new DoublyLinkedLIst();
dll.unshift(1);
dll.unshift(5);
dll.push(10);
console.log(dll.get(-1));
console.log(dll.get(0));
console.log(dll.get(1));
console.log(dll.get(2));
console.log(dll.get(3));
console.log(dll);
