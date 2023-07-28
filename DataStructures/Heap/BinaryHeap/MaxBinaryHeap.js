import swap from "../../../SortingAlgorithms/utils/swap.js";

export default class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    let newIndex = this.values.push(value) - 1;
    let parentIndex = Math.floor((newIndex - 1) / 2);

    while (this.values[newIndex] > this.values[parentIndex]) {
      swap(this.values, newIndex, parentIndex);
      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1) / 2);
    }

    return this;
  }

  extractMax() {
    let initialIndex = 0;
    let nextEl = this.getBiggerChildIndex(initialIndex);

    if (nextEl) {
      swap(this.values, initialIndex, this.values.length - 1);
    }

    const oldRoot = this.values.pop();

    while (nextEl && this.values[nextEl] > this.values[initialIndex]) {
      swap(this.values, initialIndex, nextEl);
      initialIndex = nextEl;
      nextEl = this.getBiggerChildIndex(initialIndex);
    }

    return oldRoot;
  }

  getBiggerChildIndex(index) {
    const leftChildIndex = Math.floor((index * 2) + 1);
    const rightChildIndex = leftChildIndex + 1;

    if (this.values.length > leftChildIndex || this.values.length > rightChildIndex) {
      return ((this.values[leftChildIndex] || -Infinity) >= (this.values[rightChildIndex] || -Infinity))
        ? leftChildIndex
        : rightChildIndex;
    }

    return undefined;
  }
}

// const heap = new MaxBinaryHeap();
