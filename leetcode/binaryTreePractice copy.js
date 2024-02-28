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

// do max and min depth
// do balanced tree


function breadthTest(root) {
    if (root === null) { return }

    let queue = [ root ]

    while (queue.length) {
        let current = queue.shift()
        console.log(current.val)

        if (current.left) { queue.push(current.left) }
        if (current.right) { queue.push(current.right) }
    }
}


function maxTest(node) {
    if (node === null) { return 0 }
    return Math.max(maxTest(node.left), maxTest(node.right)) + 1
}

console.log(maxTest(a))