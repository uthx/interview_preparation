/*
Time complexity: 
Worst Case:O(n^2)
Average Case:O(n^2)
Best Case:O(n)

Bubble Sort consists of a simple double for loop. The first iteration of the
inner for loop moves through the record array from bottom to top, comparing
adjacent keys. If the lower-indexed key’s value is greater than its higher-indexed
neighbor, then the two values are swapped. Once the smallest value is encountered,
this process will cause it to “bubble” up to the top of the array. The second pass
through the array repeats this process. However, because we know that the smallest
value reached the top of the array on the first pass, there is no need to compare
the top two elements on the second pass. Likewise, each succeeding pass through
the array compares adjacent elements, looking at one less value than the preceding
pass.


Simple: In each iteration, push the heaviest element to the end of the array
*/


const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = n - 1; i >= 1; i--) {
    let isSwapped = false
    for (let j = 0; j <= i - 1; j++) {
      console.log({ j, i })
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp
        isSwapped = true
      }
    }
    if(!isSwapped) break
    console.log({ arr })
  }
  return arr
}

const arr = [1, 5, 3, 20];

console.log(bubbleSort(arr))
