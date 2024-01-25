class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return "Vertex already exists";
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return `Cannot add edge, vertex does not exist in graph: ${this.adjacencyList}`;
    }
    // todo: handle scenario where edge already exits
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}
const weightedGraph = new WeightedGraph();

weightedGraph.addVertex("A");
weightedGraph.addVertex("B");
weightedGraph.addEdge("A", "B", 10);

console.log("=>", weightedGraph.adjacencyList);
