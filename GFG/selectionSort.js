/*
Sort the array using Selection sort algorithm.
*/

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function SelectionSort(arr) {
    let minIndex = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, minIndex, i);
    }
    return arr;
}

let a = SelectionSort([7, 5, 4, 2]);
console.log(a);