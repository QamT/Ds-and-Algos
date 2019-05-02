const {
  Node,
  SinglyLinkedList,
  DoublyLinkedList,
  Stack,
  Queue,
  BinaryTree,
  Hash,
  Graph
} = require('./Data Structures');

const c = console.log;

// var isAnagram = function (s, t) {
//   [...s].sort().join('') === [...t].sort().join('');
// };

// c(isAnagram('car', 'rac'))

// // c(missingNumber([3, 0, 1]))

// Array.prototype.reducer = function (cb, acc = this[0]) {
//   for (let i = acc === this[0] ? 1 : 0; i < this.length; i++) {
//     acc = cb(acc, this[i])
//   }

//   return acc;
// }
// Array.prototype.mapa = function (cb) {
//   const result = [];

//   for (const [i, val] of this.entries()) {
//     result.push(cb(val, i));
//   }

//   return result;
// }

// Object.prototype.creata = function (proto) {
//   function Fn() { };
//   Fn.prototype = proto;
//   return new Fn();
// }
// function test() { }

// // const obj = { a: 'bruh' }
// // const t = Object.creata(obj)
// // c(t.a)
// var majorityElement = function (nums) {
//   const map = new Map();

//   for (const num of nums) {
//     map.set(num, (map.get(num) || 0) + 1);
//   }

//   for (const [key, val] of map) {
//     c(val, nums.length - 1)
//     if (val > nums.length - 1) return key;
//   }
// };

// // c(majorityElement([3, 2, 3]))

// var merge = function (nums1, m, nums2, n) {
//   return [...nums1.slice(0, nums1.length - m), ...nums2].sort((a, b) => a - b)
// };

// c(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6],3))


// var generate = function (numRows) {
//   if (!numRows) return [];

//   const pascal = [[1]];

//   for (let i = 1; i < numRows; i++) {
//     const prev = pascal[pascal.length - 1];
//     const sLeft = [...prev, 0];
//     const sRight = [0, ...prev];
//     const row = sLeft.map((v, i) => v + sRight[i]);
//     pascal.push(row)
//   }

//   return pascal;
// };
// let t0 = performance.now();
// generate(5);
// let t1 = performance.now();
// c(t1 - t0)

// const secondSmallest = arr => {
//   let min = second = Number.MAX_SAFE_INTEGER;

//   for (const num of arr) {
//     if (num < min) second = min, min = num;
//     else if (num < second) second = num;
//   }

//   return second;
// }

// c(secondSmallest([1, 5, 6, 3, 6]))

// const merge = (arr, arr2) => {
//   const res = [];
//   let i = j = 0;

//   // while i and j less than arr.length
//   // if arr1 < arr2 val push arr1 val otherwise arr2 val

//   // add in rest of values since already sorted and then return
// }

// const bind = (fn, context) => (...args) => fn.apply(context, args);

// class Stack1 {
//   constructor() {
//     this.stack = [];
//     this.size = 0;
//   }

//   push(val) {
//     this.stack.push(val);
//     ++this.size;
//   }

//   pop() {
//     return this.size && this.size-- && this.stack.pop();
//   }

//   top() {
//     return this.size > 0 ? this.stack[this.size - 1] : null;
//   }
// }

// class Queue1 {
//   constructor() {
//     this.queue = new Stack1();
//   }

//   enqueue(val) {
//     this.queue.push(val);
//   }

//   dequeue() {
//     if (!this.queue.size) return null;
//     const temp = new Stack1();

//     while (this.queue.size > 1) temp.push(this.queue.pop());
//     const value = this.queue.pop();
//     while (temp.size > 0) this.queue.push(temp.pop());

//     return value;
//   }

//   top() {
//     return this.queue.stack[0];
//   }

//   reverse(k) {
//     const temp = new Stack1();
//     let amount = k;

//     while (k--) temp.push(this.dequeue());
//     while (temp.size > 0) this.enqueue(temp.pop());
//     while (amount--) this.enqueue(this.dequeue());
//   }
// }

// class Queue1 {
//   constructor() {
//     this.q1 = new Stack1();
//     this.q2 = new Stack1();
//   }

//   enqueue(val) {
//     this.q1.push(val);
//   }

//   dequeue() {
//     while (this.q1.top()) this.q2.push(this.q1.pop());
//     const value = this.q2.pop();
//     while (this.q2.top()) this.q1.push(this.q2.pop());
//     return value;
//   }

//   top() {
//     return this.q1.stack[0];
//   }
// }

// const weave = (q1, q2) => {
//   const finalQ = new Queue1();

//   while (q1.top() || q2.top()) {
//     q1.top() && finalQ.enqueue(q1.dequeue());
//     q2.top() && finalQ.enqueue(q2.dequeue());
//   }

//   return finalQ;
// }

// const q1 = new Queue1();
// const q2 = new Queue1();

// q1.enqueue('yeah'), q1.enqueue('hahha'), q1.enqueue('noooo');
// q2.enqueue('ksfjlj'), q2.enqueue('slkjfklf'), q2.enqueue('sljflskf');
// c(weave(q1, q2));

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   insertAtHead(val) {
//     const node = new Node(val);
//     node.next = this.head;
//     this.head = node;
//   }

//   insertAtEnd(val) {
//     const node = new Node(val);
//     this.tail.next = node;
//     this.tail = node;
//   }

//   delete(val) {
//     const temp = this.head;
//     while (temp) {
//       if (temp.val === val) {
//         temp.next = temp.next.next;
//         break;
//       }
//       temp = temp.next;
//     }
//   }

//   deleteAtHead() {
//     this.head = this.head.next;
//   }

//   get(index) {
//     let counter = 0;
//     let node = this.head;

//     while (node) {
//       if (counter === index) return node;
//       counter++;
//       node = node.next;
//     }
//   }

//   remove(index) {
//     const node = this.get(index - 1);
//     node.next = node.next.next;
//   }

//   insert(index, val) {
//     const newNode = new Node(val);
//     const node = this.get(index - 1);
//     newNode = node.next;
//     node.next = newNode;
//   }

//   midpoint() {
//     let sp = fp = this.head;
//     while (sp.next && fp.next.next) {
//       sp = sp.next;
//       fp = fp.next.next;
//     }
//     return sp;
//   }

//   detectCycle() {
//     let sp = fp = this.head;
//     while (sp.next || fp.next.next) {
//       if (sp === fp) return sp;
//       sp = sp.next;
//       fp = fp.next.next;
//     }
//     return false;
//   }

//   fromTail(n) {
//     let sp = fp = this.head;
//     while (--n) fp = fp.next;
//     while (sp && fp) {
//       sp = sp.next;
//       fp = fp.next;
//     }
//     return sp;
//   }

//   removeDuplicates() {
//     const map = new Map();
//     let curr = this.head, prev = null;
//     while (curr) {
//       if (map.has(curr)) prev.next = prev.next.next;
//       else map.set(curr, true);
//       prev = curr;
//       curr = curr.next;
//     }
//   }

//   reverse() {
//     let curr = this.head;
//     let prev = null;
//     let next;
//     while (curr) {
//       next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//   }
// }

// const ll = new LinkedList();

// class BinaryNode {
//   constructor(val) {
//     this.val = val;
//     this.left = this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(val, node = this.root) {
//     const node = new BinaryNode(val);

//     if (!node) { this.root = node; return this;};
//     const direction = val < node.value ? 'left' : 'right';
//     !node[direction] ? node[direction] = node : this.insert(val, node[direction]);

//     return this;
//   }

//   contains(val) {
//    const current = this.root;

//    while (current) {
//      if (val === current.value) return true;
//      val < current.value ? current = current.left : current = current.right;
//    }

//    return false;
//   }

//   getMin(node = this.root) {
//     while (node.left) node = node.left;
//     return node.value;
//   }

//   getMax(node = this.root) {
//     while (node.right) node = node.right;
//     return node.value;
//   }

//   remove() {

//   }

//   BFS(fn) {
//     const queue = [this.root];
//     while (queue.length > 0) {
//       const node = queue.shift();
//       fn(node);
//       node.left && queue.push(node.left);
//       node.right && queue.push(node.right)
//     }
//   }

//   DFSPreorder(node, fn) {
//     fn(node);
//     this.DFSPreorder(node.left, fn);
//     this.DFSPreorder(node.right, fn);
//   }

//   isFull() {
//     let result = true;
//     let helper;
//     (helper = node => {
//       if ((node.left && !node.right) || (!node.left && node.right)) {
//         result = false;
//         return;
//       }
//       if (!node) return;
//       helper(node.left);
//       helper(node.right);
//     })(this.root);
//     return result;
//   }

//   getHeight(node = this.root) {
//     if (!node) return -1;
//     const left = this.getHeight(node.left);
//     const right = this.getHeight(node.right);
//     return Math.max(left, right) + 1;
//   }
// }

// class HashTable {
//   constructor(size = 100) {
//     this.table = new Array(size);
//   }

//   hash(key) {
//     let total = 0;
//     const WEIRD_PRIME = 31;

//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//       total = total * WEIRD_PRIME + (key[i].charCodeAt(0) - 96);
//     }

//     return total % this.table.length;
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     if (!this.table[index]) this.table[index] = [];
//     this.table[index].push([key, value]);
//   }

//   get(key) {
//     const index = this.hash(key);
//     if (this.table[index]) for (const val of this.table[index]) if (val[0] === key) return val[1];
//     return undefined;
//   }

//   getAll(index) {
//     return this.table.reduce((a, v) => {
//       if (v) a.push(...v.map(a => a[index]));
//       return a;
//     })
//   }

//   values() {
//     return this.getAll(1);
//   }

//   keys() {
//     return this.getAll(0);
//   }
// }

// const map = new HashTable();
// map.set('yeah', 'bruh');
// c(map);

class Graph1 {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
  }

  DFS(start, results = [], visited = {}) {
    if (!start) return;
    results.push(start);
    visited[start] = true;

    this.adjList[start].forEach(neighbor => {
      if (!visited[neighbor]) this.DFS(neighbor, results, visited);
    });

    return results;
  }

  BFS() {

  }

  detectCycle() {

  }
}

// const graph = new Graph1;
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addEdge('A', 'C');
// c(graph);

const stairCase = steps => {
  let stairs = '';

  for (let i = 0; i < steps; i++) {
    let stair = '';
    for (let j = 0; j < steps; j++) {
      stair += j <= i ? '#' : ' ';
    }
    stairs += stair + '\n';
  }

  return stairs;
}

// c(stairCase(8));

const flatten = (arr, res = []) => {
  arr.forEach(el => Array.isArray(el) ? res.push(...flatten(el)) : res.push(el));
  return res;
}

// c(flatten([[1, 2], [[3], [4]], 5]));

// const traverseDom = (node, cb) => {
//   cb(node);
//   node.children && [...node.children].forEach(node => traverse(node));
// }

// const lib = (() => {
//   const add = '+';
//   const sub = '-';
//   const mult = '*';
//   const div = '/';

//   return {
//     add(a) {
//       return {
//         sub(b) {
//           return {
//             mult(c) {
//               return {
//                 div(d) {
//                   return a - b * c / d;
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// })();

// c(lib.add(10).sub(20).mult(2).div(1));

var head = {};
var newNode = {};
head.next = newNode;
newNode.next = head;
head = null;
console.log('newNode.next => ', newNode.next);





























