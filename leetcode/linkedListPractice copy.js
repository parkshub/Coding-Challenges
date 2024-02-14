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

console.log(a.next.next)


function traverse(node) {
    if (node === null) { return }

    console.log(node.val)
    traverse(node.next)
}

function reverseList(head) {
    let prev = null
    let current = head

    while (current !== null) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

    console.log(prev)
}