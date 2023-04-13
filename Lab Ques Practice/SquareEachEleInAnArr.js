/*
Square each elements in an array.
*/

function squareElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

let a = squareElements([1, 2, 3, 4, 5]);
console.log(a);