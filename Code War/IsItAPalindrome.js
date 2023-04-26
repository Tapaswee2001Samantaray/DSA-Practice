/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
    let left = 0;
    let right = x.length - 1;

    while (left < right) {
        if (x[left].toLowerCase() != x[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

let a = isPalindrome("YeEY");

console.log(a);