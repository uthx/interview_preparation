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
}

const hashTable = new HashTable();
hashTable.set("red", "#12323233");
hashTable.set("red", "#12323233");
hashTable.set("yellow", "#12323233");

console.log("getResp", hashTable.get("yellow"));
console.log(hashTable.keyMap);
