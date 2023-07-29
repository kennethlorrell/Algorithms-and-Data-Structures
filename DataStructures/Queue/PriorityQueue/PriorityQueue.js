import Node from "./Node.js";
import swap from "../../../SortingAlgorithms/utils/swap.js";

export default class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    let newIndex = this.values.push(newNode) - 1;
    let parentIndex = Math.floor((newIndex - 1) / 2);

    while (this.values[newIndex]?.priority < this.values[parentIndex]?.priority) {
      swap(this.values, newIndex, parentIndex);
      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1) / 2);
    }

    return this;
  }

  dequeue() {
    let initialIndex = 0;
    let nextEl = this.getLowerPriorityChildIndex(initialIndex);

    if (nextEl) {
      swap(this.values, initialIndex, this.values.length - 1);
    }

    const oldRoot = this.values.pop();

    while (nextEl && this.values[nextEl]?.priority < this.values[initialIndex]?.priority) {
      swap(this.values, initialIndex, nextEl);
      initialIndex = nextEl;
      nextEl = this.getLowerPriorityChildIndex(initialIndex);
    }

    return oldRoot;
  }

  getLowerPriorityChildIndex(index) {
    const leftChildIndex = Math.floor((index * 2) + 1);
    const rightChildIndex = leftChildIndex + 1;

    if (this.values.length > leftChildIndex || this.values.length > rightChildIndex) {
      return ((this.values[leftChildIndex]?.priority || Infinity) <= (this.values[rightChildIndex]?.priority || Infinity))
        ? leftChildIndex
        : rightChildIndex;
    }

    return undefined;
  }
}

// const hospitalQueue = new PriorityQueue();
// console.log(hospitalQueue.dequeue());
// console.log(hospitalQueue.enqueue('Flu', 10));
// console.log(hospitalQueue.enqueue('Stomach ache', 7));
// console.log(hospitalQueue.enqueue('Concussion', 3));
// console.log(hospitalQueue.dequeue());
// console.log(hospitalQueue.enqueue('Gunshot wound', 1));
// console.log(hospitalQueue.enqueue('Gunshot wound #2', 1));
// console.log(hospitalQueue.enqueue('Hangover', 20));
// console.log(hospitalQueue.dequeue());
// console.log(hospitalQueue.values)
