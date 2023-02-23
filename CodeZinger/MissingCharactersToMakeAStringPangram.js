/*
Given a string S, find all characters that are missing from the string S, i.e., the characters that can make the string a Pangram. Display output in alphabetic order.

 

Input:

     The quick brown fox jumps

 

    where:

First line represents string S.
 

Output:

    adglvyz
*/

function solution(a) {
    let alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let result = "";
    for (let i = 0; i < alphabets.length; i++) {
        if (!a.includes(alphabets[i])) {
            result += alphabets[i];
        }
    }
    return result;
}