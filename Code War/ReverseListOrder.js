/*
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]
*/

function reverseList(list) {
    let low = 0;
    let high = list.length - 1;

    while (low < high) {
        let temp = list[low];
        list[low] = list[high];
        list[high] = temp;
        low++;
        high--;
    }
    return list;
}

let a=reverseList([1, 2, 3, 4]);
console.log(a);