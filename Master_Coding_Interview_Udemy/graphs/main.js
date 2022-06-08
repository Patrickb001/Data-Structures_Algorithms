// Edge List
//prettier-ignore
const edgeGraph = [[0,2],[2,3],[2,1],[1,3]]

//Adjacent List
const adjGraphs = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix
const graph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

// Graph Implementation

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    if (this.adjacentList[node]) {
      return;
    } else {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    }
  }
  addEdge(node1, node2) {
    if (!this.adjacentList[node1] || !this.adjacentList[node2]) return;
    if (
      this.adjacentList[node1].includes(node2) ||
      this.adjacentList[node2].includes(node1)
    )
      return;
    //undirected graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + ", ";
      }
      console.log(node + " --> " + connections);
    }
    console.log(`This connection has ${this.numberOfNodes} nodes`);
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("0");
myGraph.addVertex("1");
// myGraph.addVertex("2");
// myGraph.addVertex("3");
// myGraph.addVertex("4");
// myGraph.addVertex("5");
// myGraph.addVertex("6");
// myGraph.addEdge("3", "1");
// myGraph.addEdge("3", "4");
// myGraph.addEdge("4", "2");
// myGraph.addEdge("4", "5");
// myGraph.addEdge("1", "2");
myGraph.addEdge("0", "1");
myGraph.addEdge("0", "1");
// myGraph.addEdge("0", "2");
// myGraph.addEdge("5", "6");

myGraph.showConnections();
