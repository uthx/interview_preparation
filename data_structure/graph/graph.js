class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(key) {
    if (this.adjacencyList[key]) return "Vertex already exists";
    this.adjacencyList[key] = [];
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return `Cannot add edge, vertex does not exist in graph: ${this.adjacencyList}`;
    }
    if (this.adjacencyList[vertex1].includes(vertex2)) {
      console.log(`Edge ${vertex2} already exists in vertex: ${vertex1}`);
    } else {
      this.adjacencyList[vertex1].push(vertex2);
    }

    if (this.adjacencyList[vertex2].includes(vertex1)) {
      console.log(`Edge ${vertex1} already exists in vertex: ${vertex2}`);
    } else {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return `Cannot remove edge, vertex does not exist in graph: ${this.adjacencyList}`;
    }
    // deleting vertex2 from vertex1
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(edges => edges !== vertex2)

    // deleting vertex1 from vertex2
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(edges => edges !== vertex1)
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return `Cannot remove vertex, vertex does not exist in graph: ${this.adjacencyList}`;
    }
    let edges = this.adjacencyList[vertex];
    edges.forEach(edge => {
      this.removeEdge(vertex, edge)
    })
    delete this.adjacencyList[vertex]
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B  ", "C");
// graph.removeEdge("A", "B")
graph.removeVertex("A")
console.log(graph.adjacencyList);
