/*
Given two strings S1 and S2, write a program to find the character which has the maximum occurrence in the first string S1 and check 
whether that particular character is present in the second string S2 the same number of times as it is present in the first string S1.

 

Input:

    hello world

    albcllsyaaaaaaaa

 

    where:

First line represents S1
Second line represents S2
 

Output:

    Yes

 

Explanation:

'l' has highest frequency of 3 in S1 and it appears 3 times in S2. 
*/

function solution(str1, str2) {
    let checkAna1 = {};
    let checkAna2 = {};

    for (let i = 0; i < str1.length; i++) {
        checkAna1[str1[i]] = (checkAna1[str1[i]] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        checkAna2[str2[i]] = (checkAna2[str2[i]] || 0) + 1;
    }

    for (let freq in checkAna1) {
        if (checkAna1[freq] == checkAna2[freq]) {
            return "Yes";
        }
    }
    return "No";
}

let a = solution("hello world", "albcllsyaaaaaaaa");
console.log(a);