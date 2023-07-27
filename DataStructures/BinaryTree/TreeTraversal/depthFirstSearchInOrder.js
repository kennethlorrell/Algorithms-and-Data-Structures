import BinarySearchTree from "../BinarySearchTree/BinarySearchTree.js";

const depthFirstSearchInOrder = (tree) => {
  const elements = [];

  const traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    }

    elements.push(node.value);

    if (node.right) {
      traverse(node.right);
    }
  };

  traverse(tree.root);

  return elements;
};

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(8);
tree.insert(20);
tree.insert(3);
console.log(depthFirstSearchInOrder(tree));