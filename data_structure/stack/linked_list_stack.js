class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedListStack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(element) {
    // Push an element at the top of the stack
    // Prepend in linked list terms
    const node = new Node(element);
    node.next = this.top;
    this.top = node;
    this.size++;
  }
  pop() {
    // Remove the top element from the stack
    // Remove top pointer element, and point top to top.next
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    this.top = this.top.next;
    this.size--;
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.top.data;
  }
  getSize() {
    return this.size;
  }
  printStack() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    console.log("Printing stack: ");
    let tempPointer = this.top;
    while (tempPointer) {
      console.log("value: ", tempPointer.data);
      tempPointer = tempPointer.next;
    }
  }
  isEmpty() {
    return this.size === 0;
  }
}

const stack = new LinkedListStack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.pop();
stack.pop();
stack.pop();
console.log("top", stack.peek());
console.log("size", stack.getSize());

console.log(stack.printStack());
