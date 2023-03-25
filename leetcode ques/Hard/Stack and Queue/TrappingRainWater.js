/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after 
raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain 
water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/


var trap = function (height) {
    let stack = [];
    let totalUnitOfWater = 0;

    for (let i = 0; i < height.length; i++) {
        //height[i] acts as a right wall
        while (stack.length != 0 && height[i] > height[stack[stack.length - 1]]) {
            let poppedIndex = stack.pop();//gap

            if (stack.length == 0) {
                break;
            }

            let length = Math.min(height[i], height[stack[stack.length - 1]]) - height[poppedIndex];
            let breadth = i - stack[stack.length - 1] - 1;

            totalUnitOfWater += length * breadth;
        }
        stack.push(i);
    }
    return totalUnitOfWater;
}

// let a = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
let a = trap([4, 2, 0, 3, 2, 5]);
console.log(a);