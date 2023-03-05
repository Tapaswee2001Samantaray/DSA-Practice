/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
*/

var reverseString = function (s) {
    recursive(s, 0, s.length - 1);
    return s;
}

let recursive = function (s, left, right) {
    if (left > right) {
        return;
    }

    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    return recursive(s, left + 1, right - 1);
}

let a = reverseString(["h", "e", "l", "l", "o"]);
console.log(a);