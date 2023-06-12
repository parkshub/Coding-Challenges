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

const traverse = (head) => {
    let current = head
    while(current !== null) {
        console.log(current.val)
        current = current.next
    }
}

const traverseRec = (head) => {
    if (head === null) { return }
    console.log(head.val)
    traverseRec(head.next)
}