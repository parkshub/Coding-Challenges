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

const a2 = new Node(1)
const b2 = new Node(1)
const c2 = new Node(2)
const d2 = new Node(3)
const e2 = new Node(3)

a2.next = b2
b2.next = c2
c2.next = d2
d2.next = e2

// console.log(a.next.next)


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



function traverse1(node) {
    if (node === null) { return }
    console.log(node.val)
    traverse(node.next)
}


// prev
// current
// next
// a - b - c - d
function reverse(node) {
    let prev = null
    let current = node

    while (current !== null) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

// a - b - c - d
// prev = null
// current = a, b, c, d
// next = b, c, d


// console.log(9||null)


 function removeElement(val, head) {
    if (head === null) { return [] }
    

    while (head.val == val) {
        console.log('first')
        head = head.next
    }

    let current = head


    while (current && current.next) {
        if (current.next.val === val) {
            current.next = current.next.next
        }
        else {
            current = current.next
        }
    }

    return head
 }



 //1, 1, 2, 3, 3

function removeDuplicate(head) {
    if (head === null) { return null }

    let dupes = [ ]
    let current = {'val': null, 'next': head}

    while (current && current.next) {
        if (dupes.includes(current.next.val)) {
            current.next = current.next.next
        } else {
            dupes.push(current.val)
            current = current.next
        }
    }

    return head
}

console.log(JSON.stringify(removeDuplicate(a2)))