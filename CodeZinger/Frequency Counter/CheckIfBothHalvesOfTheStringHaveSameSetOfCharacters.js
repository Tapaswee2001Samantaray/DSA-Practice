/*
Given a string S, Check whether it is possible to split a string from the middle which will give two halves having the same characters 
and same frequency of each character. If the length of the given string is ODD then ignore the middle element and check for the rest.

 

Input:

    abcbac

 

    where:

First line represents input string S
 

Output:

    Yes

 

Explanation: The two halves contain the same characters with the same frequency.

 

Input:

     abcaabbc

 

Output:

    No

 

Explanation: The two halves contain the same characters but the frequency is not the same.

 

Assumptions:

Character comparisons will be case-sensitive.
If the length of the given string is ODD then ignore the middle element.
*/

function solution(str) {
    let map1 = new Map();
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        map1.set(str[i], (map1.get(str[i]) || 0) + 1);
    }

    let map2 = new Map();
    for (let i = Math.ceil(str.length / 2); i < str.length; i++) {
        map2.set(str[i], (map2.get(str[i]) || 0) + 1);
    }

    if (map1.size != map2.size) {
        return "No";
    }

    for (let index of map1) {
        if (index[1] != map2.get(index[0])) {
            return "No";
        }
    }
    return "Yes";
}

let a = solution("abcbac");
console.log(a);