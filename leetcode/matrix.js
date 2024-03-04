let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

// find sum of all elements in a matrix

const sumMatrix = (arr) => {
  let count = 0;
  let row = arr.length;
  let col = arr[0].length;
  for (let i = 0; i <= row - 1; i++) {
    for (let j = 0; j <= col - 1; j++) {
      // console.log(`row: ${i}, col: ${j} value: ${arr[i][j]}`)
      count += arr[i][j]
    }
  }
  // console.log({count})
}

sumMatrix(arr)

// traverse diagonal of matrix, input is square matrix
const diagonal = (arr) => {
  let m = arr.length;
  let n = arr[0].length;
  let i = m - 1;
  let colCount = 0;
  let diagonal = [];
  while (i >= 0) {
    // traversing all rows
    diagonal.push(arr[i][colCount]);
    i--;
    colCount++

  }
  // console.log({diagonal})
}

diagonal(arr)
// traverse diagonal from last column
const diagonal2 = (arr) => {
  let m = arr.length;
  let n = arr[0].length;
  let colStart = n - 1;
  let i = m - 1;
  let diagonal = [];
  while (i >= 0) {
    diagonal.push(arr[i][colStart]);
    i--;
    colStart--
  }
  // console.log(diagonal)
}

diagonal2(arr)

// diagonal + all elements on top of diagonal

const d3 = (arr) => {
  let m = arr.length;
  let n = arr[0].length;
  let rowStart = 0;
  let colStart = 0;
  let topCount = 0;
  let bottomCount = 0;
  while (rowStart <= m - 1) {
    let rowRange = rowStart
    let colRange = colStart;
    while (colRange <= n - 1) {
      topCount += arr[rowRange][colRange];
      colRange++;
    }
    colRange = colStart
    while (colRange >= 0) {
      bottomCount += arr[rowRange][colRange];
      colRange--;
    }

    rowStart++;
    colStart++
  }
  // console.log({topCount, bottomCount})
}

d3(arr)

// transpose of matrix: change rows to columns & col to rows
const transpose = (arr) => {
  let m = arr.length;
  let transpose = new Array(m);
  for (let i = 0; i <= m - 1; i++) {
    transpose[i] = new Array();
  }
  for (let i = 0; i <= m - 1; i++) {
    for (let j = 0; j <= m - 1; j++) {
      transpose[j].push(arr[i][j])
    }
  }
  // console.log({transpose})
}
transpose(arr)


// non square matrix, m !== n
const d4 = (arr) => {
  let m = arr.length;
  let n = arr[0].length;
  let map = {};
  // collection diagonal values in map
  for (let i = 0; i <= m - 1; i++) {
    for (let j = 0; j <= n - 1; j++) {
      if (map[i - j] !== undefined) {
        map[i - j].push(arr[i][j])
      } else {
        map[i - j] = [arr[i][j]]
      }
    }
  }
  // sort the items
  for (const item in map) {
    map[item] = map[item].sort((a, b) => a - b);
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      arr[i][j] = map[i - j].pop();
      console.log(`i: ${i}, j: ${j}, value: ${arr[i][j]}`)
    }
  }
  console.log({ map })
  console.log({ arr })
  return arr
}
let d4Arr = [[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]]
d4(d4Arr)
