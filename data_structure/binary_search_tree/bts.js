/*
Notes: 
- https://www.enjoyalgorithms.com/blog/deletion-in-binary-search-tree

*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(item) {
    // If the tree is empty, create a new node and set it as the root
    if (this.root === null) {
      const node = new Node(item);
      this.root = node;
      return this.root;
    }

    let tempPointer = this.root;

    // Traverse the tree to find the appropriate position for the new node
    while (true) {
      if (item < tempPointer.data) {
        // If the left child is null, insert the new node here
        if (tempPointer.left === null) {
          const node = new Node(item);
          tempPointer.left = node;
          return this.root;
        } else {
          // Move to the left child
          tempPointer = tempPointer.left;
        }
      } else {
        // If the right child is null, insert the new node here
        if (tempPointer.right === null) {
          const node = new Node(item);
          tempPointer.right = node;
          return this.root;
        } else {
          // Move to the right child
          tempPointer = tempPointer.right;
        }
      }
    }
  }
  search(item) {
    if (this.root === null) {
      return "Tree is empty";
    }
    let tempPointer = this.root;
    while (true) {
      if (item === tempPointer.data) {
        return tempPointer;
      }
      if (item < tempPointer.data) {
        if (tempPointer.left) {
          tempPointer = tempPointer.left;
        } else {
          return "Not Found";
        }
      } else {
        if (tempPointer.right) {
          tempPointer = tempPointer.right;
        } else {
          return "Not Found";
        }
      }
    }
  }
  searchRecur(item) {
    if (this.root === null) {
      return "Tree is empty";
    }
    return this.search(item, this.root);
  }
  searchRecursive(item, subTree) {
    if (subTree === null) {
      return "Not Found";
    }
    if (item === subTree.data) {
      return subTree;
    }
    if (item < subTree.data) {
      return this.searchRecursive(item, subTree.left);
    }
    return this.searchRecursive(item, subTree.right);
  }
  insertRecur(item) {
    this.root = this.insertRecursive(this.root, item);
    return this.root;
  }
  insertRecursive(node, item) {
    if (node === null) {
      return new Node(item);
    }
    if (item < node.data) {
      node.left = this.insertRecursive(node.left, item);
    }
    if (item > node.data) {
      node.right = this.insertRecursive(node.right, item);
    }
    return node;
  }
  findBstMin(subTree) {
    while (subTree.left !== null) {
      subTree = subTree.left;
    }
    return subTree;
  }
  deleteBstMin(subTree) {
    if (subTree === null) {
      return null;
    }
    if (subTree.left === null) {
      return subTree.right;
    }
    subTree.left = this.deleteBstMin(subTree.left);
    return subTree;
  }
  deleteItemRecur(item) {
    if (this.root === null) {
      return "Tree is empty";
    }
    return this.deleteItemRecursive(this.root, item);
  }
  deleteItemRecursive(subTree, item) {
    console.log({ subTree });
    if (subTree === null) {
      return null;
    }
    if (item < subTree.data) {
      subTree.left = this.deleteItemRecursive(subTree.left, item);
      return subTree;
    } else if (item > subTree.data) {
      subTree.right = this.deleteItemRecursive(subTree.right, item);
      return subTree;
    }
    // item == subTree.data
    if (subTree.left === null && subTree.right === null) {
      // leaf node
      return null;
    } else if (subTree.left === null) {
      // subtree has only right node
      return subTree.right;
    } else if (subTree.right === null) {
      // subtree has only left node
      return subTree.left;
    }
    /*
        subtree has 2 children- both left and right
        Algo:
              - find subTree with minimum element in right subtree
              - Replace subTree data with minElement Data
              - delete minElement subtree and restructure if needed

        */
    const minSubTreeFromRightBranch = this.findBstMin(subTree.right);
    subTree.data = minSubTreeFromRightBranch.data;
    // now we need to delete subtree that's brought to top
    subTree.right = this.deleteBstMin(subTree.right);
    return subTree;
  }
  bfsTraversal() {
    if (this.root === null) {
      return "Tree is empty";
    }
    const queue = [this.root];
    const visitedNodes = [];
    while (queue.length) {
      const firstNode = queue.shift();
      // visit first node from queue
      visitedNodes.push(firstNode.data);
      // explore first node from queue, check it's left and right, if present push each to queue
      if (firstNode.left !== null) {
        queue.push(firstNode.left);
      }
      if (firstNode.right !== null) {
        queue.push(firstNode.right);
      }
    }
    return visitedNodes;
  }
  dfsTraversalPreOrder() {
    //sanity checks
    if (this.root === null) {
      return "Tree is empty";
    }
    const stack = [];
    const map = new Map();
    let pointer = this.root;
    while (true) {
      console.log({ stack, map, pointer });
      // Check if pointer has a left node and it has not already been traversed
      // let leftPointer = pointer?.left;
      // console.log({leftPointer})

      // let leftPointerData = leftPointer?.data;
      // console.log({leftPointerData})

      if (pointer.left && map.get(pointer.left.data) === undefined) {
        console.log("=>>>> node.left present");
        // Pointer has a non-traversed left node
        // push pointer to stack
        stack.push(pointer);
        // Since Pointer is traversed now, make an entry in map
        map.set(pointer.data, pointer);
        // move pointer to the it's left node
        pointer = pointer.left;
      } else if (pointer.right && map.get(pointer.right.data) === undefined) {
        console.log("=>>>> node.right present");

        // same logic for right as left
        // Pointer has a non-traversed right node
        // push pointer to stack
        stack.push(pointer);
        // Since Pointer is traversed now, make an entry in map
        map.set(pointer.data, pointer);
        // move pointer to the it's right node
        pointer = pointer.right;
      } else if (stack.length) {
        console.log("=>>>> backtracking baby");

        // Pinter is leaf node with no left and right node
        // Also since stack has nodes in it, that means backtracking is possible
        map.set(pointer.data, pointer);
        const lastTraversedNode = stack.pop();
        pointer = lastTraversedNode;
      } else {
        console.log("No more options left, getting out");
        break;
      }
    }
    return map;
  }
  dfsTraversalPreOrderRecursive() {
    const data = [];
    function traverse(node) {
      // root -> left -> right
      data.push(node.data)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
  dfsTraversalPostOrderRecursive() {
    const data = [];
    function traverse(node) {
      // left -> right -> root

      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      data.push(node.data)
    }
    traverse(this.root)
    return data
  }
  dfsTraversalInOrderRecursive() {
    const data = [];
    function traverse(node) {
      // left -> root -> right

      if(node.left) traverse(node.left)
      data.push(node.data)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
  bulkInsert(items) {
    items.forEach((item) => {
      this.insertRecur(item);
    });
    return this.root;
  }
}

const bst = new BinarySearchTree();
const items = [5, 3, 8, 2, 4, 6, 9, 7];
bst.bulkInsert(items);
// bst.insertRecur(5);
// bst.insertRecur(3);
// bst.insertRecur(7);
// bst.insertRecur(2);
// bst.insertRecur(4);
// bst.insertRecur(6);
// bst.insertRecur(8);

// console.log(bst.search(8));
// console.log(bst.searchRecur(8));
// console.log(bst.deleteItemRecur(2))
// console.log(bst.deleteItemRecur(4))
// console.log(bst.deleteItemRecur(6))
// console.log(bst.deleteItemRecur(8))

// console.log("traversal output",bst.bfsTraversal())
// const map = bst.dfsTraversalPreOrder();
// console.log({ map });
console.log("preOrder", bst.dfsTraversalPreOrderRecursive())
console.log("postOrder", bst.dfsTraversalPostOrderRecursive())
console.log("inOrder", bst.dfsTraversalInOrderRecursive())
// console.log(bst.deleteItemRecur(5));
// console.log(JSON.stringify(bst));
