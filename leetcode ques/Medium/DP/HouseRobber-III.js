/*
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this
place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same 
night.

Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

 

Example 1:


Input: root = [3,2,3,null,3,null,1]
Output: 7
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:


Input: root = [3,4,5,1,3,null,1]
Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
0 <= Node.val <= 104
*/

var rob = function (root) {
    if (root == null) {
        return 0;
    }

    let result = robDsf(root);

    return Math.max(result[0], result[1]);
    //TC : O(n)
 //SC: O(n)
};

let robDsf = function (root) {
    if (root == null) {
        return [0, 0];
    }

    let left = robDsf(root.left);
    let right = robDsf(root.right);

    let ans = [];

    ans[0] = root.value + left[1] + right[1]; // including root and not including its children
    ans[1] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);// not including root but including max value of choices till its children

    return ans;
}