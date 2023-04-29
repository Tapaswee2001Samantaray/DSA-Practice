/*
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 

Example 1:


Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.
*/

var orangesRotting = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    let queue = [];
    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j]);
            }
        }
    }

    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while (queue.length) {
        let size = queue.length;
        count++;

        for (let i = 0; i < size; i++) {
            let rottenCell = queue.shift();
            for (let dir of directions) {
                let row = rottenCell[0] + dir[0];
                let col = rottenCell[1] + dir[1];

                if (row < 0 || col < 0 || row >= m || col >= n || grid[row][col] != 1) {
                    continue;
                }

                grid[row][col] = 2;
                queue.push([row, col]);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                return -1;
            }
        }
    }

    return count == 0 ? 0 : count - 1;
}

// let a = orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]);
let a = orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]);
console.log(a);