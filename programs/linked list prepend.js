// creating a node class
class Node{
  constructor(value)
  {
    this.value =value
    this.next=null
  }
}

// create class linked list
class LinkedList{
  constructor(){
    this.head=null
    this.size =0
  }
  isEmpty(){
    return this.size===0
  }
  getSize(){
    return this.size
  }
  // how to add a new node in LinkedList
  prepend(value){
  const node = new Node(value) 
if(this.isEmpty()){
  this.head=node
}else{
  node.next = this.head
  this.head = node
}
    this.size++
}
  // printing the nodes 
  print(){
    if(this.isEmpty()){
      console.log('list is empty')
    }else{
      // traverse throughout the list
      let curr =this.head
      let listValues =''
      while (curr){
       listValues += `${curr.value} `
        curr=curr.next
      }
      console.log(listValues)
      
    }
  }
}

 //Create an instance of a linked list class
 const list =new LinkedList()
console.log("list is empty",list.isEmpty())
console.log('list size', list.getSize())
list.print()
list.prepend(10)
list.print()
list.prepend(20)
list.prepend(30)
list.print()
 