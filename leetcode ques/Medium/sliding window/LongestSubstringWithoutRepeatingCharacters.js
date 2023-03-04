/*
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

var lengthOfLongestSubstring = function (s) {
    let map = new Map(); //for counting the frequency of the char
    let maxLength = 0;
    let left = 0 //left pointer
    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        map.set(char, (map.get(char) || 0) + 1);

        //check for valid window
        while (map.get(char) > 1) {
            let leftChar = s[left];
            map.set(leftChar, (map.get(leftChar) || 0) - 1);
            left++;
        }

        //now our condition is valid
        maxLength = Math.max(maxLength, right - left + 1); // updating our global max with the current valid substring /window
    }
    return maxLength;
}

let a = lengthOfLongestSubstring("abcabcbb");
console.log(a);