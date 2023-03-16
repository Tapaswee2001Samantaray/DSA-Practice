/*
Given a string S, write a program to convert the given string into an integer and print the integer.

 

Input:

    123

   

    where:

First line represents the input string
 

Output:

    123

 

Assumptions:

    Length of the string S can be 0 to 10
*/

function solution(str) {
    let num=0;
    for(let i=0;i<str.length;i++){
        num = num*10+(str[i]-0);
        0
    }
    return num;
}

let a = solution("123");
console.log(a);