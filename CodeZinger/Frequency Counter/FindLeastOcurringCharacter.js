/*
Given a string S, find the least occurring character in the input string S.

e.g., if the input string is “tests” then the output should be ‘e’.

 

Note: If there are more than 1 characters with least count than display the smallest character.

 

Input:

    hello

   

    where:

First line represents the input string S.
 

Output:

    e

 

Explanation:

Characters 'h','e' and 'o' occurs only once and 'e' has the smallest ASCII value among them.
*/

function solution(str) {
    let charArr = str.split("");
    charArr.sort();
    let sortedString = charArr.join("");

    let map = new Map();

    for (let i = 0; i < sortedString.length; i++) {
        map.set(sortedString[i], (map.get(sortedString[i]) || 0) + 1);
    }

    let result = sortedString[0];
    for (let key of map) {
        if (key[1] < map.get(result)) {
            result = key[0];
        }
    }

    return result;
}

let a = solution("hello");
console.log(a);