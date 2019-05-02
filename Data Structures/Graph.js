// a data structure that consists of finite set of vertices or nodes

class Graph {
  constructor() {
    this.adjancyList = {};
  }

  addVertex(vertex) {
    if (!this.adjancyList[vertex]) this.adjancyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjancyList[v1].push(v2);
    this.adjancyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjancyList[v1] = this.adjancyList[v1].filter(v => v !== v2)
    this.adjancyList[v2] = this.adjancyList[v2].filter(v => v !== v1)
  }

  removeVertex(vertex) {
    this.adjancyList[vertex].forEach(adj => this.removeEdge(adj, vertex));
    delete this.adjancyList[vertex];
  }

  DFSR(start, results = [], visited = {}) {
    if (!start) return;
    results.push(start);
    visited[start] = true;
    this.adjancyList[start].forEach(neighbor => {
      if (!visited[neighbor]) this.DFSR(neighbor, results, visited)
    })

    return results;
  }

  BFS(vertex) {
    const results = [];
    const visited = {};
    const queue = [vertex];
    let helper;

    visited[vertex] = true;
    (helper = () => {
      if (queue.length) {
        let current = queue.shift();
        results.push(current);
        this.adjancyList[current].forEach(n => {
          if (!visited[n]) {
            visited[n] = true;
            queue.push(n);
          }
        })
        helper();
      }
    })()

    return results;
  }
}

module.exports = Graph;