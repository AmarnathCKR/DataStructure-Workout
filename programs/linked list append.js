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
 
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
          this.head=node
        }else{
          let prev= this.head
          while(prev.next){
            prev= prev.next
          }
            prev.next=node
        }
        this.size++
        
      }

    // printing the node 
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
list.append(10)
list.print()
list.append(20)
list.append(30)
list.print()