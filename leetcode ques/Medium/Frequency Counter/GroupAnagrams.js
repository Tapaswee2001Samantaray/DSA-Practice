/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original 
letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

var groupAnagrams = function (strs) {
    if (strs == null || strs.length == 0) {
        return [];
    }

    let map = new Map();

    for (let i = 0; i < strs.length; i++) {

        let charArr = strs[i].split("");
        charArr.sort();
        let sortedString = charArr.join("");

        if (map.has(sortedString)) {
            let arr = map.get(sortedString);
            arr.push(strs[i]);
            map.set(sortedString, arr);
        } else {
            let arr = [];
            arr.push(strs[i]);
            map.set(sortedString, arr);
        }
    }

    return [...map.values()];
}

let a = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// let a = groupAnagrams([""]);
console.log(a);