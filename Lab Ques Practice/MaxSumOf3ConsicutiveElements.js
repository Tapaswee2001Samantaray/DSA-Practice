/*
Maximum sum of three consicutive elements of an array.
*/

function max3Sum(arr) {
    let currentSum = arr[0] + arr[1] + arr[2];
    let maxSum = 0;

    for (let i = 3; i < arr.length; i++) {
        currentSum += arr[i];
        currentSum -= arr[i - 3];

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}

let a = max3Sum([2, 3, 4, 5, 6, 7, 2, 1]);
console.log(a);