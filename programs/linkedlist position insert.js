// inserting a new node in the position of an array
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  // creating Linkedlist
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    // checking list is empty or not
    isEmpty() {
      return this.size === 0;
    }
    // for get the size of linkedlist
    getSize() {
      return this.size;
    }
  // insert beginning
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
    //Insert a new node in a index
    insert(value, index) {
      if (index < 0 || index > this.size) {
        return;
      }
      if (index === 0) {
        this.prepend(value);
      } else {
        const node = new Node(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
      }
    }
    // printing the nodes 
    print() {
      if (this.isEmpty()) {
        console.log('list is empty');
      } else {
        let curr = this.head;
        let listValues = '';
        while (curr) {
          listValues += `${curr.value} `;
          curr = curr.next;
        }
        console.log(listValues);
      }
    }
  }
  //Create an instance of a linked list class
  const list = new LinkedList();
  console.log('list is empty', list.isEmpty());
  console.log('list size', list.getSize());
  list.print();
  list.insert(10, 0);
  list.print();
  list.insert(20, 1);
  list.print();
  list.insert(30, 1);
  list.print();
  