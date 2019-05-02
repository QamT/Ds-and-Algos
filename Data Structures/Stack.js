const Node = require('./Node');

// Last in First out data structure

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.first) this.first = this.last = node;
    else node.next = this.first, this.first = node;

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    const node = this.first;
    if (this.size === 1) this.first = this.last = null;
    else this.first = node.next;
    this.size--;

    return node.value;
  }

  sort() {
    const s2 = new Stack();

    while (this.first) {
      const temp = this.pop();

      while (s2.first && s2.first.val > temp) {
        this.push(s2.pop())
      }

      s2.push(temp);
    }
  }
}

module.exports = Stack;