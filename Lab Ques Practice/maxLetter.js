/*
Find maximum number of letters found in a word.
*/

let maxLengthOfWord = function (words) {
    let max = 0;
    let word = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i] != " ") {
            word += words[i];
        }

        if (words[i] == " " || i == words.length - 1) {
            if (word.length > max) {
                max = word.length;
            }
            word = "";
        }
    }
    return max;
}

let a = maxLengthOfWord("i love coding");
console.log(a);