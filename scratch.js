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

function maxDepth(root) {
    if (root === null) { return 0 }

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1

}

// console.log(maxDepth(a))


function minDepth(root) {
    if (root === null) { return 0 }

    let level = 1

    let q = [ root ]

    while (q.length) {
        let len = q.length

        for (let i = 0; i < len; i++) {
            let current = q.shift()
            
            if (current.left === null && current.right === null) { return level }
            if (current.left !== null) { q.push(current.left) }
            if (current.right !== null) { q.push(current.right) }
        }

        level += 1
    }

    return level 
}

console.log(minDepth(a))


function minDepthV2 (root) {
    if (root === null) { return 0 } 

    if (root.right === null) { return minDepthV2(root.left) + 1 }
    if (root.left === null) { return minDepthV2(root.right) + 1 }

    return Math.min(minDepthV2(root.left), minDepthV2(root.right)) + 1
}


let s = '[()]'

function valid(s) {
    let my_dict = {'(': ')', '[': ']', '{': '}'}

    let check = []

    for (let i of s) {
        if (i == '(' || i == '[' || i == '{') {
            check.push(my_dict[i])
        }

        if (i == ')' || i == ']' || i == '}') {
            if (i === check[check.length - 1]) {
                check.pop()
            } else {
                return false
            }
        }
    }

    console.log(check)
    return check.length === 0
}

console.log(valid(s))