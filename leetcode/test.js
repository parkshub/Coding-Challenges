class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next = b
b.next = c
c.next = d

const a2 = new Node(2)
const b2 = new Node(8)
const c2 = new Node(3)
const d2 = new Node(7)

a2.next = b2
b2.next = c2
c2.next = d2

const sumListRec = (head) => {
    if (head === null) { return 0 }
    return head.val + sumListRec(head.next)
}

const sumList = (head) => {
    let count = 0
    let current = head

    while(current !== null) {
        count += current.val
        current = current.next
    }

    return count
}

// return true if target exists and false otherwise
const findTarget = (head, target) => {
    if (head === null) { return false }
    if (head.val === target) { return true }

    return findTarget(head.next, target)
}


// return the index value of the target
// if it doesn't exist, return -1
const findByIndex = (head, index) => {
    if (head === null) { return -1 }
    if (index === 0) { return head.val }
    
    return findByIndex(head.next, index - 1)
}

const reverseList = (head) => {
    let current = head
    let prev = null

    while (current !== null) {
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
}

const zipperList = (head1, head2) => {
    let tail = head1
    let count = 0
    let current1 = head1.next
    let current2 = head2

    while (current1 !== null && current2 !== null) {
        if (count % 2 === 0) {
            tail.next = current2
            current2 = current2.next
        } else {
            tail.next = current1
            current1 = current1.next
        }
        tail = tail.next
        count +=1
    }
    
    tail.next = current1 || current2

    return head1

    // if (current1 !== null) tail.next = current1
    // if (current2 !== null) tail.next = current2

    // return head1
}

console.log(zipperList(a, a2))