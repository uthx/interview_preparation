const binarySearch = (arr, t) => {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (t < arr[mid]) {
      r = mid - 1
    } else if (t > arr[mid]) {
      l = mid + 1;
    } else {
      return mid
    }
  }
  return -1;
}

const arr = [5, 6, 8, 10, 13], t = 13;

const result = binarySearch(arr, t);

console.log({ result })