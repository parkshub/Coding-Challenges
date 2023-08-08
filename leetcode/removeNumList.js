// const list = {"val":1,"next":{"val":2,"next":{"val":3,"next": {"val": 6, "next": {"val": 4, "next": {"val": 6, "next": null}}}}}}
const list = {"val":1,"next":{"val":2,"next": null}}


function traverse(head) {
    if (head === null) { return }
    console.log(head.val)
    return traverse(head.next)
}


var removeElements = function(head, val) {

    while (head !== null) {
        if (head.val === val) {
            head = head.next
        } 
        else {
            break
        }
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
};