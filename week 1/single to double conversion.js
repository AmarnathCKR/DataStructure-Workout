class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(data) {
      let new_node = new Node(data);
      if (this.head === null) {
        this.head = new_node;
      } else {
        let curr_node = this.head;
        while (curr_node.next !== null) {
          curr_node = curr_node.next;
        }
        curr_node.next = new_node;
      }
    }
  
    print_list() {
      if (this.head === null) {
        console.log("List is empty");
      } else {
        let curr_node = this.head;
        while (curr_node !== null) {
          process.stdout.write(curr_node.data + " ");
          curr_node = curr_node.next;
        }
        console.log();
      }
    }
  }
  
  // Create a singly linked list
  let sll = new SinglyLinkedList();
  sll.insert(1);
  sll.insert(2);
  sll.insert(3);
  sll.insert(4);
  sll.insert(5);
  
  // Print the linked list
  sll.print_list();
  