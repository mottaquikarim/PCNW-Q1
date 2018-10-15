/*
  @func avgTwoNumbers
  @param a {number}
  @param b {number}
  @returns {number}
  @desc - computes average of two numbers
          formular for average: a + b / 2
  @example avgTwoNumbers(1,2); // 1.5
*/

const avgTwoNumbers = (a, b) => {
    return (a+b)/2;
}

//test
console.log(avgTwoNumbers(1, 2), 1.5);
console.log(avgTwoNumbers(2, 4), 3);