
function mergeArr(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    //=========or=======
    // while (result.length < (n + m)) {
    //     if (i == n) {
    //         result.push(arr2[j])
    //         j++
    //     }
    //     else if (j == m) {
    //         result.push(arr1[i])
    //         i++
    //     }
    //     else {
    //         if (arr1[i] < arr2[j]) {
    //             result.push(arr1[i])
    //             i++
    //         }
    //         else {
    //             result.push(arr2[j])
    //             j++
    //         }
    //     }
    
        return result;
    }



let arr1 = [1, 6, 9];
let arr2 = [2, 4, 8, 10, 15];
let a = mergeArr(arr1, arr2);
console.log(a);
