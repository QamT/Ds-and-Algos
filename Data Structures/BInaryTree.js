class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// A data structure that consists of nodes in a parent/child relationship

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value, node = this.root) {
    const newNode = new Node(value);

    if (!node) { this.root = newNode; return this }
    const direction = value < node.value ? 'left' : 'right';
    !node[direction] ? node[direction] = newNode : this.insert(value, node[direction]);

    return this;
  }

  find(val) {
    const helper = node => {
      if (val === node.value) return true;
      const dir = val < node.value ? 'left' : 'right';
      return node[dir] ? helper(node[dir]) : false;
    }

    return !this.root ? false : helper(this.root);
  }

  BFS(queue = [this.root], data = []) {
    const [node] = queue;

    if (!node) return data;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    queue.shift();
    data.push(node.value);

    return this.BFS(queue, data);
  }

  DFSPreOrder(node = this.root) {
    const data = [node.value];

    if (node.left) data.push(...this.DFSPreOrder(node.left));
    if (node.right) data.push(...this.DFSPreOrder(node.right))

    return data;
  }

  DFSPostOrder(node = this.root, data = []) {
    if (node.left) this.DFSPostOrder(node.left, data);
    if (node.right) this.DFSPostOrder(node.right, data);
    data.push(node.value);
    return data;
  }

  DFSInOrder(node = this.root, data = []) {
    if (node.left) this.DFSInOrder(node.left, data);
    data.push(node.value);
    if (node.right) this.DFSInOrder(node.right, data);
    return data;
  }
}

module.exports = BinaryTree