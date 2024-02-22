/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openMap = {
    "{": "}",
    "(": ")",
    "[": "]"
  }
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    // identify the type
    // if open: push, else pop stack and validate
    // if validation fails return false
    const char = s[i];
    if (openMap[s[i]]) {
      // it's open
      stack.push(char)
    } else {
      // it's close
      if (openMap[stack.pop() !== s[i]]) return false

    }

  }

  return stack.length === 0
  // if valid input, stack should be empty
};

s = "()[]{}"
const result = isValid(s);
console.log({ result })