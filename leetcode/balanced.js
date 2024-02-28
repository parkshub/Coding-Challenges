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
// console.log(treeRoot)

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

function balancedTest (root) {
    let left = 0
    let right = 0

    if (root.left) {
        left = maxDepth(root.left)
    }
    if (root.right) {
        right = maxDepth(root.right)
    }

    return Math.abs(left - right) < 2

}

function maxDepth(root) {
    if (root === null) { return 0 }

    if (!root.left) { return maxDepth(root.right) + 1 }
    if (!root.right) { return maxDepth(root.left) + 1 }
    return Math.max(maxDepth(root.right), maxDepth(root.left)) + 1
}
class Node {
    constructor(root) {
      this.val = root
      this.left = null
      this.right = null
    }
  }
  
  let a = new Node(2)
  let b = new Node(4)
  let c = new Node(1)
  let d = new Node(3)
  let e = new Node(6)
  let f = new Node(2)
  
  a.left = b
  a.right = c
  b.left = d
  b.right = e
  c.right = f
// console.log(a)
console.log(treeRoot.left)