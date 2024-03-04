/*
Time complexity: 
Worst Case:O(n^2)
Average Case:O(n^2)
Best Case:O(n^2)

Consider again the problem of sorting a pile of phone bills for the past year. Another intuitive approach might be to look through the pile until you find the bill for
January, and pull that out. Then look through the remaining pile until you find the
bill for February, and add that behind January. Proceed through the ever-shrinking
pile of bills to select the next one in order until you are done. This is the inspiration
for our last Θ(n
2
) sort, called Selection Sort. The ith pass of Selection Sort “selects” the ith smallest key in the array, placing that record into position i. In other
words, Selection Sort first finds the smallest key in an unsorted list, then the second
smallest, and so on. Its unique feature is that there are few record swaps. To find
the next smallest key value requires searching through the entire unsorted portion
of the array, but only one swap is required to put the record in place. Thus, the total
number of swaps required will be n − 1 (we get the last record in place “for free”)
*/
const selectionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i <= n - 2; i++) {
    let min = i;
    for (let j = i; j <= n - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp
  }
  return arr
}

const arr = [13, 46, 24, 52, 20, 9];

console.log(selectionSort(arr))