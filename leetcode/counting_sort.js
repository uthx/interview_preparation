/*
Time complexity:
Best Case: O(n+k)
Average Case: O(n+k)
Worst Case: O(n+k)

Space complexity:
Best Case: O(n+k)
Average Case: O(n+k)
Worst Case: O(n+k)


*/

const countingSort = (arr) => {
  //find max

  let max = Math.max(...arr);
  let outputArray = new Array(arr.length).fill(0)
  // init count of size max+1 and fill with 0

  let count = new Array(max + 1).fill(0);

  // count occurrences of each element in array and map the result to count's index
  for (let i = 0; i <= arr.length - 1; i++) {
    count[arr[i]]++
  }
  console.log({ count })
  // update count with prefix sum
  for (let i = 1; i <= count.length - 1; i++) {
    count[i] += count[i - 1];
  }
  console.log({ count })

  // traverse original array and build output array
  for (let i = 0; i <= arr.length - 1; i++) {
    outputArray[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--
  }
  // for(let i=0; i <= arr.length-1; i++) {
  //   arr[i] = outputArray[i]
  // }
  console.log({ outputArray })
}

let input = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(input))