// const input = [-10,-3,0,5,9]

function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
    }

// function bts(input) {
//     if (!input.length) { return null }
    
//     const mid = Math.floor(input.length / 2)
//     const node = new TreeNode(input[mid])

//     node.left = bts(input.slice(0, mid))
//     node.right = bts(input.slice(mid + 1))

//     return node
// }

let nums = [-10,-3,0,5,9]

function heightBasedTree(input) {
    if (input.length === 0) { return null }

    const middle = Math.floor(input.length / 2)
    const tree = new TreeNode(input[middle])

    tree.left = heightBasedTree(input.slice(0, middle))
    tree.right = heightBasedTree(input.slice(middle + 1))

    return tree
}

console.log(heightBasedTree(nums))