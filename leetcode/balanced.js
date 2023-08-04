const input = [3,9,20,null,null,15,7]
// true

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isBalanced = function(root) {
    if (root === null) { return 0 }

    return Math.abs(helper(root.left) - helper(root.right)) < 2

    function helper(root, count) {
        if (root === null) { return count }
        
        const left = helper(root.left, count + 1)
        const right = helper(root.right, count + 1)

        return Math.max(helper(left), helper(right))
    }

};