/*
  @func avgTwoNumbers
  @param a {number}
  @param b {number}
  @returns {number}
  @desc - computes average of two numbers
          formular for average: a + b / 2
  @example avgTwoNumbers(1,2); // 1.5
*/

const avgTwoNumbers = (a,b) => (a + b) / 2;

console.log(avgTwoNumbers(1,2), 'Should return 1.5');
console.log(avgTwoNumbers(3,4), 'Should return 3.5');