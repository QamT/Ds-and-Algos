class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}


// A Doubly Linked List consists of nodes, where each node has a value, a pointer to the previous node, and a pointer to the next node

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const removed = this.tail;

    if (this.length === 1) this.head = this.tail = null;
    else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }
    this.length--;

    return removed;
  }

  shift() {
    if (!this.head) return undefined;
    const removed = this.head;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = removed.next;
      this.head.prev = null;
      removed.next = null;
    }
    this.length--;

    return removed;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) this.head = this.tails = node;
    else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;

    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const node = new Node(val);
    const prev = this.get(index - 1);
    const after = prev.next;

    node.prev = prev, node.next = after;
    prev.next = node, after.prev = node;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const node = this.get(index);

    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = node.next = null;
    this.length--;

    return node;
  }
}

module.exports = DoublyLinkedList;