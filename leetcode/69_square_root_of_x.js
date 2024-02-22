/*
Question: 69. Sqrt(x)
Link: https://leetcode.com/problems/sqrtx/description/

*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  let l = 1;
  let r = x;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let product = mid * mid;
    console.log({l,r,mid,product})
    if (product < x) {
      l = mid + 1;

    } else if (product > x) {
      r = mid - 1;
    } else {
      return mid
    }
  }
  console.log({r})
  return r;
};



console.log(mySqrt(8))