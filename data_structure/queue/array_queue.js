class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    // O(1)
    this.items.push(element);
  }
  dequeue() {
    // Linear because of array.shift() operation
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }
  printQueue() {
    if (this.isEmpty()) {
      return null;
    }
    console.log("Printing Queue");
    this.items.forEach((el) => {
      console.log("value: ", el);
    });
  }
  getSize() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.length;
  }
}

const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.enqueue("D");
queue.dequeue();
queue.dequeue();
console.log("peek", queue.peek());
console.log("getSize", queue.getSize());
queue.enqueue("C");
queue.enqueue("D");
queue.printQueue();
