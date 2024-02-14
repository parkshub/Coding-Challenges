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


function depthFirst(root) {
    let stack = [ root ]

    while (stack.length) {
        let current = stack.pop()
        console.log(current.val)

        if (current.left !== null) { stack.push(current.left) }
        if (current.right !== null) { stack.push(current.right) }
    }

    return
}

const depthRec = (root) => {
    if (root === null) { return }
    
    console.log(root.val)
    depthRec(root.left)
    depthRec(root.right)

    return
}

function breadth(root) {
    let queue = [ root ]

    while (queue.length) {
        let current = queue.shift()

        console.log(current.val)

        if (current.left !== null) { queue.push(current.left) }
        if (current.right !== null) { queue.push(current.right) }
    }
}


function maxPath(root) {
    if (root === null) { return 0 }

    let current = root.val + Math.max(maxPath(root.left), maxPath(root.right))

    return current
}

function maxPathV2(root) {
    if (root === null) { return 0 }

    let left = maxPathV2(root.left)
    let right = maxPathV2(root.right)

    return root.val + Math.max(left, right)   
}


function minPath(root) {
    if (root === null) { return 0 }

    let current = root.val + Math.min(maxPath(root.left), maxPath(root.right))

    return current
}

function includes(root, target) {
    if (root === null) { return }

    let queue = [ root ]

    while (queue.length) {
        let current = queue.shift()

        if (current.val === target) { return true }

        if (current.left) { queue.push(current.left) }
        if (current.right) { queue.push(current.right) }
    }

    return false
}

function includesV2(root, target) {
    if (root === null) { return false }
    if (root.val === target) { return true }

    if (includesV2(root.left, target) === true) { return true }
    if (includesV2(root.right, target) === true) { return true }

    return false
}

function maxDepthV1(root) {
    let max = -Infinity

    let stack = [ [ root, 1 ] ]

    while(stack.length) {
        console.log(stack)
        let current = stack.pop()
        console.log(current[0].val)

        max = Math.max(current[1], max)

        if (current[0].left) {
            stack.push([ current[0].left, current[1] + 1 ])
        }

        if (current[0].right) {
            stack.push([ current[0].right, current[1] + 1 ])
        }
    }

    return max
}



// do min depth braedth first and recursive