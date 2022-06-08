// let user = {
//   age: 54,
//   name: "kylie",
//   magic: true,
//   scream() {
//     console.log("Aghhhh!");
//   },
// };

// user.spell = "abra kadabra"; // O(1)
// console.log(user);
// user.scream(); // O(1)

// const a = new Map();
// const b = new Set();

// Exercise: Implement a Hash Table
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let newItem = [key, value];
    let newItemIndex = this._hash(key);
    this.data[newItemIndex] = newItem;
  }
  get(key) {
    let newItemIndex = this._hash(key);
    return this.data[newItemIndex];
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
