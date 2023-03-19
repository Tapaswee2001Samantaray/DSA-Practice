/*
Return the element which does not make any pair.
*/

function withoutPair(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    let result = [];
    for (let key of map) {
        if (key[1] & 1) {
            result.push(key[0]);
        }
    }
    return result;
}

let a = withoutPair([1, 1, 2, 3, 4, 3, 2, 4, 4, 5]);
console.log(a);