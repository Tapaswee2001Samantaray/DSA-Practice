/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

Constraints:

-100.0 < x < 100.0
-231 <= n <= 231-1
n is an integer.
-104 <= xn <= 104
*/

var myPow = function (x, n) {
    if (n == 0) {
        return 1;
    }

    if (n > 0) {
        return recursive(x, n);
    } else {
        return 1 / recursive(x, -n);
    }
}

let recursive = function (x, n) {
    if (n == 1) {
        return x;
    }

    let temp = recursive(x, Math.floor(n / 2));
    if (!(n & 1)) {
        return temp * temp;
    } else {
        return x * temp * temp;
    }
};

let a = myPow(2.00000, 10);
console.log(a);