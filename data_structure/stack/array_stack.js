class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    // Push the element at the top of the stack
    this.items.push(element);
  }
  pop() {
    // Removes the element from the top of the stack
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }
  peek() {
    // returns the top most elements in the stack, but doesn’t delete it
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    // Checks if the stack is empty
    return this.items.length === 0;
  }
  printStack() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    console.log("Printing Stack: ");
    for (let i = 0; i < this.items.length; i++) {
      console.log(`value: ${this.items[i]}`);
    }
  }
  size() {
    return this.items.length;
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log("peeking: ", stack.peek());
console.log(stack.printStack());
