// removing the node using the value
class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList{
    constructor(){
      this.head = null;
      this.size = 0;
    }
  
    isEmpty(){
      return this.size === 0;
    }
  
    getSize(){
      return this.size;
    }
  // insert
    prepend(value){
      const node = new Node(value);
  
      if(this.isEmpty()){
        this.head = node;
      }else{
        node.next = this.head;
        this.head = node;
      }
  
      this.size++;
    }
  // remov using values
    removeVal(value){
      if(this.isEmpty()){
        return null;
      }
  
      if(this.head.value === value){
        this.head = this.head.next;
        this.size--;
        return value;
      }else{
        let prev = this.head;
  
        while(prev.next && prev.next.value !== value){
          prev = prev.next;
        }
  
        if(prev.next){
          let removeNode = prev.next;
          prev.next = removeNode.next;
          this.size--;
          return value;
        }
  
        return null;
      }
    }
  // print values
    print(){
      if(this.isEmpty()){
        console.log('list is empty');
      }else{
        let curr = this.head;
        let listValues = "";
  
        while(curr){
          listValues += `${curr.value} `;
          curr = curr.next;
        }
  
        console.log(listValues);
      }
    }
  }
  
  const list = new LinkedList();
  
  console.log("list is empty", list.isEmpty());
  console.log('list size', list.getSize());
  list.print();
  list.prepend(10);
  list.print();
  list.prepend(20);
  list.prepend(30);
  list.print();
  list.removeVal(30);
  list.print();
  