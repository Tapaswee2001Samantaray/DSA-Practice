/*
The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

 

Example 1:

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
Example 2:

Input: n = 25
Output: 1389537
 

Constraints:

0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
*/

var tribonacci = function (n) {
    let trib = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        trib[i] = trib[i - 1] + trib[i - 2] + trib[i - 3];
    }

    return trib[n];
}

// let a = tribonacci(4);
let a = tribonacci(25);
console.log(a);