// Binary Tree

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) this.root = newNode;
    else {
      let currentNode = this.root;
      while (true) {
        if (value > currentNode.value) {
          if (currentNode.right == null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        } else if (value < currentNode.value) {
          if (currentNode.left == null) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }
      }
    }
  }
  lookup(value) {
    let currentNode = this.root;
    if (currentNode == null) return false;
    if (value === currentNode.value) return currentNode;
    while (currentNode) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        //Option 1: No right child:
        if (currentNode.right == null) {
          if (parentNode == null) {
            this.root = currentNode.left;
          } else {
            // if parent > current value, make current left child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
              // if parent > current value, make current left child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
          //Option 2: right child which doesn't have a left child
        } else if (currentNode.right.left == null) {
          if (parentNode == null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            // if parent > current, make right child a left child of the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
              // if parent > current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          // Parent's left subtree is not leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode == null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(20);
tree.insert(4);
tree.insert(6);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.remove(170));
console.log(tree.lookup(4));

// console.log(tree);

let treeString = JSON.stringify(traverse(tree.root));
// console.log(treeString);

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
