// https://www.youtube.com/watch?v=Hj_rA0dhr2I&list=PLYXTMeEw1oo90WpyT0bdT9y867mQvePBd&index=1&ab_channel=freeCodeCamp.org

// what the difference between an array and a linked list?
// when we insert an element into an array we have to shift everything beyond that point by one so it has a 0(n) insertion
// but for linked lists, you just have to adjust the pointers and no matter how many elements you have it'll be 0(1) insertion



// make linked list using classes
// traverse through list iteratively and recursively, then do SQL review

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const a = new Node(2)
const b = new Node(8)
const c = new Node(3)
const d = new Node(7)

a.next = b
b.next = c
c.next = d

// both iterative and recursive time space complexity is O(n)

const traverse = (head) => {
    let current = head
    while(current !== null) { // the reason we don't do current.next !== null is because it'll skip the last element. Think about it
        console.log(current.val)
        current = current.next
    }
}

const traverseRec1 = (head) => {
    if (head === null) { return }
    console.log(head.val)
    traverseRec(head.next)
}

const traverseRec2 = (head) => {
    const values = []
    
    helper(head, values)

    return values
}

const helper = (head, values) => {
    if (head === null) { return }
    values.push(head.val)
    helper(head.next, values)
}

const sumList = (head) => {
    let sum = 0

    let current = head

    while(current !== null) {
        sum += current.val
        current = current.next
    }

    return sum
}

// 2, 8, 3, 7
const sumListRec = (head) => {
    if (head === null) { return 0 }
    return head.val + sumListRec(head.next)
}


const findTarget = (head, target) => {
    if (head === null) { return false }
    if (head.val === target) { return true }
    return findTarget(head.next, target)
}


// !!!! TRY FIND INDEX WITHOUT HELPER FUNCTION
const findIndex = (head, index) => {
    let count = 0
    
    function helper(node, count, index) {
        if (node === null) { return -1 }
        if (count === index) { return node.val }
        count += 1
        return helper(node.next, count, index) 
    }

    return helper(head, count, index)
}

// 2, 8, 3, 7
const sumListRecTest = (head) => {
    if (head === null) { return 0 }
    return head.val + sumListRecTest(head.next)
}