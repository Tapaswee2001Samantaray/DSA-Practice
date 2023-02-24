/*
Given a number N, find the frequency of digits in N using loop.

 

Input:
    12553451

 

    where:

First line represents value of N.
 

Output:
    1 2

    2 1 

    3 1

    4 1

    5 3


*/

function solution(a) {
    let fc = {};
    for (let i = 0; i < a.length; i++) {
        if (fc[a[i]]) {
            fc[a[i]]++;
        } else {
            fc[a[i]] = 1;
        }
    }
    for (let key in fc) {
        console.log(key + " " + fc[key]);
    }
}