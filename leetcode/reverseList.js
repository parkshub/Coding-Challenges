// const list = {"val":1,"next":{"val":2,"next":{"val":3,"next":null}}}

// var reverseList = function(head) {
//     let prev = null
//     let current = head

//     while (current !== null) {
//         const next = current.next
//         current.next = prev
//         prev = current
//         current = next
//     }

//     return prev
// };

// const reverseListRec = (head, prev = null) => {
//     if (!head) { return prev }
//     const next = head.next
//     head.next = prev
//     return reverseListRec(next, head)
// }

// //  null    1     2     3
// //  prev   curr  next

const list = {"val":1,"next":{"val":2,"next":{"val":3,"next":null}}}

function reverse(head) {
    let current = null
    let next = head

    while (current !== null) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
}


function reverseRec(head, prev = null) {
    if (head === null) { return prev }
    let next = head.next
    head.next = prev
    return reverseRec(next, head)
}