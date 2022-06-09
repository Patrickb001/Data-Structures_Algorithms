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

function factorialIterative(num) {
  let factorial = 1;
  for (let i = 0; i <= num; i++) {
    factorial *= num;
    num--;
  }
  return factorial;
}
function factorialRecursive(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorialRecursive(num - 1);
}

// 4 * factorialRecursive(4 - 1)
// 3 * factorialRecursive(3 - 1)
// 2 * factorialRecursive(2 - 1)
// 1 * factorialRecursive(1 - 1)
// 1 * 1
// 2 * 1
// 3 * 2
// 4 * 6 = 24

console.log(factorialIterative(4));
// console.log(factorialRecursive(4));
