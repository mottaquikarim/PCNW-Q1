/*
  @func avgTwoNumbers
  @param a {number}
  @param b {number}
  @returns {number}
  @desc - computes average of two numbers
          formular for average: a + b / 2
  @example avgTwoNumbers(1,2); // 1.5
*/

required = () => { throw new Error }

avgTwoNumbers = (a=required(),b=required()) => (a + b) / 2

try {
    console.log(avgTwoNumbers(1,2))
} catch (error) {
    console.log(error)
}