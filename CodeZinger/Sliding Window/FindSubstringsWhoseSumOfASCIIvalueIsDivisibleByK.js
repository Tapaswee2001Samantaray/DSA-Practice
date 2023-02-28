/*
Given a string S and a number K, find the number of substrings of length K whose sum of ASCII value of characters is divisible by K.

 

Input:

    bcgabc

    3

 

where:

First line represents the input string S
Second line represents K
 

Output:

     2

 

Explanation:

Substring “bcg” has sum of ASCII values 300 and “abc” has sum of ASCII values 294 which are divisible by 3.
*/

function solution(str, k) {
    let currentStr = 0;
    let count = 0;
    for (let i = 0; i < k; i++) {
        currentStr += str.charCodeAt(i);
    }

    for (let i = k; i < str.length; i++) {
        if (currentStr % k == 0) {
            count++;
        }
        currentStr += str.charCodeAt(i);
        currentStr -= str.charCodeAt(i - k);
    }
    if (currentStr % k == 0) {
        count++;
    }
    return count;
}
