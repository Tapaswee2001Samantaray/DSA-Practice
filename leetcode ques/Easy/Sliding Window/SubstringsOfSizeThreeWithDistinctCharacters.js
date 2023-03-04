/*
A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
The only good substring of length 3 is "xyz".
Example 2:

Input: s = "aababcabc"
Output: 4
Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
The good substrings are "abc", "bca", "cab", and "abc".
 

Constraints:

1 <= s.length <= 100
s​​​​​​ consists of lowercase English letters.
*/

var countGoodSubstrings = function (s) {
    let good = 0;

    // Sliding window of fixed size 3, starting from beginning of string
    for (let left = 0; left < s.length - 2; left++) {
        //Put characters from window into a Set
        let window = [s[left], s[left + 1], s[left + 2]];
        let set = new Set(window);

        // If each character is unique in the set, then the Set should be size 3,
        // which would make it a good substring/window
        if (set.size == 3) {
            good++;
        }
    }
    return good;
};

let a = countGoodSubstrings("xyzzaz");
console.log(a);