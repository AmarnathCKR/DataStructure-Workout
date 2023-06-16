class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (this.adjacencyList[vertex]) return false;
      this.adjacencyList[vertex] = [];
      return true;
    }
    removeVertex(vertex) {
      if (!this.adjacencyList[vertex]) return false;
      this.adjacencyList[vertex].forEach((vertex2) => {
        this.removeEdge(vertex, vertex2);
      });
      delete this.adjacencyList[vertex];
    }
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
        return false;
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    removeEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
        return false;
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );
      return true;
    }
   
    recursiveDfs(start) {
      let routes = [],
        visited = {};
      const adjacencyList = this.adjacencyList;
      function dfs(vertex) {
        if (!vertex) return false;
        visited[vertex] = true;
        routes.push(vertex);
        adjacencyList[vertex].forEach((vertex) => {
          if (!visited[vertex]) dfs(vertex);
        });
      }
      dfs(start);
      return routes;
    }
    breadthFirstSearch(start) {
      const queue = [start],
        result = [],
        visited = {};
      let vertex;
      visited[start] = true;
      while (queue.length) {
        vertex = queue.shift();
        result.push(vertex);
        this.adjacencyList[vertex].forEach((v) => {
          if (!visited[v]) {
            visited[v] = true;
            queue.push(v);
          }
        });
      }
      return result;
    }
  }
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  graph.addEdge("D", "E");
  graph.addEdge("D", "F");
  graph.addEdge("E", "F");
  // console.log(graph.breadthFirstSearch("A"));
  // console.log(recursiveDfs("B"));
  
  console.log(graph)

  