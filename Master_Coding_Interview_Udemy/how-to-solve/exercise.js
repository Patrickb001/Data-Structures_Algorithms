// Given 2 arrays create a function that returns t/f when arrays contain matching item

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "u"];
// const array3 = ["z", "y", "x"];

// function doesItemMatch(arr1, arr2) {
//   // Loop through each item in the first array
//   for (let i = 0; i < arr1.length; i++) {
//     let firstArrayItem = arr1[i];
//     // Create a second loop for the second array's items
//     for (let j = 0; j < arr2.length; j++) {
//       // For every iteration of the first loop compare all the items of the second array
//       let secondArrayItem = arr2[j];
//       // Return true for a match
//       if (firstArrayItem === secondArrayItem) return true;
//     }
//   }
//   // Return false
//   return false;
// }

// console.log(doesItemMatch(array1, array3));

// I automatically assumed because we had two arrays our bigO time would be n^2, but I did not consider
// The fact that the arrays could be off different sizes. And I have to review my notes, but I believe
// That would make our bigO time actually n*m when te arrays are not the same size.
// (Q to ask would be does our arrays have a size limit and are the arrays going to be of equal length)

// Different Solution

// const array1 = ["a", "b", "z", "c", "x", "a", "b", "d"];
// const array2 = ["z", "y", "u"];
// const array3 = ["z", "y", "x"];

/* array1 => obj {
  a: true,
  b: true,
  c: true,
  x: true
}
// array2[index] === obj.properties

// Create a function that converts our first array into an object
// Pair each item in the array with a value of true
// Create a second function/for loop
// Compare each item in the second array to the keys of the object
// Return true when a match is found
// Return false otherwise
*/

// Create a function that converts our first array into an object
function mapArrayToObject(array) {
  let object = {};
  // Pair each item in the array with a value of true
  array.forEach((element) => (object[element] = true));
  return object;
} // O(n)

// Create a second function/for loop
function doesItemMatch(array1, array2) {
  let objectItems = mapArrayToObject(array1);
  // Set returning value to false by default
  let matchingItem = false;

  // Compare each item in the second array to the keys of the object
  array2.find((element) => {
    // Return true when a match is found
    return objectItems[element] ? (matchingItem = true) : null;
  });
  return matchingItem;
} // O(n)

// console.log(doesItemMatch(array2, array1));

// I'm contemplating changing the initial function I have created for this alternate solution
// Because I have created two separate functions and I would have to change the name in multiple places
// in order to compare different arrays. I think I will refactor my second function so that it
// receives two arrays and calls the function that will convert the array into an object.
// That way it just saves time as far as having to change names in different places.
// This will cause my seconds function to depend on my first function and its functionality
// It kind of does anyway so I think it will be okay. Like the feel of being able to pass in two arrays more.

////////////// Google Interview Practice
// Take an collection of numbers and find the matching pair that equals the sum given

const array1 = [1, 2, 3, 9];
const array2 = [1, 2, 4, 4, 6, 5];

function findSum(array, sum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) return true;
    }
  }
  return false;
} // O(n^2)

function findSum2(array, sum) {
  let set = new Set();

  for (let i = 0; i < array.length; i++) {
    let newSum = sum - array[i];
    if (set.has(array[i])) return true;

    set.add(newSum);
  }
  return false;
}

console.log(findSum(array2, 9));
