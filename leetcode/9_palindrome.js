let  x = 123;

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if(x < 0 || ((x % 10 ===0) && x !== 0)) {
    return false
  }
  let reversedNumber = 0;
  let originalNumber = x;
  while (originalNumber > 0) {
    // get last digit out

    const lastDigit = originalNumber % 10;
    console.log({lastDigit, reversedNumber})
    // update reversedNumber 
    reversedNumber = (reversedNumber * 10) + lastDigit;

    // remove the last digit from originalNumber
    originalNumber = Math.floor(originalNumber / 10)
  }
  // validate
  console.log(reversedNumber)
  return x === reversedNumber
};

const result = isPalindrome(121);
console.log({result})