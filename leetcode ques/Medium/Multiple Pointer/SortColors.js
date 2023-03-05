/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
*/

var sortColors = function (nums) {
    // let noOfRed = 0;
    // let noOfWhite = 0;
    // let noOfBlue = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] == 0) {
    //         noOfRed++;
    //     } else if (nums[i] == 1) {
    //         noOfWhite++;
    //     } else {
    //         noOfBlue++;
    //     }
    // }

    // let j = 0;
    // for (let i = 0; i < noOfRed; i++) {
    //     nums[j] = 0;
    //     j++;
    // }
    // for (let i = 0; i < noOfWhite; i++) {
    //     nums[j] = 1;
    //     j++;
    // }
    // for (let i = 0; i < noOfBlue; i++) {
    //     nums[j] = 2;
    //     j++;
    // }
    // return nums;

    //=========or========
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] == 0) {
            let temp = nums[mid];
            nums[mid] = nums[low];
            nums[low] = temp;

            low++;
            mid++;
        } else if (nums[mid] == 2) {
            let temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;

            high--;
        } else {
            mid++;
        }
    }
    return nums;
}

let a = sortColors([2, 0, 2, 1, 1, 0]);
console.log(a);