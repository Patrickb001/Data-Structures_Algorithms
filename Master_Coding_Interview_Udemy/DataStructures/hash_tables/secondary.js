// Hash Function

// const hash = (key, index) => {
//   let hashValue = 0;
//   for (let char of key) {
//     hashValue += char.charCodeAt(0) - 96;
//   }
//   return hashValue % index;
// };
// Problems w/ current hf
/* 
Only allows strings
Not constant time - linear in key length
Could be a little more random
*/

// const hash = (key, index) => {
//   let hashValue = 0;
//   let WEIRD_PRIME = 31;
//   for (let i = 0; i < Math.min(100, key.length); i++) {
//     let char = key[i];
//     let charCodeValue = char.charCodeAt(0) - 96;
//     hashValue += hashValue * WEIRD_PRIME + charCodeValue;
//   }

//   return hashValue % index;
// };
// console.log(hash("magenta", 10));
// console.log(hash("red", 10));
// console.log(hash("orange", 10));
// console.log(hash("hello", 10));
// console.log(hash("magenta", 13));
// console.log(hash("red", 13));
// console.log(hash("orange", 13));
// console.log(hash("hello", 13));

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let hashValue = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(100, key.length); i++) {
      let char = key[i];
      let charCodeValue = char.charCodeAt(0) - 96;
      hashValue += hashValue * WEIRD_PRIME + charCodeValue;
    }

    return hashValue % this.keyMap.length;
  }
  set(key, value) {
    const hashValue = this._hash(key);
    if (this.keyMap[hashValue] == undefined) {
      this.keyMap[hashValue] = [];
    }
    this.keyMap[hashValue].push([key, value]);
  }
  get(key) {
    const hashValue = this._hash(key);
    // console.log(this.keyMap[hashValue]);
    if (this.keyMap[hashValue] == undefined) return undefined;
    if (this.keyMap[hashValue].length === 1)
      return this.keyMap[hashValue][0][1];

    for (let foundKey of this.keyMap[hashValue]) {
      if (foundKey[0] === key) return foundKey[1];
    }
  }
  keys() {
    const foundObject = {};
    const keyList = [];
    // console.log(this.keyMap[4]);
    for (let i = 0; i < this.keyMap.length; i++) {
      let keys = this.keyMap[i];

      // finds a match
      if (keys !== undefined) {
        // only one key/value pair
        if (keys.length === 1) {
          if (!foundObject[keys[0][0]]) {
            foundObject[keys[0][0]] = true;
            keyList.push(keys[0][0]);
          }
        }
        // loop through for multiple key/value pairs
        if (keys.length > 1) {
          for (let foundKey of keys) {
            if (!foundObject[foundKey[0]]) {
              foundObject[foundKey[0]] = true;
              keyList.push(foundKey[0]);
            }
          }
        }
      }
    }
    return keyList;
  }

  values() {
    const foundObject = {};
    const valuesList = [];
    // console.log(this.keyMap[4]);
    for (let i = 0; i < this.keyMap.length; i++) {
      let values = this.keyMap[i];
      // finds a match
      if (values !== undefined) {
        // Only one key/value pair
        if (values.length === 1) {
          // is value doesn't already exist add to list
          if (!foundObject[values[0][1]]) {
            foundObject[values[0][1]] = true;
            valuesList.push(values[0][1]);
          }
        }

        // multiple key/value pairs
        if (values.length > 1) {
          for (let foundValue of values) {
            // is value doesn't already exist add to list
            if (!foundObject[foundValue[1]]) {
              foundObject[foundValue[1]] = true;
              valuesList.push(foundValue[1]);
            }
          }
        }
      }
    }
    return valuesList;
  }
}

const myHashTable = new HashTable(17);

myHashTable.set("maroon", "#800000");
myHashTable.set("yellow", "#FF0");
myHashTable.set("olive", "#80800");
myHashTable.set("salmon", "#FA8072");
myHashTable.set("lightcoral", "#F08080");
myHashTable.set("mediumvioletred", "#C71585");
myHashTable.set("plum", "#DA0D");
// myHashTable.get("pink");
// console.log(myHashTable.get("pin"));
// console.log(myHashTable.get("plum"));
console.log(myHashTable.keyMap);
console.log(myHashTable.keys());
console.log(myHashTable.values());
