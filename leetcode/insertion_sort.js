/*
Time complexity: 
Worst Case:O(n^2)
Average Case:O(n^2)
Best Case:O(n)

Remember: Inserting data in a sorted set

Intuition

Imagine that you have a stack of phone bills from the past two years and that you
wish to organize them by date. A fairly natural way to do this might be to look at
the first two bills and put them in order. Then take the third bill and put it into the
right order with respect to the first two, and so on. As you take each bill, you would
add it to the sorted pile that you have already made. This naturally intuitive process
is the inspiration for our first sorting algorithm, called Insertion Sort. Insertion
Sort iterates through a list of records. Each record is inserted in turn at the correct
position within a sorted list composed of those records already processed
*/
const insertionSort = (arr) => {
  let n = arr.length;
  console.log({ arr })
  for (let i = 0; i <= n - 1; i++) {
    console.log("init i", i)
    let j = i;
    while (j >= 1 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp
      j--;
      console.log("runs")
    }
    console.log({ arr })
  }
  return arr
}

const arr = [13, 46, 24, 52, 20, 9];

console.log(insertionSort(arr))