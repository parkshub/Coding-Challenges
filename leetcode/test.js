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


// const arr = [8, 20, -2, 4, -6]

// quick sort practice

function qs(arr) {
    
    if (arr.length < 2) { return arr }

    let pivot = arr.pop()
    let left = []
    let right = []

    while (arr.length) {
        let current = arr.pop()
        if (current > pivot) { right.push(current) }
        if (current <= pivot) { left.push(current) }
    }

    return [...qs(left), pivot, ...qs(right)]
}

// merge sort practice

function ms(arr) {

    if (arr.length < 2) {
        return arr
    }

    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)

    return ms_helper(ms(left), ms(right))

}

function ms_helper(left, right) {

    let res = []

    while (left.length && right.length) {
        if (left[0] <= right[0]) { 
            res.push(right.shift()) 
        }
        else { 
            res.push(left.shift()) 
        }
    }

    let leftover = left.length ? left : right

    return [...res, ...leftover]
}

// binary tree search
// depth search

function depth(root) {
    let stack = [ root ]

    while (stack.length) {
        let current = stack.pop()
        console.log(current.val)

        if (current.right !== null) {
            stack.push(current.right)
        }

        if (current.left !== null) {
            stack.push(current.left)
        }
    }
}

function depth_rec(root) {
    if (root === null) { return }

    console.log(root.val)

    depth_rec(root.left)
    depth_rec(root.right)

    return
}


function max_p(root) {
    if (root === null) return 0
    let largest = Math.max(max_p(root.left), max_p(root.right))
    return root.val + largest
}

function max_p2(root) {
    if (root === null) return 0
    
    let left = max_p2(root.left)
    let right = max_p2(root.right)

    return Math.max(left + root.val, right + root.val)
}


console.log(max_p2(a))