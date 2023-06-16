class Node{
    constructor(value){
      this.value = value
      this.left = null
      this.right = null
    }
  }
  
  class BinarySearchTree{
    constructor(){
      this.root = null
    }
    isEmpty(){
      return this.root === null
    }
    
    search(root , value){
      if(!root){
        return false
      }else{
        if(root.value === value){
          return true
        }else if(value < root.value){
          return this.search(root.left , value)
        }else{
          return this.search(root.right , value)
        }
      }
    }
  }
  
  const bst = new BinarySearchTree()
  
  console.log(bst.search(bst.root,0))
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  