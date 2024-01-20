/*
Parent-Child Relationship:

The relationship between a parent node at index ‘i’ and its children is given by the formulas: left child at index 2i+1 and right child at index 2i+2 for 0-based indexing of node numbers.
child = 2n + 1 (left child) and 2n + 2 (Right child)
parent = (n-1)/2

Operations:

- Heapify: rearrange the elements to maintain the property of heap data structure. Complexity O(log n)

Properties to follow:
https://www.enjoyalgorithms.com/blog/introduction-to-heap-data-structure

*/


class MaxBinaryHeap {
  constructor(){
    this.values = []
  } 
  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }
  bubbleUp() {
    // logic is simple, I just need to make sure that the new element that is inserted is less  then parent, if not then swap until you satisfy that condition
    let newElementIndex = this.values.length -1;
    const newElementValue = this.values[newElementIndex];

    while(newElementIndex > 0) {
      // find the parent index
      const parentIndex = Math.floor((newElementIndex - 1/2));
      // find the parent value for future comparison
      const parentValue = this.values[parentIndex];
      if(newElementValue <= parentValue){
        // break out of the loop since new element is at the right position, ie it's less then it's parent
        break;
      }
      // new element is not at right position, ie its greater then parent
      // now you need to swap the parent with child
      this.values[parentIndex] = newElementValue;
      this.values[newElementIndex] = parentValue;
      newElementIndex = parentIndex
    }
  }
  extractMax() {
    console.log("extractMap called", this.values)
    if(!this.values.length) return "Cannot remove, heap is empty";
    if(this.values.length === 1) return this.values.pop();
    let idx = this.values.length -1;
    let end = this.values[idx];
    this.values[0] = end;
    let poppedValue = this.values.pop()
    this.bubbleDown()
    return poppedValue;
  }
  bubbleDown() {
    console.log("bubbleDown start", this.values)
    let idx = 0;
    let length = this.values.length;

    while(true) {
      console.log("while start",{idx, values: this.values})
      let leftIndex = ((2 * idx) + 1); 
      let rightIndex = (2 * idx) + 2; 
      console.log({leftIndex, rightIndex})
      let leftChild, rightChild;
      let swap = null;
      if(leftIndex < length) {
        leftChild = this.values[leftIndex];
        if(leftChild > this.values[idx]) {
          swap = leftIndex;
        }
      }
      if(rightIndex < length) {
        rightChild = this.values[rightIndex];
        if((swap === null && rightChild > this.values[idx]) ||  (swap !== null && rightChild > leftChild)) {
          swap = rightIndex;
        } 
      };
      if(swap === null) break
      let idxValue = this.values[idx];
      this.values[idx] = this.values[swap];
      this.values[swap] = idxValue
      idx = swap
      console.log("while end", this.values, swap)
    }
  }
}

// [41,39,33,18,27,12]
const heap = new MaxBinaryHeap();

heap.insert(55)
heap.extractMax()
console.log(heap.values)