import Node from './Node.js';

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;

          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;

          return this;
        }
        current = current.right;
      } else {
        return undefined;
      }
    }
  }

  find(value) {
    let current = this.root;

    while (current) {
      if (current.value === value) {
        return true;
      } else if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}

const tree = new BinarySearchTree();
console.log(tree);
