/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let checkAna1 = {};
    let checkAna2 = {};
    for (let i of s) {
        if (checkAna1[i]) {
            checkAna1[i]++;
        } else {
            checkAna1[i] = 1;
        }
    }

    for (let i of t) {
        if (checkAna2[i]) {
            checkAna2[i]++;
        } else {
            checkAna2[i] = 1;
        }
    }

    for (let key in checkAna1) {
        if (checkAna1[key] != checkAna2[key]) {
            return false;
        }
    }
    return true;
};