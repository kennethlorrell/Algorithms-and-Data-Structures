import Stack from "../../Stack/Stack.js";
import Queue from "../../Queue/Queue.js";
import PriorityQueue from "../../Queue/PriorityQueue/PriorityQueue.js";

class WeightedGraph {
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

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList.hasOwnProperty(vertex1) && this.adjacencyList.hasOwnProperty(vertex2)) {
      this.adjacencyList[vertex1].push({
        vertex: vertex2,
        weight
      });
      this.adjacencyList[vertex2].push({
        vertex: vertex1,
        weight
      });
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList.hasOwnProperty(vertex1)) {
      this.adjacencyList[vertex1].vertex = this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2);
    }

    if (this.adjacencyList.hasOwnProperty(vertex2)) {
      this.adjacencyList[vertex2].vertex = this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1);
    }
  }

  depthFirstRecursive(vertex, visited = {}, result = []) {
    if (!vertex) {
      return null;
    }

    visited[vertex] = true;
    result.push(vertex);

    this.adjacencyList[vertex].forEach(({ vertex: adjacentVertex }) => {
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
          ({ vertex: adjacentVertex }) => elements.push(adjacentVertex)
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
          ({ vertex: adjacentVertex }) => elements.enqueue(adjacentVertex)
        );
      }
    }

    return result;
  }

  shortestPath(start, end) {
    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];

    Object.keys(this.adjacencyList).map((vertex) => {
      distances[vertex] = vertex === start ? 0 : Infinity
      previous[vertex] = null;
      queue.enqueue(vertex, distances[vertex]);
    });

    while (queue.values.length) {
      let currentVertex = queue.dequeue().value;

      if (currentVertex === end) {
        while (currentVertex) {
          path.push(currentVertex);
          currentVertex = previous[currentVertex];
        }
        break;
      }

      this.adjacencyList[currentVertex].forEach(({ vertex: adjacentVertex, weight }) => {
        const distance = weight + distances[currentVertex];

        if (distance < distances[adjacentVertex]) {
          distances[adjacentVertex] = distance;
          previous[adjacentVertex] = currentVertex;
          queue.enqueue(adjacentVertex, distance);
        }
      });
    }

    return path.reverse();
  }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.shortestPath('A', 'F'));
