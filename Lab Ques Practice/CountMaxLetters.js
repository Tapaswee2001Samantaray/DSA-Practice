/*

Count the number of repeated alphabets in a given string.
*/

function countMaxLetters(str) {
    let map = new Map();

    for (let i = 0; i < str.length; i++) {
        map.set(str[i], (map.get(str[i]) || 0) + 1);
    }

    let result = 0;
    for (let key of map) {
        if (key[1] > 1) {
            result++;
        }
    }
    return result;
}

let a = countMaxLetters("akodwaakkd");
console.log(a);