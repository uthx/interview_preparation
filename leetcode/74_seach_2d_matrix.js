/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/*
  find co-ordinates in 2d matrix using index
  row = Math.floor(index/m)
  col = Math.floor(index%m)
*/
var searchMatrix = function (matrix, target) {
  let colLength = matrix.length;
  let rowLength = matrix[0].length
  console.log({ rowLength, colLength })
  let l = 0;
  let r = rowLength * colLength - 1
  let ans = false
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    console.log({ l, r, mid })
    let value = getValue(matrix, mid, rowLength);
    console.log({ value })
    if (value < target) {
      l = mid + 1;
    } else if (value > target) {
      r = mid - 1
    } else {
      ans = true;
      break;
    }
  }
  return ans;
};

const getValue = (array, index, rowLength) => {
  const row = Math.floor(index / rowLength)
  const col = Math.floor(index % rowLength)
  console.log({ row, col, index, rowLength })
  return array[row][col]
}

// let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13;
let matrix = [[1]], target = 2
const obj = {};
matrix.flat().forEach((el, index) => {
  obj[index] = el
})
console.log({ obj })

const result = searchMatrix(matrix, target);
console.log({ result })

