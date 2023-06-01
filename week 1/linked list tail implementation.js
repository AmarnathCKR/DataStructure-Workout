
// linked list program using tail and head
class Node{
    constructor(value){
    this.value = value
      this.next = null
    }
  }
  class LinkedList{
    constructor(){
      this.head = null
      this.tail = null
      this.size = 0
    }
    isEmpty(){
      if(this.size ===0){
        return this.size ===0
      }
    }
    getSize(){
      return this.size
    }
    // insert data 
    prepend(value){
      const node =new Node(value)
      if(this.isEmpty()){
        this.head =node
        this.tail= node
      }else{
       node.next = this.head;
        this.head = node;
        
      }
      this.size++
    }
    
    // print list 
    print(){
      if(this.isEmpty()){
        console.log('there is no data in the list')
      }else{
        let curr = this.head
        let listValue = ''
        while(curr){
          listValue += `${curr.value} `
          curr = curr.next
        }
        console.log(listValue)
      }
    }
  }
  const list = new LinkedList()
  console.log("list is empty", list.isEmpty());
  console.log('list size', list.getSize());
  list.print();
  list.prepend(10);
  list.print();
  list.prepend(20);
  list.print();
  list.prepend(30);
  list.print();
  list.prepend(40);
  list.print();
  