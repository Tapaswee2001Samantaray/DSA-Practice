/*
Return true if there any cycle in the undirect graph. Other wise false
*/

const adjList = [[1, 5], [0, 2, 3], [1], [1, 4], [3, 6, 7], [0], [4, 7], [4, 6]];

let detectCycleInUndirectGraph = function (adjList) {
    let visitedArr = new Array(adjList.length).fill(false);

    for (let i = 0; i < adjList.length; i++) {
        if (visitedArr[i] == false) {
            if (dfs(i, -1, adjList, visitedArr)) {
                return true;
            }
        }
    }
    return false;
};

let dfs = function (node, prev, adjList, visitedArr) {
    visitedArr[node] = true;

    console.log("Visited Node", node);

    for (let i = 0; i < adjList[node].length; i++) {
        if (visitedArr[adjList[node][i]] == false) {
            if (dfs(adjList[node][i], node, adjList, visitedArr)) {
                return true;
            }
        } else if (adjList[node][i] != prev) {
            return true;
        }
    }
    return false;
};

let a = detectCycleInUndirectGraph(adjList);
console.log(a);