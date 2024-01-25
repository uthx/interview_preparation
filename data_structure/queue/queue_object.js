class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    console.log("found this", this.items[this.front]);
    delete this.items[this.front];
    this.front++;
    return item;
  }
  printQueue() {
    console.log(this.items);
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue("C");
console.log("front", queue.front);
console.log("rear", queue.rear);
queue.printQueue();
console.log("Size ", queue.size());
