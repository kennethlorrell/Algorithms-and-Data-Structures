import Node from './Node.js';

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      return false;
    }

    let current = this.root;
    while (current) {
      if (value === current) {
        return true;
      } else if (value < current) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return false;
  }
}

const tree = new BinarySearchTree();
console.log(tree);
