/*
Given a string S, Find the second most frequent character in S.

 

Input:

    aaabbcccc

 

    where:

First line represents input string S
 

Output:

    a
*/

function solution(str) {
    let frequent = {};

    for (let i = 0; i < str.length; i++) {
        frequent[str[i]] = (frequent[str[i]] || 0) + 1;
    }

    let maxFreq1 = 0;
    let maxFreq2 = 0;
    let mostFreqEle = -1;
    let secondMostFreqEle = -1;

    for (let key in frequent) {
        if (frequent[key] > maxFreq1) {
            maxFreq2 = maxFreq1;
            secondMostFreqEle = mostFreqEle;
            maxFreq1 = frequent[key];
            mostFreqEle = key;
        } else if (frequent[key] > maxFreq2) {
            maxFreq2 = frequent[key];
            secondMostFreqEle = key;
        }
    }

    return secondMostFreqEle;
    //=======or===========
    // let a = Object.entries(frequent).sort((a,b)=>(b[1]-a[1]));
    // let result = "";
    // result = a[1][0];
    // return result;
}

let a = solution("aaabbcccc");
console.log(a);