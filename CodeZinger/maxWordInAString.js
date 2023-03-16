/*
Find maximum length of word found in the given string.
*/

let maxLengthWord = function (str) {
    let max = 0;
    let word = "";
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            word += str[i];
        }

        if (str[i] == " " || i == str.length - 1) {
            if (word.length > max) {
                max = word.length;
                ans = word;
            }
            word = "";
        }
    }
    return ans;
}

let a = maxLengthWord("i love coding");
console.log(a);