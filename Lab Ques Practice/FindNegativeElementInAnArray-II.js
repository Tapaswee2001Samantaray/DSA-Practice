/*
Given an sorted Array , find out the total number of negative element present in that array.
*/

function findNegativeElement(nums) {
    let ans = 0;
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (mid == 0) {//if mid is at index 0
            if (nums[mid] > 0) {
                ans = 0;
                break;
            } else {
                low = mid + 1;
            }
        } else if (mid == nums.length - 1) {//if mid is at last index
            if (nums[mid] < 0) {
                ans = nums.length;
                break;
            } else {
                high = mid - 1;
            }
        } else if (nums[mid] < 0) {
            ans = mid + 1;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

// let a = findNegativeElement([-4,-3,-2,-1,0,1,2,3,4,5,6]);
// let a = findNegativeElement([0,1,2,3,4,5,6]);
let a = findNegativeElement([-4,-3,-2,-1]);
console.log(a);