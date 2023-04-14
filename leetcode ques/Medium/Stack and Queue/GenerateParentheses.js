/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
*/

var generateParenthesis = function (n) {
    let stack = [];
    let res = [];

    function backTrack(openN, closedN) {
        if (openN == closedN && openN == n && closedN == n) {
            res.push(stack.join(""));
            return;
        }

        if (openN < n) {
            stack.push("(");
            backTrack(openN + 1, closedN);
            stack.pop();
        }

        if (closedN < openN) {
            stack.push(")");
            backTrack(openN, closedN + 1);
            stack.pop();
        }
    }

    backTrack(0, 0);

    return res;
}


let a = generateParenthesis(3);
console.log(a);