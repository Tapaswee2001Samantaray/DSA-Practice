/*
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, 
then right to left for the next level and alternate between).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100
*/

var zigzagLevelOrder = function (root) {
    if (root == null) {
        return [];
    }

    let queue = [];//create a queue
    let answer = [];
    let leftToRight = true;// for maintaining direction and starting from left to right, false denotes right to left

    queue.push(root);

    while (queue.length != 0) {
        let currLevelNodes = [];
        let nodeAtCurrLevelCount = queue.length;
        for (let i = 0; i < nodeAtCurrLevelCount; i++) {
            let currNode = queue.shift();

            if (leftToRight == true) {
                currLevelNodes.push(currNode.val);
            } else {
                currLevelNodes.unshift(currNode.val);
            }

            if (currNode.left != null) {
                queue.push(currNode.left);
            }

            if (currNode.right != null) {
                queue.push(currNode.right);
            }
        }
        leftToRight = !leftToRight;
        answer.push(currLevelNodes);
    }
    //TC : O(n)
    //SC: O(k+n) where k is max nodes at any level
    return answer;
}