class Node {
  constructor(data) {
    this.next = null;
    this.prev = null;
    this.data = data;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }
  push(data) {
    /*
    Create a node and push/append to the list
      possible list states
        - empty
          - create a new node
          - point head to new node
          - point tail to new node
          - increase size by 1
        - non-empty
          - point tail (last element) 
    */
    const node = new Node(data);

    if (this.isEmpty()) {
      // if the list is empty
      this.head = node;
      this.tail = node;
    } else {
      // non-empty
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }
  unShift(data) {
    /*
    Create a node and add it to the start of the list
      possible list states
        - empty
          - point head and tail to the new node
        - non-empty 
          - new node . next = this.head
          - this.head = new node
    */
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }
  insertAt(index, data) {
    /*
    Insert node at a given index and return data. Return -1 if index is invalid
      Possible scenarios
        - invalid index
        - 
    */
    if (!this.isValidIndex(index)) {
      return "Invalid index provided";
    }

    // Scenario 1 : Insertion at head, requires head manipulation
    if (index === 0) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.size++;
      return newNode.data;
    }
    // Scenario 2 : Insertion at end, requires tail manipulation
    if (index === this.size) {
      const newNode = new Node(data);
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
      return newNode.data;
    }
    // Scenario 3: Insertion in middle
    let prevPointer = this.head;
    for (let i = 0; i < index - 1; i++) {
      prevPointer = prevPointer.next;
    }
    const newNode = new Node(data);
    let currentPointer = prevPointer.next;
    newNode.next = currentPointer;
    newNode.prev = prevPointer;

    currentPointer.prev = newNode;
    prevPointer.next = newNode;
    this.size++;
    return newNode.data;
  }
  removeFrom(index) {
    /*
    Remove a node from a particular index

    */
    if (index < 0 || index >= this.size) {
      return "Invalid index provided";
    }
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.size--;
      return;
    }
    console.log({ index, size: this.size });
    if (index === this.size - 1) {
      console.log("here", this.tail.data);
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size--;
      return;
    }
    let prevPointer = this.head;
    for (let i = 0; i < index - 1; i++) {
      prevPointer = prevPointer.next;
    }
    let deleteNode = prevPointer.next;
    let newNextNode = deleteNode.next;
    prevPointer.next = newNextNode;
    newNextNode.prev = prevPointer;
    this.size--;
    return;
  }
  removeElement(element) {
    // Remove element and return the index, return -1 if not found
    if (this.isEmpty()) {
      return "Cannot remove, list is empty";
    }
    let tempPointer = this.head;
    let index = 0;
    while (tempPointer !== null) {
      if (tempPointer.data === element) {
        if (index === 0) {
          // head needs to be removed
          this.head = this.head.next;
          this.head.prev = null;
          this.size--;
          if (this.size === 1) {
            // head and tail are pointing to the same node, hence tail needs to be updated
            this.tail = this.head;
          }
          return index;
        }
        if (index === this.size - 1) {
          this.tail = this.tail.prev;
          this.tail.next = null;
          this.size--;
          return index;
        }
        let prevPointer = this.head;
        for (let i = 0; i < index - 1; i++) {
          prevPointer = prevPointer.next;
        }
        let currentPointer = prevPointer.next;
        let newNextPointer = currentPointer.next;
        prevPointer.next = newNextPointer;
        newNextPointer.prev = prevPointer;
        this.size--;
        return index;
      }
      tempPointer = tempPointer.next;
      index++;
    }
    return -1;
  }
  printList() {
    if (this.isEmpty()) {
      return "List is empty";
    }
    console.log("Print list : ");
    let tempPointer = this.head;
    while (tempPointer !== null) {
      console.log("data : ", tempPointer.data);
      tempPointer = tempPointer.next;
    }
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  isValidIndex(index) {
    return !(index < 0 || index > this.size);
  }
}
const list = new DoublyLinkedList();
list.push("A");
list.push("B");
list.push("C");
list.push("D");
list.printList();
console.log("tail", list.tail.data);
console.log("size", list.getSize());

list.insertAt(0, "A.0");

list.printList();
console.log("tail", list.tail.data);
console.log("size", list.getSize());

list.insertAt(5, "E");

list.printList();
console.log("tail", list.tail.data);
console.log("size", list.getSize());

list.insertAt(6, "F");

list.printList();
console.log("tail", list.tail.data);
console.log("size", list.getSize());

list.insertAt(6, "F.1");

list.printList();
console.log("tail", list.tail.data);
console.log("size", list.getSize());
console.log(list.removeFrom(8));

list.removeElement("A.0");

list.printList();
console.log("newtail: ", list.tail.data);
console.log("newHead: ", list.head.data);
console.log("size,", list.size);
