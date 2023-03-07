/*
Given a string S, find the smallest window(substring) length with all distinct characters of the given string.

 

Input:

    aabbcc

 

    where:

First line represents input string S.
 

Output:

    4

 

Explanation:

abbc of length 4 is the smallest window with the highest number of distinct characters.
 

Assumptions:

 Character comparisons will be case-sensitive.
*/

function solution(str) {
    let map = new Map();

    for (let i = 0; i < str.length; i++) {
        map.set(str[i], (map.get(str[i]) || 0) + 1);
    }
    let strDistinctCount = map.size;
    map.clear();

    let windowDistinctCount = 0;
    let left = 0;
    let result = str.length;

    for (let right = 0; right < str.length; right++) {
        map.set(str[right], (map.get(str[right]) || 0) + 1);


        if (map.get(str[right]) == 1) {
            windowDistinctCount++;
        }

        while (map.get(str[left]) > 1) {
            map.set(str[left], map.get(str[left]) - 1);
            left++;
        }

        if (strDistinctCount == windowDistinctCount && (right - left + 1) < result) {
            result = right - left + 1;
        }
    }
    return result;
}

let a = solution("aabbcc");
console.log(a);