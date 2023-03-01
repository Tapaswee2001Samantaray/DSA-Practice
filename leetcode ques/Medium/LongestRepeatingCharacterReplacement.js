/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English
 character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
 

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
*/

// length of longest substring where the count of the most
// of most frequent character + k < size of substring
var characterReplacement = function (s, k) {
    let map = new Map();

    let maxLength = 0;
    let maxFreq = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        map.set(char, (map.get(char) || 0) + 1);
        maxFreq = Math.max(maxFreq, map.get(char));

        //check invalid condition
        while (maxFreq + k < right - left + 1) {
            map.set(s[left], map.get(s[left]) - 1);
            maxFreq = Math.max(maxFreq, map.get(s[left]));
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

let a = characterReplacement("AABABBA");
console.log(a);