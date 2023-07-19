class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
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

    let prev = this.head;
    const current = this.head.next;

    while (current.next !== null) {
      prev = prev.next;
    }

    prev.next = null;
    this.tail = prev;

    return current;
  }
}

const list = new SinglyLinkedList();
list.push(15);
list.push(30);
list.push(45);
console.log(list.pop());
console.log(list);
