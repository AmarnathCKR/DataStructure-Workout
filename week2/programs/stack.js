
class Node{
    constructor(value){
      this.value = value
      this.next  = null 
    }
  }
  class LinkedList{
    constructor(){
      this.head = null
      this.size  = 0
    }
    isEmpty(){
      return this.size === 0
    }
    getSize(){
      return this.size
    }
    prepend(value){
      const node = new Node(value)
      if(this.isEmpty()){
        this.head = node
      }else{
        node.next  = this.head
        this.head = node
      }
      this.size++
    }
    removeFromBeginning(){
      let remove = this.head
      this.head = this.head.next
      remove = null
    }
    print(){
      let curr = this.head
      let listValues = ''
      while(curr){
        listValues += `${curr.value} `
        curr = curr.next
        
      }
      console.log(listValues)
    }
    
  }
  
  const list  =new LinkedList()
  list.prepend(10)
  list.prepend(20)
  list.prepend(30)
  list.print()
  
  // stack
  console.log('stack')
  class StackList{
    constructor(){
      this.stack = new LinkedList()
    }
    push(value){
      this.stack.prepend(value)
    }
    pop(){
      this.stack.removeFromBeginning()
    }
    print(){
      this.stack.print()
    }
  }
   
   const stack = new StackList
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.print()
    stack.pop()
    stack.print()