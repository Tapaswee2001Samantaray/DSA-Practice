/*
Given an integer N, find whether N is a [info message="A palindrome number is a number that remains same when its digits are reversed."]Palindrome[/info] using recursion. 

 

Write a function that accepts an integer N. The function should return 1 if N is a palindrome else 0. 

 

Input:
    121 

 

Output:
    1

 

The reverse of 121 is also 121.

 

Assume that, 

N is an integer within the range [0 to 1000000000]. 
*/

function isPalindrome(num) {
    if (num.length <= 1) {
        return 1;
    }

    let firstChar = num[0];
    let lastChar = num[num.length - 1];

    if (firstChar == lastChar) {
        return isPalindrome(num.slice(1, -1));
    }
    return 0;
}