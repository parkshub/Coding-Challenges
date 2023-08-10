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


function removeElement(head, val) {
    while (head && head.val === val) {
        head = head.next
    }

    let current = head

    while (current && current.next) {
        if (current.next.val === val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }

    return head
}