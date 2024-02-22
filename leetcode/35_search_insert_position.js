/*
Question: 35. Search Insert Position
Link: https://leetcode.com/problems/search-insert-position/

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return upperBounds(nums, target);
};

const upperBounds = (arr, target) => {
  if (arr[0] === target) {
    return 0
  }
  if (arr[arr.length - 1] === target) {
    return arr.length - 1
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid;
    } else {
      return mid
    }
  }
  if (arr[right] < target) {
    return right + 1
  }
  return right;
}
const nums = [1, 3, 5, 6], t = 5;

const result = searchInsert(nums, t);

console.log({ result })