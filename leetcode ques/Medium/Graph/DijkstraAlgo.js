/* Implement dijkstra algorithm  */

let dijkstra = function (graph, startingNode) {
    let distances = {};
    let visited = {};
    let pQueue = new PriorityQueue();

    // initialize distances and visited objects
    for (let node in graph) {
        distances[node] = Infinity;
        visited[node] = false;
    }

    // set distance for starting node to 0
    distances[startingNode] = 0;

    // add starting node to the priority queue
    pQueue.enqueue(startingNode, 0);

    while (!pQueue.isEmpty()) {
        let currNode = pQueue.dequeue().element;

        if (visited[currNode]) {
            continue;
        }

        visited[currNode] = true;

        for (let neighbor in graph[currNode]) {
            let distance = graph[currNode][neighbor];
            let totalDistance = distances[currNode] + distance;

            if (totalDistance < distances[neighbor]) {
                distances[neighbor] = totalDistance;
                pQueue.enqueue(neighbor, totalDistance);
            }
        }
    }
    return distances;
}


// priority queue implementation
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const item = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (item.priority < this.items[i].priority) {
                this.items.splice(i, 0, item);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(item);
        }
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}


const graph = {
    A: { B: 5, C: 1 },
    B: { A: 5, C: 2, D: 1 },
    C: { A: 1, B: 2, D: 4 },
    D: { B: 1, C: 4 },
};

const distances = dijkstra(graph, "A");
console.log(distances);