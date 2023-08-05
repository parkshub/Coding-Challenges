const list = {"val":1,"next":{"val":2,"next":{"val":3,"next":null}}}

var reverseList = function(head) {
    let prev = null
    let current = head

    while (current !== null) { 
        let next = current.next
        current.next = prev
        current = current.nex
        prev = head.next
    }

    return current

};

console.log(reverseList(list))

//  null    1     2     3
//  prev   curr  next