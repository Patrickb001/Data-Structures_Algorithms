// const strings = ["a", "b", "c", "d"];
// // 4 items (each takes up 4 shelves) on a 32 bit system would take up 16 bytes of storage

// strings[2]; //O(1)

// //push
// strings.push("e"); // O(1)

// //pop
// strings.pop(); // O(1)
// strings.pop();

// //unshift
// strings.unshift("x"); // O(n)

// //splice
// strings.splice(2, 0, "alien"); //O(n)

// //shift
// strings.shift(); //O(n)

// console.log(strings);

///////////// Building an Array(Implement):
// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   get(index) {
//     return this.data[index];
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }
//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   delete(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//     return item;
//   }

//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const newArray = new MyArray();
// newArray.push("hi");
// newArray.push("you");
// newArray.push("!");
// newArray.delete(2);
// console.log(newArray);

// Exercise: Reverse A String
// Hi my name is Patrick
// kcirtap si eman ym ih

// function reverse(str) {
//   if (!str || str.length < 2 || typeof str !== "string") return;
//   // Try to turn each character in the string into it's own array
//   let strArray = str.split("");
//   let reversedArray = [];
//   // Loop through each character in the string backwards
//   for (let i = strArray.length - 1; i >= 0; i--) {
//     // Push each character into a new array
//     reversedArray.push(strArray[i]);
//   }
//   // Turn reversed array into a string
//   let reverseString = reversedArray.join("");
//   // return the reverse string
//   return reverseString;
// }
// // Wrote alternatives made in the solution, next time I'll try to find alternatives before watching solution
// function reverse2(str) {
//   return str.split("").reverse().join("");
// }

// const reverse3 = (str) => str.split("").reverse().join("");

// const reverse4 = (str) => [...str].reverse().join("");

// console.log(reverse4("Hi my name is Patrick"));
// Turning the array was an unnecessary step
// Doesn't really matter how I come to a solution as long as the interviewer knows that I can understand why I am taking each
//step and the pros and cons to each solution

// Exercise 2: Merge Sorted Arrays

function mergeSortedArrays(arr1, arr2) {
  //Check type ofs for parameters
  if (typeof arr1 !== "object" || typeof arr2 !== "object") return;
  if (arr1.length === 0 && arr2.length !== 0) return arr2;
  if (arr1.length !== 0 && arr2.length === 0) return arr1;
  if (arr1.length === 0 || arr2.length === 0) return;
  // Create mergedArray
  let mergedArray = [];
  // Loop through array 1 and push items to mergedArray
  arr1.forEach((element) => {
    mergedArray.push(element);
  });
  // Loop through array 2 and push items to mergedArray
  arr2.forEach((element) => {
    mergedArray.push(element);
  });
  // Sort and return merged array
  return mergedArray.sort((a, b) => a - b);
}

function mergeSortedArrays2(array1, array2) {}

const mergeSortedArrays3 = (array1, array2) =>
  [...array1, ...array2].sort((a, b) => a - b);

const mergeSortedArrays4 = (array1, array2) =>
  array1.concat(array2).sort((a, b) => a - b);

console.log(mergeSortedArrays4([0, 3, 4, 31], [4, 6, 30]));
