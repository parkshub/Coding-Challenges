// var minDepth = function(root) {
//     if (root === null) { return 0 }
//     if (root.left === null) { return minDepth(root.right) + 1 }
//     if (root.right === null) { return minDepth(root.left) + 1 }

//     return Math.min( minDepth(root.left), minDepth(root.right) ) + 1
// };

var maxDepth = function(root) {
    // if (root === null) { return 0 }
    // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1

    // breadth first iterative solution

    // if (root === null) { return 0 }

    // const queue = [ root ]
    // let level = 0

    // while (queue.length !== 0) {
    //     const len = queue.length
    //     for (let i = 0; i < len; i++) {
    //         const current = queue.shift()

    //         if (current.left !== null) { queue.push(current.left) }
    //         if (current.right !== null) { queue.push(current.right) }
    //     }

    //     level++
    // }

    // return level

    // depth first iterative solution

    // if (root === null) { return 0 }

    // const stack = [ [ root, 0 ] ]

    // let res = -Infinity

    // while (stack.length !== 0) {
    //     const [ node, depth ] = stack.pop()

    //     res = Math.max(res, depth + 1)

    //     if (node.left) { stack.push([ node.left, depth + 1 ]) }
    //     if (node.right) { stack.push([ node.right, depth + 1 ]) }

    // }

    // return res
};


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

