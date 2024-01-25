class MinBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }
  bubbleUp() {
    let newElementIndex = this.values.length - 1 // the last node;
    const newElementValue = this.values[newElementIndex];
    while(newElementIndex > 0) {
      let parentIndex = Math.floor((newElementIndex -1)/2)
      let parentValue = this.values[parentIndex];
      if(newElementValue >= parentValue) break;
      this.values[parentIndex] = newElementValue;
      this.values[newElementIndex] = parentValue;
      newElementIndex = parentIndex
    }
  }
  extractMin() {
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
        if(lc < element) {
          swap = lcIdx
        }
      }
      if(rcIdx < length) {
        rc = this.values[rcIdx];
        if((swap === null && rc < element) || (swap !== null) && rc < lc) {
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
const heap = new MinBinaryHeap();
heap.insert(10);
heap.insert(8);
heap.insert(9);
heap.insert(12);
heap.insert(59)
heap.insert(44)
heap.extractMin()
heap.extractMin()
heap.extractMin()
heap.extractMin()
heap.extractMin()
heap.extractMin()
console.log(heap.values)