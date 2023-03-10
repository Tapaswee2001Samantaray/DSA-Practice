/*
Given a string S, separate the individual characters from the string.

 

Input:

    Hello

   

    where:

First line represents the input string S
 

Output:

    H e l l o

 

Assumptions:

Length of the string S can be 0 to 10000
*/

function solution(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i] + " ";
    }
    return result;
}

let a = solution("hello");
console.log(a);