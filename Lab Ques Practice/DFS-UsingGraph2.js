//using iteration

let adjacencyList = [[1], [0, 2, 3], [1], [1, 4], [3, 5, 6, 7], [4], [4], [4]];

/*
let DFS = (adjacencyList) => {
    let stack = [];
    let n = adjacencyList.length;

    let visitedArr = new Array(n).fill(false);

    stack.push(0);
    visitedArr[0] = true;

    while (stack.length != 0) {
        let node = stack.pop();
        console.log(node);

        let countOfNeighbour = adjacencyList[node].length;

        for (let i = 0; i < countOfNeighbour; i++) {
            if (visitedArr[adjacencyList[node][i]] == false) {
                stack.push(adjacencyList[node][i]);
                visitedArr[adjacencyList[node][i]] = true;
            }
        }
    }
}
*/

//using recursion
let DFS = (adjacencyList) => {
    let n = adjacencyList.length;
    let visitedArr = new Array(n).fill(false);

    DFSUtil(adjacencyList, visitedArr, 0);
}

let DFSUtil = (adjacencyList, visitedArr, node) => {
    console.log(node);
    visitedArr[node] = true;

    let countOfNeighbour = adjacencyList[node].length;

    for (let i = 0; i < countOfNeighbour; i++) {
        if (visitedArr[adjacencyList[node][i]] == false) {
            DFSUtil(adjacencyList, visitedArr, adjacencyList[node][i]);
        }
    }
}

DFS(adjacencyList);