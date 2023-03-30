/*
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node 
values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could 
also be considered as a subtree of itself.

 

Example 1:


Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
Example 2:


Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
 

Constraints:

The number of nodes in the root tree is in the range [1, 2000].
The number of nodes in the subRoot tree is in the range [1, 1000].
-104 <= root.val <= 104
-104 <= subRoot.val <= 104
*/

var isSubtree = function (root, subRoot) {
    if (root == null) {
        return false;
    }

    if (isSameTree(root, subRoot)) {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

let isSameTree = function (mainTree, subTree) {
    if (mainTree == null && subTree == null) {
        return true;
    }

    if ((mainTree != null && subTree == null) || (mainTree == null && subTree != null)) {
        return false;
    }

    if (mainTree.value != subTree.value) {
        return false;
    } 

    return isSameTree(mainTree.left, subTree.left) && isSameTree(mainTree.right, subTree.right);
}