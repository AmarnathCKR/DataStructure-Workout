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
  
    print_list_reverse(node = this.head) {
      if (node === null) {
        return;
      }
      this.print_list_reverse(node.next);
      process.stdout.write(node.data + " ");
    }
  }
  
  // Create a linked list
  let ll = new LinkedList();
  ll.insert(1);
  ll.insert(2);
  ll.insert(3);
  ll.insert(4);
  ll.insert(5);
  
  // Print all elements by order
  console.log("Elements by order:");
  ll.print_list();
  
  // Print all elements in reverse order
  console.log("Elements in reverse order:");
  ll.print_list_reverse();
  console.log();
  