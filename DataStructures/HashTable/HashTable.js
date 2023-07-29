export default class HashTable {
  PRIME_NUMBER = 31;

  constructor(size = 10) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let result = 0;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const value = key[i].charCodeAt(0) - 96;
      result = (result * this.PRIME_NUMBER + value) % this.keyMap.length;
    }

    return result;
  }

  get(key) {
    const index = this._hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }

    return undefined;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  keys() {
    return this.keyMap.reduce((acc, currentValue) => {
      currentValue.forEach(([key]) => {
        if (!acc.includes(key)) {
          acc.push(key);
        }
      })

      return acc;
    }, []);
  }

  values() {
    return this.keyMap.reduce((acc, currentValue) => {
      currentValue.forEach(([key, value]) => {
        if (!acc.includes(value)) {
          acc.push(value);
        }
      })

      return acc;
    }, []);
  }
}

// const hashTable = new HashTable();
