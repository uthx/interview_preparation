/*
Time complexity
Best case: O(nlogn)
Average case: O(nlogn)
Worst case: O(n^2)

Space complexity
O(n)

- Find a partition index
  - select a pivot
  - bring pivot to it's correct position
  - while doing that, move smaller elements to left of pivot and bigger elements to right of pivot
  - After doing above you will find the correct position of pivot and that becomes our partition index
- call qs recursively with l, pivot
*/
const qsCaller = (arr) => {
  let n = arr.length;
  if (n <= 1) return arr;
  qs(arr, 0, n - 1)
  return arr
}

const qs = (arr, l, h) => {
  if (l < h) {
    let partitionIndex = findPartition(arr, l, h);
    qs(arr, l, partitionIndex - 1)
    qs(arr, partitionIndex + 1, h)
  }
}

const findPartition = (arr, l, h) => {
  console.log({ l, h })
  // place partition index at correct position
  // move all elements that are smaller than partition index to left
  // move all elements that arr greater than partition index to right
  let pivot = arr[l];
  let i = l;
  let j = h;
  // move all elements > pivot to right

  while (i < j) {
    // find first element that is greater than pivot
    while (arr[i] <= pivot && i <= h - 1) {
      i++
    }
    // when this above loop breaks, it's safe to say that i pointing to an element that is greater than pivot
    // find an element that is less than pivot
    while (arr[j] > pivot && j >= l + 1) {
      j--
    }
    // now i and j are either pointing to element > pivot or element < pivot respectively or they have crossed each other
    if (i < j) {
      // only in this scenario we want to swap the larger and smaller element
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp
    }
  }
  // the above loop will run and it will only breakout when i<j condition is not satisfied, which means that our J is pointing to the correct position of pivot
  // now our pivot is at arr[l], we need to swap it with arr[j] since arr[j] is at the correct position
  arr[l] = arr[j];
  arr[j] = pivot
  // after swapping return the partition index
  return j
}


let arr = [4, 2, 1, 5, 3];
console.log(qsCaller(arr))


/*
Same algo with comments

const qsCaller = (arr) => {
  let n = arr.length;
  if (n <= 1) return arr;
  qs(arr, 0, n - 1)
  return arr
}

const qs = (arr, l, h) => {
  if (l < h) {
    let initArray = [];
    for (let i = l; i <= h; i++) {
      initArray.push(arr[i])
    }
    console.log("qs, before partition", {initArray, l, h})
    let partitionIndex = findPartition(arr, l, h);
    console.log({ partitionIndex })
    qs(arr, l, partitionIndex - 1)
    qs(arr, partitionIndex + 1, h)
  }
}

const findPartition = (arr, l, h) => {
  // place partition index at correct position
  // move all elements that are smaller than partition index to left
  // move all elements that arr greater than partition index to right
  let pivot = arr[l];
  let i = l;
  let j = h;
  // move all elements > pivot to right
  console.log("findPartition: before while: variables", { l, h, i, j, pivot });
  const fpArr = [];
  for (let i = l; i <= h; i++) {
    fpArr.push(arr[i])
  }
  console.log("findPartition: before while: fpArray", { fpArr });

  while (i < j) {
    // find first element that is greater than pivot
    console.log("findPartition: inside while: beg: variables", { i, j });

    while (arr[i] <= pivot && i <= h - 1) {
      i++
    }
    // when this above loop breaks, it's safe to say that i pointing to an element that is greater than pivot
    // find an element that is less than pivot
    while (arr[j] > pivot && j >= l + 1) {
      j--
    }
    // now i and j are either pointing to element > pivot or element < pivot respectively or they have crossed each other
    console.log("findPartition: inside while: variables", { i, j });

    if (i < j) {

      // only in this scenario we want to swap the larger and smaller element
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp
      const fpAfterInsideSwap = [];
      for (let i = l; i <= h; i++) {
        fpAfterInsideSwap.push(arr[i])
      }
      console.log("findPartition: inside while: inside if: fpAfterInsideSwap", { fpAfterInsideSwap });

    }
  }
  // the above loop will run and it will only breakout when i<j condition is not satisfied, which means that our J is pointing to the correct position of pivot
  // now our pivot is at arr[l], we need to swap it with arr[j] since arr[j] is at the correct position
  arr[l] = arr[j];
  arr[j] = pivot
  const fpOutsideWhileAfterSwap = [];
  for (let i = l; i <= h; i++) {
    fpOutsideWhileAfterSwap.push(arr[i])
  }
  console.log("findPartition: outside while: fpOutsideWhileAfterSwap", { fpOutsideWhileAfterSwap, j, i });

  // after swapping return the partition index
  return j
}


// let arr = [4,2,1,5,3];
let arr = [1, 1, 5, 3, 12, 4, 8, 9];
console.log(qsCaller(arr))
*/