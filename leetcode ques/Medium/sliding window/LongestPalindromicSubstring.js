/*
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

var longestPalindrome = function (s) {
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;

        while (left >= 0 && right < s.length && s[left] == s[right]) {
            let palindrom = s.substring(left, right + 1);
            if (palindrom.length > ans.length) {
                ans = palindrom;
            }
            left--;
            right++;
        }

        left = i;
        right = i + 1;

        while (left >= 0 && right < s.length && s[left] == s[right]) {
            let palindrom = s.substring(left, right + 1);
            if (palindrom.length > ans.length) {
                ans = palindrom;
            }
            left--;
            right++;
        }
    }
    return ans;
}

let a = longestPalindrome("babad");
console.log(a);