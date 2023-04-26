/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges 
of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/

var numIslands = function (grid) {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; i++) {
            if (grid[i][j] == "1") {
                numIslandsUtil(grid, i, j);
                count++
            }
        }
    }
    return count;
}

let numIslandsUtil = function (grid, row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] == "0") {
        return;
    }

    grid[row][col] = "0";

    numIslandsUtil(grid, row, col + 1); //right
    numIslandsUtil(grid, row, col - 1); //left
    numIslandsUtil(grid, row + 1, col); //down
    numIslandsUtil(grid, row - 1, col); //up
}

let grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

let a = numIslands(grid);
console.log(a);