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

  let aa = new Node(2)
  let bb = new Node(4)
  let cc = new Node(1)
  let dd = new Node(3)
  let ee = new Node(6)
  let ff = new Node(2)
  
  aa.left = bb
  aa.right = cc
  bb.left = dd
  bb.right = ee
  cc.right = ff

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
    if (root === null) return 0;
    let larger = Math.max(maxRootPathV1(root.left), maxRootPathV1(root.right))
    return larger + root.val
}

function maxRootPathV2(root) {
    if (root === null) return 0;
    let left = maxRootPathV2(root.left)
    let right = maxRootPathV2(root.right)
    return Math.max(root.val + left, root.val + right)
}

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

var inorderTraversal = function(root) {
    // left root right
    let stack = []
    let arr = []

    while(stack.length || root) {
        if (root !== null) {
            stack.push(root)
            root = root.left
        }
        else {
            node = stack.pop()
            arr.push(node.val)
            root = node.right
        }
    }

    return arr
};


var postorderTraversal = function(root) {
    // left, right, root
    if (root === null) return [];

    let stack = [root]
    let arr = []

    while(stack.length) {
        let node = stack.pop()
        arr.push(node.val)

        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }

    return arr.reverse()
};

function sameTree(treeA, treeB) {
    
    let queue = [ treeA, treeB ]

    while (queue.length) {
        let a = queue.shift()
        let b = queue.shift()

        if (!a && !b) { continue }

        if ((!a && b) || (a && !b) || a.val !== b.val) {
            return false
        }

        queue.push(a.left)
        queue.push(b.left)
        queue.push(a.right)
        queue.push(b.right)
    }

    return true
}

const hasPathSum = (head, value) => {
    if (!head) { return false }

    let stack = [ [ head, 0 ] ]
    let sumsList = [ ]

    while (stack.length) {
        let [ current, sum ] = stack.pop()
        if (!current.left && !current.right) { 
            sumsList.push(sum + current.val) 
            continue
        }
        if (current.left) { 
            stack.push([ current.left, current.val + sum ])
        }
        if (current.right) { 
            stack.push([ current.right, current.val + sum ])
        }

    }

    return sumsList.includes(value)
}

const maxPath = (head) => {
    if (head === null) { return 0 }

    if (!head.left) { return maxPath(head.right) + head.val}
    if (!head.right) { return maxPath(head.left) + head.val}
    // just change this part to min if you're looking for a minimum
    return Math.max(maxPath(head.right), maxPath(head.left)) + head.val
}