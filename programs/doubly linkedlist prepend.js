// Doubly linked list
// creation of node
class Node{
    constructor(value){
      this.value = value
      this.next = null
      this.prev = null
    }
  }
  class LinkedList{
    constructor(){
      this.head = null
      this.tail = null
      this.size = 0
    }
  isEmpty() {
    return this.size === 0;
  }
  
      getSize(){
        return this.size
      }
    prepend(value){
      const node = new Node(value)
      if(this.isEmpty()){
        this.head = node
        this.tail = node
      }else{
           this.head.prev = node;
      node.next = this.head;
      this.head = node;
      }
      this.size++
    }
      print(){
        let curr = this.head
        let listValue = ''
        if(this.isEmpty()){
          console.log('there is no data in the list')
        }else{
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
  list.prepend(15);
  list.print();
  list.prepend(20);
  list.print();
  list.prepend(30);
  list.print();
  list.prepend(40);
  list.print();
  