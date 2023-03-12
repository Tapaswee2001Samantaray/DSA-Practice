/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following 
properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
 

Example 1:


Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
Example 2:


Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= n, m <= 300
-109 <= matrix[i][j] <= 109
All the integers in each row are sorted in ascending order.
All the integers in each column are sorted in ascending order.
-109 <= target <= 109
*/

var searchMatrix = function (matrix, target) {
    if (matrix == null || target == null || matrix.length == 0 || matrix[0].length == 0) {
        return null;
    }

    let a = matrix.length; //no. of rows
    let b = matrix[0].length; //no. of columns

    //start from top right corner of matrix
    let row = 0;
    let column = b - 1;

    while (row < a && column >= 0) {
        if (matrix[row][column] == target) {
            return true;
        }

        if (target > matrix[row][column]) {
            row++;
        } else {
            column--;
        }
    }
    return false;
}

let arr = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]];
let a = searchMatrix(arr, 5);
console.log(a);