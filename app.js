/*
  @func avgTwoNumbers
  @param a {number}
  @param b {number}
  @returns {number}
  @desc - computes average of two numbers
          formular for average: a + b / 2
  @example avgTwoNumbers(1,2); // 1.5
*/

const avgTwoNumber = (a, b) => {
    return (a + b)/2
}

console.log(avgTwoNumber(2, 2)) // 2
console.log(avgTwoNumber(6, 2)) // 4
console.log(avgTwoNumber(3, 2)) // 2.5