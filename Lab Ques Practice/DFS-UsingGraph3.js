//using recursion

class Graph {
    //defining vertex array and adjacent list
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    //add vertex to graph
    addVertex(v) {
        //initialize the adjacent list with null array
        this.AdjList.set(v, []);
    }

    //add edge to the graph
    addEdge(v, w) {
        //get the list for vertex v and put the 
        //vertex w denoting edge between v and w
        this.AdjList.get(v).push(w);

        //since graph is undirected,
        //add an edge from w to v also
        this.AdjList.get(w).push(v);
    }

    //prints the vertex and adjacency list
    printGraph() {
        //get all the vertices
        let getKeys = this.AdjList.keys();
        console.log(`All the keys ${getKeys}`);

        // iterate over the vertices
        for (let i of getKeys) {
            // get the corresponding adjacent lists for the vertex
            let getValues = this.AdjList.get(i);
            console.log(`key ${i}  values ${getValues}`);

            let str = "";

            // iterate over the adjacency list
            // concatinate the values into a sting
            for (let j of getValues) {
                str += j + " ";
            }
            // print the vertex and its adacency lists
            console.log(`${i} --> ${str}`);
            console.log();
            console.log();
        }
    }

    DFS(startingNode) {
        let visited = {};

        this.DSFUtil(startingNode, visited);
    }

    DSFUtil(vertex, visited) {
        visited[vertex] = true;
        console.log(vertex);

        let getNeighbours = this.AdjList.get(vertex);

        for (let i in getNeighbours) {
            if (!visited[getNeighbours[i]]) {
                this.DSFUtil(getNeighbours[i], visited);
            }
        }
    }
}

// using the above implenetation Graph class
let g = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F"];

//add vertices
for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

g.printGraph();
g.DFS("A");