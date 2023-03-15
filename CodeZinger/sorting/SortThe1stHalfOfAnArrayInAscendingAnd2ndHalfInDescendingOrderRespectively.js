/*
Given an array of N integers, sort the first half of the array in ascending order and second half in descending order.

Note: If N is odd. then the first half will have one element less than the second half.

 

Input:

    9

    5 2 4 7 9 3 1 6 8

 

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    1 2 3 4 9 8 7 6 5

 

Explanation: As we can see the array is sorted in ascending order till halfway, here till index 3 (till element 4). After that from 
index 4(from element 9), the array is in descending order.

 
*/

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swap = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }
        if (swap == false) {
            break;
        }
    }

    for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
        let swap = false;
        for (let j = Math.floor(arr.length / 2); j < arr.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }
        if (swap == false) {
            break;
        }
    }
    return arr;
}

function solution(a, arr) {

    bubbleSort(arr);
    return arr.join(" ");
}