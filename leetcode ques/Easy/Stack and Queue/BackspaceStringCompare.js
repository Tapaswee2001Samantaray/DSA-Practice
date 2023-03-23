/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
 

Follow up: Can you solve it in O(n) time and O(1) space?
*/

var backspaceCompare = function (s, t) {//"ab##", t = "c#d#"
    let stack1 = [];
    let stack2 = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "#") {
            if (stack1.length != 0) {
                stack1.pop();
            }
        } else {
            stack1.push(s[i]);
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] == "#") {
            if (stack2.length != 0) {
                stack2.pop();
            }
        } else {
            stack2.push(t[i]);
        }
    }

    while (stack1.length != 0 && stack2.length != 0) {
        if (stack1.pop() != stack2.pop()) {
            return false;
        }
    }

    if (stack1.length == 0 && stack2.length == 0) {
        return true;
    } else {
        return false;
    }
}

let a = backspaceCompare("ab##", "c#d#");
console.log(a);