/*
Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by 
level from leaf to root).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
*/

var levelOrderBottom = function (root) {
    if (root == null) {
        return [];
    }

    let queue = [];
    let answer = [];

    queue.push(root);

    while (queue.length != 0) {
        let levelListNode = [];
        let nodeAtCurrLevel = queue.length;

        for (let i = 0; i < nodeAtCurrLevel; i++) {
            let currNode = queue.shift();
            levelListNode.push(currNode.value);

            if (currNode.left != null) {
                queue.push(currNode.left);
            }

            if (currNode.right != null) {
                queue.push(currNode.right);
            }
        }
        answer.unshift(levelListNode);
    }
    return answer;
}