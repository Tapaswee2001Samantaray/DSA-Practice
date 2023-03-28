/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
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

var levelOrder = function (root) {
    if (root == null) {
        return [];
    }

    let queue = [];
    let answer = [];

    queue.push(root);

    while (queue.length != 0) {
        let levelNodeList = [];
        let nodeAtCurrentLevel = queue.length;

        for (let i = 0; i < nodeAtCurrentLevel; i++) {
            let currentNode = queue.shift();
            levelNodeList.push(currentNode.val);

            if (currentNode.left != null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right != null) {
                queue.push(currentNode.right);
            }
        }
        answer.push(levelNodeList);
    }
    return answer;
}