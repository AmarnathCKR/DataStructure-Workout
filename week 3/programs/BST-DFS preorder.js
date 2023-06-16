class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(val) {
    const newNode = new Node(val);
    this.root = newNode;
  }
  
  preOrder(root){
    let order = []
    if(root){
      order.push(root.value)
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right )
    }
    return order;
  }

}

const bst = new BinarySearchTree(22);
console.log(bst.preOrder(bst.root))
