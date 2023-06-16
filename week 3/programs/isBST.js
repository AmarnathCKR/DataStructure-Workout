class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(val) {
      this.root = this.insertRecursive(this.root, val);
    }
    insertRecursive(node, val) {
      if (!node || node.value === val) return new Node(val);
      if (val < node.value) node.left = this.insertRecursive(node.left, val);
      else node.right = this.insertRecursive(node.right, val);
      return node;
    }
    isBinarySearchTree(root) {
       let prev=null
       function inOrder(node){
          if(!node) return true
          if(!inOrder(node.left)) return false
          if(prev && prev>node.value) return false
          prev=node.value
          return inOrder(node.right)
       }
       return inOrder(root)
    }
  }
  
  const bst = new BinarySearchTree();
  bst.insert(30);
  bst.insert(40);
  bst.insert(20);
  bst.insert(25);
  const nonBst = new Node(10);
  nonBst.left = new Node(50);
  nonBst.right = new Node(40);
  nonBst.right.left = new Node(30);
  nonBst.right.right = new Node(50);
  console.log(bst.isBinarySearchTree(nonBst))
  