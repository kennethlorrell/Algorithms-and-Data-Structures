import Queue from "../../Queue/Queue.js";
import BinarySearchTree from "../BinarySearchTree/BinarySearchTree.js";

const breadthFirstSearch = (tree) => {
  const queue = new Queue();
  const elements = [];
  let currentNode = null;
  queue.enqueue(tree.root);

  while (queue.size) {
    currentNode = queue.dequeue();
    elements.push(currentNode.value);

    if (currentNode.left) {
      queue.enqueue(currentNode.left);
    }
    if (currentNode.right) {
      queue.enqueue(currentNode.right);
    }
  }

  return elements;
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(8);
tree.insert(20);
tree.insert(3);
console.log(breadthFirstSearch(tree));
