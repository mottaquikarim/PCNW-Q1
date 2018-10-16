# Quiz 1

1. Fork this repo
2. Pull it down to your machine
3. Create a branch off of master
3. In terminal, in your branch, create a file called app.js
4. Implement the following function

```
/*
  @func avgTwoNumbers
  @param a {number}
  @param b {number}
  @returns {number}
  @desc - computes average of two numbers
          formular for average: a + b / 2
  @example avgTwoNumbers(1,2); // 1.5
*/
```

5. Push your branch to your fork
6. Open PR

// Decloration function
function avgTwoNumbers (number1, number2) {
return (number1 + number2) / 2
};

console.log(avgTwoNumbers(5, 7));

// Express Function / Anonomous function

const avgTwoNumbers = function (number1, number2) {
return (number1 + number2) / 2
};

// Fat Arrow Function 

const avgTwoNumbers = (number1, number2) => (number1 + number2) / 2


