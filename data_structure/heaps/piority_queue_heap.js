class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(value, priority) {
    const newNode = new Node(value, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }
  bubbleUp() {
    let newElementIndex = this.values.length - 1 // the last node;
    const newElementValue = this.values[newElementIndex];
    while(newElementIndex > 0) {
      let parentIndex = Math.floor((newElementIndex -1)/2)
      let parentValue = this.values[parentIndex];
      if(newElementValue.priority >= parentValue.priority) break;
      this.values[parentIndex] = newElementValue;
      this.values[newElementIndex] = parentValue;
      newElementIndex = parentIndex
    }
  }
  dequeue() {
    // edge cases and validation
    if(!this.values.length) {
      return "Cannot remove, heap is empty"
    }
    if(this.values.length === 1) {
      return this.values.pop()
    }
    let lastElementIndex = this.values.length -1;
    this.values[0] = this.values[lastElementIndex];
    const poppedValue = this.values.pop();
    this.bubbleDown()
    return poppedValue
  }
  bubbleDown() {
    // length
    // newRoot index 
    let idx = 0;
    let length = this.values.length;
    let element = this.values[idx]

    while(true) {
      let lcIdx = (2 * idx ) + 1
      let rcIdx = (2 * idx ) + 2
      let lc, rc;
      let swap = null;
      if(lcIdx < length ) {
        lc = this.values[lcIdx];
        if(lc.priority < element.priority) {
          swap = lcIdx
        }
      }
      if(rcIdx < length) {
        rc = this.values[rcIdx];
        if((swap === null && rc.priority < element.priority) || (swap !== null) && rc.priority < lc.priority) {
          swap = rcIdx
        } 
      }
      if(swap === null) break
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
      element = this.values[idx]
     }
  }
}
const heap = new PriorityQueue();
heap.enqueue(10, 10);
heap.enqueue(8, 1);
heap.enqueue(9,2);
heap.enqueue(12,3);
heap.enqueue(59,4)
heap.enqueue(44,5)
heap.enqueue(44,0)
heap.enqueue(42,0)
heap.dequeue()
heap.dequeue()
heap.dequeue()
heap.dequeue()
heap.dequeue()
heap.dequeue()    
console.log(heap.values)