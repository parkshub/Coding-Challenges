class Node {
    constructor(root) {
      this.val = root
      this.left = null
      this.right = null
    }
  }
  
  let a = new Node(5)
  let b = new Node(11)
  let c = new Node(3)
  let d = new Node(4)
  let e = new Node(2)
  let f = new Node(1)
  
  a.left = b
  a.right = c
  b.left = d
  b.right = e
  c.right = f

//           a
//          / \
//         b   c
//        / \   \
//       d   e   f

//           2
//          / \
//         4   1
//        / \   \
//       3   6   2

function maxRootPathV1(root) {

}

console.log(maxRootPathV1(a))



function treeMinV1(root) {
    
    if(root === null) return [];

    function helper(node) {
        if (node === null) return Infinity;
        let left = helper(node.left)
        let right = helper(node.right)

        return Math.min(node.val, left, right)
    }
    
    return helper(root)
}

function treeMinV2(root) {
    let stack = [root]    
    let min = Infinity
    
    while(stack.length) {
        root = stack.pop()
        if (root.right) stack.push(root.right);
        if (root.left) stack.push(root.left);
        min = Math.min(root.val, min)
    }
    return min
}

function treeSumV1(root) {
    if (root === null) return 0;

    let stack = [root]
    let res = 0

    while(stack.length) {
        root = stack.pop()
        res += root.val
        if (root.right) stack.push(root.right);
        if (root.left) stack.push(root.left);
    }
    return res
}

function treeSumV2(root) {
    if (root === null) return 0;

    return root.val + treeSumV2(root.left) + treeSumV2(root.right)
}

function includesV1(root, target) {
    if (root === null) return false;
    
    let stack = [root]

    while(stack.length) {
        root = stack.pop()
        if (root.val === target) return true;
        if (root.left) stack.push(root.left)
        if (root.right) stack.push(root.right)
    }
    return false
}

function includesV2(root, target) {
    if (root === null) return false;
    if (root.val === target) return true;
    return includes(root.left, target) || includes(root.right, target)
}