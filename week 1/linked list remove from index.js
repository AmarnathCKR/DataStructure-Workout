// Remove node 
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    
    isEmpty() {
      return this.size === 0;
    }
    
    getSize() {
      return this.size;
    }
    // add data to linked list
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
    // remove 
    
    remove(index){
      if(index < 0 || index >= this.size ){
        return null
      }
      let removeNode
      if(index ===0){
        removeNode=this.head
        this.head=this.head.next
      }else{
        let prev = this.head
        for(let i=0;i<index-1;i++){
          prev = prev.next
        }
        removeNode =prev.next
        prev.next=removeNode.next
      }
      this.size--
      return removeNode.value
      
    }
    // print 
    print() {
      if (this.isEmpty()) {
        console.log('this list is empty');
      } else {
        let curr = this.head;
        let listvalues = '';
        while (curr) {
          listvalues += `${curr.value}`;
          curr = curr.next;
        }
        console.log(listvalues);
      }
    }
  }
  
  const list = new LinkedList();
  console.log("list is empty",list.isEmpty())
  console.log('list size', list.getSize())
  list.print()
  list.prepend(10)
  list.print()
  list.prepend(20)
  list.prepend(30)
  list.print()
  list.remove(0);
  list.print()
  