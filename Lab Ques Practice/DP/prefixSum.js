let arr = [2, 4, 6, 7, 9, 10];

let prefixSum = [];
prefixSum.push(arr[0]);

for (let i = 1; i < arr.length; i++) {
    let sum = arr[i] + prefixSum[i - 1];
    prefixSum.push(sum);
}

console.log(prefixSum);