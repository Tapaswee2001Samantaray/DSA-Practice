/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note 
that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. 
Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. 
For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 

Constraints:

1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
*/

var decodeString = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {//3[a]2[bc]
        if (s[i] != "]") {
            stack.push(s[i]);
        } else {
            //finding the repeating string
            let str = "";
            while (stack.length != 0 && stack[stack.length - 1] != "[") {
                str = stack.pop() + str;
            }
            stack.pop(); // popping out the [

            //finding the number which decides how many times the string to be repeat
            let numStr = "";
            while (stack.length != 0 && !isNaN(stack[stack.length - 1])) {
                numStr = stack.pop() + numStr;
            }
            let number = parseInt(numStr);

            while (number > 0) {
                for (let i = 0; i < str.length; i++) {
                    stack.push(str[i]);
                }
                number--;
            }
        }
    }
    //TC :- O(n * k)
    //SC :- O(n)
    return stack.join("");
};

let a = decodeString("3[a]2[bc]");
console.log(a);