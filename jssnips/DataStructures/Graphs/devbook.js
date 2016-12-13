// function that will create our graph
let MakeGraph = () => {
    let graph = {};
    
    //check whether a user already exists
    graph.contains = (node) => {
        return !!graph[node];
    }

    graph.addVertex = (node) => {
        //add members as vertices
        // store their connections as properties in an edges object
        //prevent overwrite
        if(!graph.contains(node)){
            graph[node] = {edges:{}};
        }
    }
    return graph
}

//graph representing our site
let devBook = MakeGraph();

devBook.addVertex("Benjamin Roberts Ombito")
devBook.addVertex("Teresa Ruth Lutta")
devBook.addVertex("Linda Ongachi");
devBook.addVertex("Joyce Nabwire");
devBook.addVertex("Brian Lusina");
devBook.addVertex("Mideva Diana")
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
