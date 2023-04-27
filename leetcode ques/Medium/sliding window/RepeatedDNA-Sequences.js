/*
The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a 
DNA molecule. You may return the answer in any order.

 

Example 1:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]
Example 2:

Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]
 

Constraints:

1 <= s.length <= 105
s[i] is either 'A', 'C', 'G', or 'T'.
*/

var findRepeatedDnaSequences = function (s) {
    let seen = new Set();
    let repeated = new Set();

    for (let i = 0; i < s.length; i++) {
        let currWindow = s.substring(i, i + 10);
        if (seen.has(currWindow)) {
            repeated.add(currWindow);
        }
        seen.add(currWindow);
    }
    let result = Array.from(repeated);
    return result;
}

let a = findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT");
console.log(a);