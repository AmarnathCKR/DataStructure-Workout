class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
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
  
    remove_duplicates() {
      if (this.head === null) {
        return;
      }
  
      let curr_node = this.head;
      while (curr_node !== null && curr_node.next !== null) {
        if (curr_node.data === curr_node.next.data) {
          curr_node.next = curr_node.next.next;
        } else {
          curr_node = curr_node.next;
        }
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
  
  // Create a sorted linked list with duplicates
  let ll = new LinkedList();
  ll.insert(1);
  ll.insert(2);
  ll.insert(2);
  ll.insert(3);
  ll.insert(3);
  ll.insert(3);
  
  // Print original list
  console.log("Original list:");
  ll.print_list();
  
  // Remove duplicates and print updated list
  ll.remove_duplicates();
  console.log("Updated list:");
  ll.print_list();
  