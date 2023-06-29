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

let tail = a

let current1 = a.next

tail.next.next = 'something'

console.log(current1)