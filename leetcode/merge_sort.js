/*
Worst Case: O(n log n)
Average Case: O(n log n)
Best Case: O(n log n)
Space complexity: O(long n)

Divide and merge

*/

const mergeSortCallerFunction = (arr) => {
  let l = 0, h = arr.length - 1;
  const finalAnswer = mergeSort(arr, l, h);
  console.log({ arr })
  return arr
}
const mergeSort = (arr, l, h) => {

  console.log("mergeSort logs: printing arg", { arr, l, h })
  if (l === h) {
    console.log("mergeSort logs: return triggered", { l, h })
    return
  };
  let m = Math.floor((l + h) / 2);
  console.log("mergeSort logs: printing mid", { m })
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, h);
  merge(arr, l, m, h)
}

const merge = (arr, l, m, h) => {
  console.log("merge function logs: start", { arr, l, m, h })
  let temp = [], left = l, right = m + 1;
  // merging both sub arrays in temp
  while (left <= m && right <= h) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++
    } else {
      temp.push(arr[right]);
      right++
    }
  }
  // adding subarray 1 leftovers to temp
  while (left <= m) {
    temp.push(arr[left])
    left++
  }
  // adding subarray 2 leftovers to temp
  while (right <= h) {
    temp.push(arr[right])
    right++
  }
  console.log("merge function logs: printing temp", { temp, left, right })

  // temp is ready, move elements from temp to array
  for (let i = 0; i <= temp.length - 1; i++) {
    arr[i + l] = temp[i]
  }
  console.log("merge function logs: printing main array", { arr })

}



const arr = [20, 10, 30, 5];

console.log(mergeSortCallerFunction(arr))


