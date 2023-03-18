/*
Given an integer n, return the number of prime numbers that are strictly less than n.

 

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0
 

Constraints:

0 <= n <= 5 * 106
*/

var countPrimes = function (n) {
    let prime = [];
    for (let i = 0; i < n; i++) {
        prime[i] = true;
    }

    for (let p = 2; p * p <= n; p++) {
        if (prime[p] == true) {
            for (let i = p * p; i <= n; i += p) {
                prime[i] = false;
            }
        }
    }

    let primeCount = 0;
    for (let i = 2; i < prime.length; i++) {
        if (prime[i] == true) {
            primeCount++;
        }
    }
    return primeCount;
}

let a = countPrimes(10);
// let a=countPrimes(1);
console.log(a);