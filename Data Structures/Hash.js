// Hash tables store key-value pairs

class Hash {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (const val of this.keyMap[index]) if (val[0] === key) return val[1];
    }
    return undefined;
  }

  getAll(index) {
    return this.keyMap.reduce((a, v) => {
      if (v) a.push(...v.map(a => a[index]));
      return a;
    }, [])
  }

  values() {
    return this.getAll(1);
  }

  keys() {
    return this.getAll(0)
  }
}

module.exports = Hash;