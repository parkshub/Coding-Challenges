const input = [3,9,20,null,null,15,7]
// true

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const treeRoot = new TreeNode(3)
const treeLeft = new TreeNode(9, null, null)
const treeRight = new TreeNode(20, 15, 17)
treeRoot.left = treeLeft
treeRoot.right = treeRight
console.log(treeRoot)

var isBalanced = function(root) {
    if (root === null) { return true }

    return Math.abs(helper(root.left) - helper(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)

    function helper(root) {
        if (root === null) { return 0 }
        if (root.left === null) { return helper(root.right) + 1 }
        if (root.right === null) { return helper(root.left) + 1 }

        return Math.max(helper(root.left), helper(root.right)) + 1
    }
};