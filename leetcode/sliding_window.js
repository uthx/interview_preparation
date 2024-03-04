let arr = [10, 12, 5, 20, 10, 10, 4];

console.log(arr.length)


const findMaxTotal = (arr, k) => {
  let n = arr.length
  if (n < k) {
    return -1
  }
  let total = sum(arr, k);
  let maxTotal = total;
  console.log({ total, maxTotal })
  for (let i = 0; i < n - k; i++) {
    total -= arr[i];
    total += arr[i + k];
    maxTotal = Math.max(maxTotal, total)
  }
  return maxTotal

}

const sum = (arr, k) => {
  let total = 0;
  for (let i = 0; i < k; i++) {
    total += arr[i]
  }
  return total
}

console.log(findMaxTotal(arr, 3))