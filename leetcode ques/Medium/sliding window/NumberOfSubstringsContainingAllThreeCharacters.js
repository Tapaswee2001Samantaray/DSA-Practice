/*
Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

 

Example 1:

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
Example 2:

Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 
Example 3:

Input: s = "abc"
Output: 1
 

Constraints:

3 <= s.length <= 5 x 10^4
s only consists of a, b or c characters.
*/

var numberOfSubstrings = function (s) {
    let map = new Map();

    let result = 0;
    let prefix = 0;
    let countOfDist = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        map.set(s[right], (map.get(s[right]) || 0) + 1);

        if (map.get(s[right]) == 1) {
            countOfDist++;
        }

        while (map.get(s[left]) > 1 && left < right) {
            map.set(s[left], map.get(s[left]) - 1);
            left++;
            prefix++;
        }

        if (countOfDist == 3) {
            result += prefix + 1;
        }
    }
    return result;
}

let a = numberOfSubstrings("abcabc");
console.log(a);