/*
Given a string S, write a program to reverse the input string without using any built-in function

 

Input:

    hello world

   

    where:

First line represents the input string
 

Output:

     dlrow olleh

 

Assumptions:

Length of string can be 0 to 10000
*/

function reverseSentence(str) {
    if (str.length <= 1) {
        return str;
    }

    return reverseSentence(str.slice(1)) + str[0];
}
