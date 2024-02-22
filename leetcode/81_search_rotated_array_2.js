/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let ans;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] === target) {
      ans = m;
      break;
    }
    // found duplicates, so can't determine which side is sorted, hence reduce search space
    if (nums[l] === nums[m] && nums[r] === nums[m]) {
      l++;
      r--;
    }
    else if (nums[l] <= nums[m]) {
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
  return ans !== undefined
};