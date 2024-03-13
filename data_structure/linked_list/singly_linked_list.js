class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  unshift(data) {
    /*
    create a new node at the start of the lits
    Possible states
    - empty
      - create a new node
      - point head to the node 
    - non-empty
      - create a new node
      - point new node next to head.next
      - point head to new node
    Other required things
    - functions
      - check if list is epmpty
    */
    const newNode = new Node(data);
    if (this.isListEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }
  push(data) {
    /*
    push a node in the list
    possible list states
      - empty
        - call unshift
      - non-empty
        - create a new pointer and point to what head is pointing at
        - traverse list and reach to end
        - create new node
        - do end.next = new node
    */

    if (this.isListEmpty()) {
      this.unshift(data);
    } else {
      const newNode = new Node(data);
      let tempPointer = this.head;
      while (tempPointer.next !== null) {
        tempPointer = tempPointer.next;
      }
      tempPointer.next = newNode;
      this.size++;
    }
  }
  insertAt(index, data) {
    /*
    Insert data at a particular index
    possible list states
      - index is out of bound

      - index is in bound
      
    */
    if (index < 0 || index > this.size) {
      return "Please enter a valid index";
    }
    const newNode = new Node(data);

    if (index === 0) {
      // index at start
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let tempPointer = this.head;
      for (let i = 0; i < index - 1; i++) {
        console.log({ i, tempPointer });
        tempPointer = tempPointer.next;
      }
      console.log({ tempPointer });
      newNode.next = tempPointer.next;
      tempPointer.next = newNode;
    }
    this.size++;
  }
  removeFrom(index) {
    if (index < 0 || index > this.size - 1 || this.isListEmpty()) {
      return "Invalid index given";
    }

    if (index === 0) {
      this.head = this.head.next;
      // check later how to delete the removed old head
    } else {
      let currentPointer = this.head;
      let prevPointer;
      for (let i = 0; i < index; i++) {
        prevPointer = currentPointer;
        currentPointer = currentPointer.next;
      }
      prevPointer.next = currentPointer.next;
    }
    this.size--;
  }
  removeElement(element) {
    let currentPointer = this.head;
    let prevPointer = null;
    while (currentPointer !== null) {
      console.log({ currentPointer, prevPointer })
      // match found
      if (currentPointer.data === element) {
        if (prevPointer === null) {
          // head.value === element
          this.head = currentPointer.next;
        } else {
          prevPointer.next = currentPointer.next;
        }
        this.size--;
        return currentPointer.data;
      }

      // match not found
      prevPointer = currentPointer;
      currentPointer = currentPointer.next;
    }
    return -1;
    /*
    Removes the given element from the list and return that element. Return -1 if element not found.
    */
  }
  reverseIterCaller() {
    this.reverseIteratively(this.head)
  }
  reverseIteratively() {
    if (this.isListEmpty()) {
      return "List is empty"
    }
    let current = this.head, prev = null, next = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev
    this.printList()
  }
  reverseRecurCaller() {
    this.reverseRecursively(this.head)
  }
  reverseRecursively(tempHead) {
    if (this.isListEmpty()) {
      return "List is empty"
    }
    console.log({ tempHead })
    if (tempHead.next === null) {
      this.head = tempHead;
      return
    }
    this.reverseRecursively(tempHead.next);
    let q = tempHead.next;
    q.next = tempHead;
    tempHead.next = null;
  }
  //helper methods
  indexOf(element) {
    // Return index of the element if it's in the list else -1
    let currentPointer = this.head;
    let indexCount = 0;
    while (currentPointer !== null) {
      if (currentPointer.data === element) {
        return indexCount
      }
      indexCount++
      currentPointer = currentPointer.next;
    }
    return -1;
  }
  printList() {
    /*
    Print all the data values of the list
    Possible list states
    - empty
      - print a message 
    - non-empty
      - create a pointer
      - make that pointer point to what head is pointing at
      - traverse using the pointer
      - in each iteration, print the data value of each node from the list
    */
    if (this.isListEmpty()) {
      console.log("Values can't be printed since list is empty");
    } else {
      let tempPointer = this.head;
      while (tempPointer) {
        console.log("data value", tempPointer.data);
        tempPointer = tempPointer.next;
      }
    }
  }
  printRecurCaller() {
    this.printRecursivelyReverse(this.head);
  }
  printRecursivelyReverse(headNode) {
    console.log("headNode", headNode)
    if (headNode === null) {
      return;
    }
    this.printRecursivelyReverse(headNode.next);
    console.log("value: ", headNode.data)
  }
  printRecursivelyForward(headNode) {
    if (headNode === null) return;
    console.log("value: ", headNode.data);
    this.printRecursivelyForward(headNode.next)
  }
  isListEmpty() {
    return this.head === null;
  }
  getSize() {
    return this.size;
  }
}
const list = new LinkedList();
list.push("A");
list.push("B");
list.push("C");
list.printList()
// list.printRecurCaller()
list.reverseRecurCaller()
list.printList()
console.log({ list: JSON.stringify(list) })