//Anatomy of Recursion
// let counter = 0;
// function inception() {
//   if (counter > 3) {
//     return "done!";
//   }
//   counter++;
//   console.log("hello");
//   inception();
// }

// console.log(inception());

// Factorial

// function factorialIterative(num) {
//   let factorial = 1;
//   for (let i = 2; i <= num; i++) {
//     factorial *= i;
//   }
//   return factorial;
// } // O(n)
// function factorialRecursive(num) {
//   if (num === 1) {
//     return 1;
//   }
//   return num * factorialRecursive(num - 1);
// } // O(n)

// 4 * factorialRecursive(4 - 1)
// 3 * factorialRecursive(3 - 1)
// 2 * factorialRecursive(2 - 1)
// 1 * factorialRecursive(1 - 1)
// 1 * 1
// 2 * 1
// 3 * 2
// 4 * 6 = 24

// console.log(factorialIterative(6));
// console.log(factorialRecursive(6));

// Fibonacci

function fibonacciIterative(n) {
  let [curr, prev, sum] = [1, 0, 0];
  if (n === 2 || n === 1) return 1;

  for (let i = 2; i <= n; i++) {
    sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return sum;
}
// function fibonacciIterative(n) {
//   if (n === 0) return 0;
//   else if (n === 1) return 1;
//   else if (n >= 2) {
//     let array = [0, 1];
//     for (let i = 2; i <= n; i++) {
//       array[i] = array[i - 2] + array[i - 1];
//     }
//     return array[n];
//   }
// }

// function fibonacciRecursive(n) {
//   if (n < 2) return n;

//   return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
// }

// console.log(fibonacciIterative(5));
// console.log(fibonacciRecursive(5));

// Reverse string with Recursion:
// function reverseString(str) {
//   if (str === "") return "";
//   else {
//     return (
//       str[str.length - 1] + reverseString(str.substring(0, str.length - 1))
//     );
//   }
// }

// reverseString(Pa)
// reverseString(P)
//
//

// console.log(reverseString("Pat"));
