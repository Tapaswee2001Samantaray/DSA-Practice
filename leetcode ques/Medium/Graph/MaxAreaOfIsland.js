/*
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally
 (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

 

Example 1:


Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
               [0,0,0,0,0,0,0,1,1,1,0,0,0],
               [0,1,1,0,1,0,0,0,0,0,0,0,0],
               [0,1,0,0,1,1,0,0,1,0,1,0,0],
               [0,1,0,0,1,1,0,0,1,1,1,0,0],
               [0,0,0,0,0,0,0,0,0,0,1,0,0],
               [0,0,0,0,0,0,0,1,1,1,0,0,0],
               [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.
*/

var maxAreaOfIsland = function (grid) {
    if (grid.length == 0) {
        return 0;
    }

    let maxArea = Number.MIN_VALUE;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let area = 0;

            if (grid[i][j] == 1) {
                area = maxAreaOfIslandUtil(grid, i, j);
            }
            maxArea = Math.max(maxArea, area);
        }
    }
    // TC:- O(m * n)
    // SC:- O(m * n)
    return maxArea;
}

let maxAreaOfIslandUtil = function (grid, row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] == 0) {
        return 0;
    }

    grid[row][col] = 0;

    return (
        1 +
        maxAreaOfIslandUtil(grid, row + 1, col) + //down
        maxAreaOfIslandUtil(grid, row - 1, col) + //up
        maxAreaOfIslandUtil(grid, row, col + 1) + //right
        maxAreaOfIslandUtil(grid, row, col - 1)  //left
    );
}

let grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
           [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
           [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]];

let a = maxAreaOfIsland(grid);
console.log(a);