/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] === target) return m
    // check if left side is sorted
    if (nums[l] <= nums[m]) {
      // find of target lies in this left range
      if (nums[l] <= target && target < nums[m]) {
        // target is on the left side
        r = m - 1
      } else {
        // target is on the right side
        l = m + 1
      }
    } else {
      // right side is sorted
      // find if target is in the right range
      if (nums[m] < target && target <= nums[r]) {
        // target is in the right side
        l = m + 1
      } else {
        // target is in the left side
        r = m - 1
      }
    }
  }
  return -1
};