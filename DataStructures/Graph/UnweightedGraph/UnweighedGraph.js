import Stack from "../../Stack/Stack.js";
import Queue from "../../Queue/Queue.js";

class UnweighedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList.hasOwnProperty(vertex)) {
      const connections = this.adjacencyList[vertex].slice();

      connections.forEach(
        (adjacentVertex) => this.removeEdge(vertex, adjacentVertex)
      );

      delete this.adjacencyList[vertex];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.hasOwnProperty(vertex1) && this.adjacencyList.hasOwnProperty(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList.hasOwnProperty(vertex1)) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2);
    }

    if (this.adjacencyList.hasOwnProperty(vertex2)) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1);
    }
  }

  depthFirstRecursive(vertex, visited = {}, result = []) {
    if (!vertex) {
      return null;
    }

    visited[vertex] = true;
    result.push(vertex);

    this.adjacencyList[vertex].forEach((adjacentVertex) => {
      if (!visited[adjacentVertex]) {
        this.depthFirstRecursive(adjacentVertex, visited, result);
      }
    });

    return result;
  }

  depthFirstIterative(vertex) {
    const elements = new Stack(vertex);
    const discovered = {};
    const result = [];

    while (elements.size) {
      const vertex = elements.pop();

      if (!discovered[vertex]) {
        discovered[vertex] = true;
        result.push(vertex);

        this.adjacencyList[vertex].forEach(
          (adjacentVertex) => elements.push(adjacentVertex)
        );
      }
    }

    return result;
  }

  breadthFirst(vertex) {
    const elements = new Queue(vertex);
    const discovered = {};
    const result = [];

    while (elements.size) {
      const vertex = elements.dequeue();

      if (!discovered[vertex]) {
        discovered[vertex] = true;
        result.push(vertex);

        this.adjacencyList[vertex].forEach(
          (adjacentVertex) => elements.enqueue(adjacentVertex)
        );
      }
    }

    return result;
  }
}

const graph = new UnweighedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.adjacencyList);
console.log(graph.depthFirstRecursive('A'));
console.log(graph.depthFirstIterative('A'));
console.log(graph.breadthFirst('A'));
