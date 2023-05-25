
// search in linked list
class Node{
    constructor(value){
      this.value = value
      this.next= null
    }
  }
  class LinkedList{
    constructor(){
      this.head=null;
      this.size=0;
    }
    isEmpty(){
      if(this.size === 0){
   return this.size === 0;    }
    }
    getSize(){
      return this.size ;
    }
  // inserting
    
    prepend(value){
      let node = new Node(value)
      if(this.isEmpty()){
        this.head = node;
      }else{
        node.next=this.head
        this.head=node
      }
      this.size++;
  }
  // search in that list
    search(value){
      if(this.isEmpty()){
        return -1
      }
   let i=0
      let curr = this.head
      while(curr){
        if(curr.value === value){
          return i
        }
        curr=curr.next
        i++
      }
      return -1
    }
    
    print(){
      if(this.isEmpty()){
        console.log('list is empty')
      }else{
      let curr  = this.head
      let listValues =''
      while(curr){
       listValues += `${curr.value}` 
        curr = curr.next
      }   
      console.log(listValues)
      }
    }
  }
  const list =new LinkedList()
  
  console.log("list is empty", list.isEmpty());
  console.log('list size', list.getSize());
  list.print();
  list.prepend(10);
  list.print();
  list.prepend(20);
  list.prepend(30);
  list.print();t();
  console.log(list.search(10))
  