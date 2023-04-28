/*
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1:


Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]
Example 2:


Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]
 

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] is either 0 or 1.
There is at least one 0 in mat.
*/

var updateMatrix = function (mat) {
    let m = mat.length;
    let n = mat[0].length;

    let visitedArr = Array.from(Array(m), () => new Array(n).fill(false));

    let queue = [];

    //visit all the 0's and mark them as true in visitedArr
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] == 0) {
                queue.push([i, j]);
                visitedArr[i][j] = true;
            }
        }
    }

    //now perform BSF operation
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while (queue.length) {
        const curr = queue.shift();

        for (let dir of directions) {
            let row = curr[0] + dir[0];
            let col = curr[1] + dir[1];

            if (row < 0 || col < 0 || row >= m || col >= n || visitedArr[row][col] == true) {
                continue;
            }

            mat[row][col] = mat[curr[0]][curr[1]] + 1;
            visitedArr[row][col] = true;
            queue.push([row, col]);
        }
    }
    return mat;
    // TC: O(M * N)
    // SC: O(M * N), because of queue.
}

let a = updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]);
console.log(a);