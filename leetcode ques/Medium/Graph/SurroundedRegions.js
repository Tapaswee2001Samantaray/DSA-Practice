/*
Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

 

Example 1:


Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: Notice that an 'O' should not be flipped if:
- It is on the border, or
- It is adjacent to an 'O' that should not be flipped.
The bottom 'O' is on the border, so it is not flipped.
The other three 'O' form a surrounded region, so they are flipped.
Example 2:

Input: board = [["X"]]
Output: [["X"]]
 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 200
board[i][j] is 'X' or 'O'.
*/

var solve = function (board) {
    let m = board.length;
    let n = board[0].length;

    for (let i = 0; i < m; i++) {
        if (board[i][0] == "O") {
            dfsSolveHelper(board, i, 0, m, n);
        }
        if (board[i][n - 1] == "O") {
            dfsSolveHelper(board, i, n - 1, m, n);
        }
    }

    for (let i = 0; i < n; i++) {
        if (board[0][i] == "O") {
            dfsSolveHelper(board, 0, i, m, n);
        }
        if (board[m - 1][i] == "O") {
            dfsSolveHelper(board, m - 1, i, m, n);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == "O") {
                board[i][j] = "X";
            }
            if (board[i][j] == ":)") {
                board[i][j] = "O";
            }
        }
    }
    //TC :- O(m*n)
    //SC :- O(m*n)
    return board;
}

let dfsSolveHelper = function (board, row, col, m, n) {
    if (row < 0 || row >= m || col < 0 || col >= n || board[row][col] != "O") {
        return;
    }

    board[row][col] = ":)";

    dfsSolveHelper(board, row + 1, col, m, n); //down
    dfsSolveHelper(board, row, col + 1, m, n); //right
    dfsSolveHelper(board, row - 1, col, m, n); //up
    dfsSolveHelper(board, row, col - 1, m, n); //left
}

let a = solve([["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]]);
console.log(a);