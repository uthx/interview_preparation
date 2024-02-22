/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    console.log({i})
    const diff = target - nums[i];
    const indexAt = hashMap.get(diff);
    console.log({ indexAt })
    if (indexAt !== undefined) {
      return [indexAt, i]
    }
    hashMap.set(nums[i], i)
  }
};


const nums = [2,7,11,15], target = 9

const result = twoSum(nums, target);

console.log({result})