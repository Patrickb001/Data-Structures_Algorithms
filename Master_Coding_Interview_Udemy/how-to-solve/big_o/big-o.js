// const performance = require("performance-now");

// const nemo = ["nemo"];
// const everyone = [
//   "dory",
//   "bruce",
//   "marlin",
//   "nemo",
//   "gill",
//   "bloat",
//   "nigel",
//   "squirt",
//   "darla",
//   "hank",
// ];

// const large = new Array(1000).fill("nemo");

function findNemo(array) {
  // let time1 = performance();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") console.log("Found NEMO");
  }
  // let time2 = performance();
  // console.log(`Call to find nemo took ${time2 - time1} milliseconds`);
}

// findNemo(large); // O(n) --> Linear Time

// const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]);
//   console.log(boxes[1]);
// }

// logFirstTwoBoxes(boxes); // O(2)

// function funChallenge(input) {
//   let a = 10; // O(1)
//   a = 50 + 3; // O(1)

//   for (let i = 0; i < input.length; i++) { // O(n)
//     anotherFunction(); // O(n)
//     let stranger = true; // O(n)
//     a++; // O(n)
//   }
//   return a; // O(1)
// } // BigO(3 + 4n) --> O(n)

// function anotherFunChallenge(input) {
//   let a = 5; O(1)
//   let b = 10; O(1)
//   let c = 50; O(1)
//   for (let i = 0; i < input; i++) { // O(n)
//     let x = i + 1; // O(n)
//     let y = i + 2; // O(n)
//     let z = i + 3; // O(n)
//   }
//   for (let j = 0; j < input; j++) { // O(n)
//     let p = j * 2; // O(n)
//     let q = j * 2; // O(n)
//   }
//   let whoAmI = "I don't know"; O(1)
// } // Big O(7n + 4) --> O(n)

// function findNemo(array) {
// let time1 = performance();
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === "nemo") {
//     console.log("Found NEMO");
//     break;
//   }
// }
// let time2 = performance();
// console.log(`Call to find nemo took ${time2 - time1} milliseconds`);
// }

// let array = [1, 2, 23, 4, 56, 7, 7, 8];

// function printFirstItemThenFirstHalfThenSayHi100Times(items) {
//   console.log(items[0]);

//   let middleIndex = Math.floor(items.length / 2);
//   let index = 0;

//   while (index < middleIndex) {
//     console.log(items[index]);
//     index++;
//   }

//   for (let i = 0; i < 100; i++) {
//     //O(100)
//     console.log("hi");
//   }
// } // O(1 + n/2 + 100) --> O(n)

// printFirstItemThenFirstHalfThenSayHi100Times(array);
// let boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let boxes2 = [1, 2, 3, 4];

// function compressBoxesTwice(boxes) {
//   boxes.forEach((box) => console.log(box));
//   boxes2.forEach((box) => console.log(box));
// } // O(2n) --> O(n)

// function compressTwoBoxesTwice(boxes, boxes2) {
//   boxes.forEach((box) => console.log(box));
//   boxes2.forEach((box) => console.log(box));
// } // O(n + m) // If these loops were nested it would be O(n * m)

// compressBoxesTwice(boxes);
// compressTwoBoxesTwice(boxes, boxes2);

// Log all pairs of array
// const boxes = [1, 2, 3, 4, 5];

// function allBoxPairs(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j]);
//     }
//   }
// } // O(n)* O(n) --> O(n^2)

// allBoxPairs(boxes);

// let nums = [1, 2, 3, 4, 5];

// function printAllNumbersThenAllPairSums(numbers) {
//   console.log("These are the numbers");

//   numbers.forEach((number) => console.log(number));

//   console.log("These are their sums");
//   numbers.forEach((firstNumber) => {
//     numbers.forEach((secondNumber) => {
//       console.log(firstNumber + secondNumber);
//     });
//   });
// } // O(n) + O(n^2) + O(2) --> O(n^2)

// printAllNumbersThenAllPairSums(nums);

// function boooo(n) {
//   for (let i = 0; i < n.length; i++) {
//     console.log("Booooo!");
//   }
// } // TC O(n) SC O(1)

// boooo([1, 2, 3, 6, 4]);

// function arrayOfHiNTimes(n) {
//   let hiArray = [];
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = "hi";
//   }
//   return hiArray;
// } // TC O(n) SC O(n)

// console.log(arrayOfHiNTimes(6));

// Exercise: Find users first tweet(1st), and most recent tweet(nth).
const tweets = [
  {
    tweet: "hi",
    date: 2012,
  },
  {
    tweet: "my",
    date: 2015,
  },
  {
    tweet: "teddy",
    date: 2021,
  },
];
array[0]; // O(1)
array[array.length - 1]; // O(1)

// Compare the date of tweets O(n^2)

// Big O Notation of .length? Depends on the language and how it is built
// In JS it is O(1)
