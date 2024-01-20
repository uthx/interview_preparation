class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key?.length, 100); i++) {
      let character = key[i];
      let charIndex = character.charCodeAt(0) - 91;
      total = (total * WEIRD_PRIME + charIndex) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let keyHash = this._hash(key);
    let data = [key, value];
    if (this.keyMap[keyHash] === undefined) {
      this.keyMap[keyHash] = [data];
    } else {
      this.keyMap[keyHash].push(data);
    }
  }
  get(key) {
    console.log("=> get triggered");

    let keyHash = this._hash(key);
    let storedData = this.keyMap[keyHash];
    if (storedData === null) return "Invalid key";
    if (storedData.length === 1) return storedData[0][1];
    let value;
    for (let i = 0; i < storedData.length; i++) {
      if (storedData[i][0] === key) {
        value = storedData[i][1];
        break;
      }
    }
    if (value === undefined) return `Invalid key: ${key}`;
    return value;
  }
  keys() {
    const keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  values() {
    const valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

const hashTable = new HashTable();
hashTable.set("red", "#rd");
hashTable.set("red", "#rd");
hashTable.set("yellow", "#rahul");
console.log(hashTable.values());
console.log(hashTable.keys());
console.log("getResp", hashTable.get("yellow"));
console.log(hashTable.keyMap);
