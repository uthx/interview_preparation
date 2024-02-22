/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  // case: if only 1 element in array
  if(nums.length === 1) {
      return 0
  }
  
  // case: check peak in first 
  if(nums[0] > nums[1]) {
      return 0
  }
  // case: check peak in last element
   if(nums[nums.length -1] > nums[nums.length -2]) {
      return nums.length -1
  } 
  let l = 1;
  let r = nums.length -2 ;
  while(l <= r ) {
    let m = Math.floor((l + r) /2);
    if(arr[m] > arr[m -1] && arr[m] > arr[m +1]) {
      return m
    }
    if(arr[m] > arr[m -1]) {
      // increasing curve;
      l = m +1
    } else {
      r = m -1  
    }
  }  
  return -1;
};
console.log(findPeakElement([3,4,3,2,1]))