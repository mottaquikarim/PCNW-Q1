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
   if (typeof a == "number" && typeof b == "number") {
       return ((a + b )/2);
   }
        return "please input two numbers"
}
console.log(avgTwoNumbers(1, 2));
console.log(avgTwoNumbers(10, 12));
console.log( avgTwoNumbers("apples", "oranges"));
console.log( avgTwoNumbers(1000, "oranges"));
console.log( avgTwoNumbers(1000, true));
console.log( avgTwoNumbers(500, -200))



