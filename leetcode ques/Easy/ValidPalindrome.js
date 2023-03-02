/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/
function isAlphanumeric(ch) {
    return /[a-z0-9]/i.test(ch);
}

var isPalindrome = function (s) {
    //if empty string or one character long return true
    if(s.length<2){ //base case
        return true;
    }

    let firstChar = s[0];
    let lastChar = s[s.length-1];

    //if the first char is not alphanumeric , run the function again with the string after the first character
    if(!isAlphanumeric(firstChar)){
        return isPalindrome(s.slice(1));
    }

    //if the last char is not alphanumeric , run the function again with the string before the last char
    if(!isAlphanumeric(lastChar)){
        return isPalindrome(s.slice(0,-1));
    }

    //if the first and last char are the same , then the string between the first and the last char bach through the function
    if(firstChar.toLowerCase() == lastChar.toLowerCase()){
        return isPalindrome(s.slice(1,-1));
    }

    //if first and the last char doesn't match the return false
    return false;
}


let a = isPalindrome("A man, a plan, a canal: Panama");
// let a = isPalindrome("race a car");
console.log(a);