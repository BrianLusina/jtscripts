// function that will create our graph
let MakeGraph = () => {
    let graph = {};

    graph.addVertex = (node) => {
        //add members as vertices
        // store their connections as properties in an edges object
        graph[node] = {edges:{}};
    }
    return graphs
}

//graph representing our site
let devBook = MakeGraph();

devBook.addVertex("Benjamin Roberts Ombito")
devBook.addVertex("Teresa Ruth Lutta")
devBook.addVertex("Linda Ongachi");
devBook.addVertex("Joyce Nabwire");
devBook.addVertex("Brian Lusina");
devBook.addVertex("Mideva Diana")

console.log(devBook);