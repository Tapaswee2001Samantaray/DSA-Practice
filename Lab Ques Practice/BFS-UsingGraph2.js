let adjacencyList = [[1], [0, 2, 3], [1], [1, 4], [3, 5, 6, 7], [4], [4], [4]];

const BFS = (adjacencyList) => {
    let queue = [];
    let n = adjacencyList.length;

    let visitedArr = new Array(n).fill(false);

    queue.push(0);
    visitedArr[0] = true;

    while (queue.length != 0) {
        let node = queue.shift();
        console.log(node);
        let countOfNeighbour = adjacencyList[node].length;

        for (let i = 0; i < countOfNeighbour; i++) {
            if (visitedArr[adjacencyList[node][i]] == false) {
                queue.push(adjacencyList[node][i]);
                visitedArr[adjacencyList[node][i]] = true;
            }
        }
    }
}


BFS(adjacencyList);