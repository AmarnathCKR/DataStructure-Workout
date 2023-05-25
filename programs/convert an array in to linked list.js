// Convert array to a linked list
class Node{
    constructor(value){
      this.value = value
      this.next = null
    }
  }
  class LinkedList{
    constructor(){
      this.head = null
      this.size = 0
    }
    isEmpty(){
      return this.size === 0
    }
    getSize(){
      return this.size
    }
    arrayToLinkedList(arr){
      if(!arr || arr.length === 0){
        return -1
      }else{
        this.head =  new Node(arr[0])
        let current
          current=this.head
        for(let i =1;i<arr.length;i++){
        current.next = new Node(arr[i])
          current = current.next
      this.size++ 
        }
      }
    }
    print(){
      if(this.isEmpty()){
        console.log('there is no items in the list')
      }else{
        let curr = this.head
        let listValues = ''
        while(curr){
          listValues += `${curr.value} ` 
          curr = curr.next
        }
  console.log(listValues )
      }
      return -1
    }
  }
   const list =new LinkedList()
  list.arrayToLinkedList([1,2,3,4,5,6,7,8,9])
  list.print()
  