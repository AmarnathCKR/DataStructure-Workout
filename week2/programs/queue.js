
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
    removeFromEnd(){
      if(this.isEmpty()){
        console.log('there is no data')
      }
      if(this.head.next === null){
        this.head = null
      }else{
        let prev = null
        let curr  = this.head
        while(curr.next !== null){
          prev = curr
          curr = curr.next
        }
        prev.next = null
      }
      this.size--
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
  
    // queue
  console.log('queue')
  class queueList{
    constructor(){
      this.queue = new LinkedList()
    }
    enqueue(value){
      this.queue.prepend(value)
    }
    dequeue(){
     this.queue.removeFromEnd() 
    }
    print(){
      this.queue.print()
    }
  }
  
  const queue = new queueList()
  queue.enqueue(10)
  queue.enqueue(20)
  queue.enqueue(30)
  queue.enqueue(40)
  queue.print()
  queue.dequeue()
  queue.print()
  
  
  