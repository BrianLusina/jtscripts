// function that will create our graph
const MakeGraph = () => {
  const graph = {};

  // check whether a user already exists
  graph.contains = (node) => {
    return Boolean(graph[node]);
  };

  graph.addVertex = (node) => {
    // add members as vertices
    // store their connections as properties in an edges object
    // prevent overwrite
    if (!graph.contains(node)) {
      graph[node] = { edges: {} };
    }
  };

  // removes a node from the graph
  graph.removeVertex = (node) => {
    if (graph.contains(node)) {
      for (const connectedNode in graph[node].edges) {
        graph.removeEdge(node, connectedNode);
      }
      delete graph[node];
    }
  };

  // adds relationship
  graph.addEdge = (startNode, endNode) => {
    // only if both nodes exist, add each node to the others edge list
    if (graph.contains(startNode) && graph.contains(endNode)) {
      graph[startNode].edges[endNode] = true;
      graph[endNode].edges[startNode] = true;
    }
  };

  // removes relationship
  graph.removeEdge = (startNode, endNode) => {
    if (graph.contains(startNode) && graph.contains(endNode)) {
      delete graph[startNode].edges[endNode];
      delete graph[endNode].edges[startNode];
    }
  };
  return graph;
};

// graph representing our site
const devBook = MakeGraph();

devBook.addVertex('Benjamin Roberts Ombito');
devBook.addVertex('Teresa Ruth Lutta');
devBook.addVertex('Linda Ongachi');
devBook.addVertex('Joyce Nabwire');
devBook.addVertex('Brian Lusina');
devBook.addVertex('Mideva Diana');

// output
/**
 * { addVertex: [Function],
  'Benjamin Roberts Ombito': { edges: {} },
  'Teresa Ruth Lutta': { edges: {} },
  'Linda Ongachi': { edges: {} },
  'Joyce Nabwire': { edges: {} },
  'Brian Lusina': { edges: {} },
  'Mideva Diana': { edges: {} } }
 */

// add edges
devBook.addEdge('Benjamin Roberts Ombito', 'Teresa Ruth Lutta');
devBook.addEdge('Linda Ongachi', 'Joyce Nabwire');
devBook.addEdge('Brian Lusina', 'Mideva Diana');
devBook.addEdge('Benjamin Roberts Ombito', 'Linda Ongachi');
devBook.addEdge('Teresa Ruth Lutta', 'Joyce Nabwire');
devBook.addEdge('Linda Ongachi', 'Brian Lusina');

console.log(devBook);
