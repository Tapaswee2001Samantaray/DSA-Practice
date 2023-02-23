/*
Given a string S, find the difficulty of the given string. Here a Word is considered hard if it has 4 consecutive consonants or number of consonants is more than the number of vowels. Else word is easy. Difficulty of the string is defined as 5*(number of hard words) + 3*(number of easy words).

 

Input:

    Difficulty of sentence

 

    where:

First line represents input string S.
 

Output:

     13

 

Explanation:

Hard words = 2(Difficulty and sentence) Easy words = 1(of) So, answer is 5*2+3*1 = 13
*/

function solution(a) {

    if (a.length == 0) {
        return 0;
    }
    a = a.toLowerCase().split(" ");
    let vowels = ["a", "e", "i", "o", "u"];
    let hard = 0;
    let easy = 0;
    for (let i = 0; i < a.length; i++) {
        let noOfV = 0;
        let noOfC = 0;
        let consonants = 0;
        for (let j = 0; j < a[i].length; j++) {
            if (vowels.includes(a[i][j])) {
                noOfV++;
                consonants = 0;
            } else {
                noOfC++;
                consonants++;
            }
            if (consonants >= 4) {
                break;
            }
        }
        if (noOfC > noOfV || consonants >= 4) {
            hard++;
        } else {
            easy++;
        }
    }
    return (5 * hard) + (3 * easy);
}