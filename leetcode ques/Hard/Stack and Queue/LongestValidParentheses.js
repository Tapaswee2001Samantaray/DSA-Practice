/*
Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
substring
.

 

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 3 * 104
s[i] is '(', or ')'.
*/

var longestValidParentheses = function (s) {
    let stack = [];
    let lengthOfLongestValidParentheses = 0;

    stack.push(-1); // for "()" test case
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            stack.push(i);
        } else {
            stack.pop();

            if (stack.length == 0) {
                stack.push(i);
            } else {
                lengthOfLongestValidParentheses = Math.max(lengthOfLongestValidParentheses, i - stack[stack.length - 1]);
            }
        }
    }
    return lengthOfLongestValidParentheses;
}

// let a = longestValidParentheses(")()())");
let a = longestValidParentheses("()");
console.log(a);