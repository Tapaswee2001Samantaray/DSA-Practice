/*
Given an integer, find whether the number is a Prime number or not. 

 

Display 1 if N is prime else 0. 

 

Input
    11 

 

Output
    1 

 

11 can be divided exactly by 1 and 11. Hence it's a prime number.
*/

function solution(a) {
    let count = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        return 1;
    }
    return 0;
}