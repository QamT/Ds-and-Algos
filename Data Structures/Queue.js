const Node = require('./Node');

// First in First out data structure

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);

    if (!this.first) this.first = this.last = node;
    else this.last.next = node, this.last = node;
    this.size++;

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    const node = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;

    return node.value;
  }
}

module.exports = Queue;