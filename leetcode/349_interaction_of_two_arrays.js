/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const nums1Array = nums1.toSorted((a, b) => a - b);
  const nums2Array = nums2.toSorted((a, b) => a - b);
  const result = new Set();
  let num1Length = nums1Array.length;
  let num2Length = nums2Array.length;
  let i = 0;
  let j = 0;
  // two pointer logic
  while (i < num1Length && j < num2Length) {
    if (nums1Array[i] < nums2Array[j]) {
      i++
    } else if (nums2Array[j] < nums1Array[i]) {
      j++
    } else {
      // values are equal
      result.add(nums1Array[i]);
      i++;
      j++;
    }
  }
  return [...result]
}


const nums1 = [1, 2, 2, 1], nums2 = [2, 2]
const result = intersection(nums1, nums2);
console.log({result})



/*
           i
1 2 2 1 => 1 1 2 2
           j
2 2     => 2 2


*/