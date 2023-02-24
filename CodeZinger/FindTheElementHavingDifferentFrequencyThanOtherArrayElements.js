/*
Given an array of N integers where each element in the array occurs the same number of times except one element, find that element.

 

Input:

    5

    1 1 2 2 3

 

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    3

 

Explanation: Elements 1, and 2 occur two times each but 3 occurs only once, hence the output 3.
*/

function solution(a, b) {
    let freCount1 = {};
    for (let i = 0; i < a; i++) {
        if (freCount1[b[i]]) {
            freCount1[b[i]]++;
        } else {
            freCount1[b[i]] = 1;
        }
    }
    let freCount2 = {};
    for (let i in freCount1) {
        if (freCount2[freCount1[i]]) {
            freCount2[freCount1[i]]++;
        } else {
            freCount2[freCount1[i]] = 1;
        }
    }
    let value1 = Object.keys(freCount2).find(key => freCount2[key] == 1);
    value1 = Number(value1);
    let value2 = Object.keys(freCount1).find(key => freCount1[key] == value1);
    return value2;
}