/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= s.length
*/

function checkVowels(ch) {
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
        return true;
    }
    return false;
}

var maxVowels = function (s, k) {
    let count = 0;
    let maxCount = 0;

    for (let i = 0; i < k; i++) {
        if (checkVowels(s[i])) {
            count++;
        }
    }
    maxCount = Math.max(maxCount, count); // assigning max count of vowels to maxCount variable

    for (let i = k; i < s.length; i++) {
        //if previous window 1st element is a vowel then decrese value by 1
        if (checkVowels(s[i - k])) {
            count--;
        }
        if (checkVowels(s[i])) {
            count++;
        }
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
}

let a = maxVowels("abciiidef", 3);
console.log(a);