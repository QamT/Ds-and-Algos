const Node = require('./Node');

// A Linked List consists of nodes, where each node has a value and a pointer to another node or null

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) { this.head = this.tail = null };

    return current;
  }

  shift() {
    if (!this.head) undefined;

    const prevHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) this.tail = null;

    return prevHead;
  }

  unshift(val) {
    const node = new Node(val);

    node.next = this.head;
    this.head = node;
    if (!this.head.next) this.tail = this.head;
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let node = this.head;
    let counter = 0;

    while (counter < index) {
      node = node.next;
      counter++;
    }

    return node;
  }

  set(index, val) {
    const node = this.get(index);

    if (!node) return false;
    node.val = val;

    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    const node = new Node(val);
    const prev = this.get(index - 1);

    node.next = prev.next;
    prev.next = node;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const prev = this.get(index - 1);
    const removed = prev.next;

    prev.next = prev.next.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

module.exports = SinglyLinkedList;