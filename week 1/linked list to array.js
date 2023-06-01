
// converting an linked list in a array
class Node{
    constructor(value){
    this.value = value
    this.next = null
    }
  }
  class LinkedList{
    constructor(){
      this.head =null
      this.size = 0
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
        node.next = this.head
        this.head = node
      }
      this.size++
    }
     print(){
       let array =[]
      if(this.isEmpty()){
        console.log('there is no items in the list')
      }else{
        let curr = this.head
  for(let i=0; i<this.size;i++)  {
    
    array[i]=curr.value
    curr =curr.next
  }    
  console.log(array )
      }
      return -1
    }
  }
  const list  = new LinkedList()
  list.prepend(10)
  list.prepend(20)
  list.prepend(30)
  list.prepend(40)
  list.prepend(50)
  list.prepend(60)
  list.print()