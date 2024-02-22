/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        console.log({l,r,m})
        if (nums[m] > nums[r]) {
            l = m + 1
        } else if (nums[m] < nums[r]) {
            r = m
        } else {
            l++;
            r++;
        }
    }
    return nums[l]
};

console.log(findMin([3,3,1,3]))