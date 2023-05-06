/*
You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the 
grid.

Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

 

Example 1:


Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.
Example 2:


Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
Output: 0
Explanation: All 1s are either on the boundary or can reach the boundary.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 500
grid[i][j] is either 0 or 1.
*/

var numEnclaves = function (grid) {
    let result = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i == 0 || j == 0 || i == grid.length || j == grid[i].length) {
                dfsNumEnclavesHelper(grid, i, j);
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                result++;
            }
        }
    }
    //TC :- O(m*n)
    //SC :- O(m*n)
    return result;
}

let dfsNumEnclavesHelper = function (grid, row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] != 1) {
        return;
    }

    grid[row][col] = 0;

    dfsNumEnclavesHelper(grid, row + 1, col); //down
    dfsNumEnclavesHelper(grid, row, col + 1); //right
    dfsNumEnclavesHelper(grid, row - 1, col); //up
    dfsNumEnclavesHelper(grid, row, col - 1); //left
}

let a = numEnclaves([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]);
console.log(a);