let l1 = {val: 2, next: {val: 4, next: {val: 5, next: {val: 10, next: null}}}}
let l2 = {val: 1, next: {val: 5, next: {val: 7, next: null}}}
// -----------------------------------------------------
// let head = {val: null, next:null}
// let curr = head;

// while (l1 && l2) {
//     if (l1.val < l2.val) {
//         curr.next = l1;
//         console.log(JSON.stringify(curr),'\n' ,JSON.stringify(head),'\n' )
//         l1 = l1.next;
//     } else {
//         curr.next = l2;
//         console.log(JSON.stringify(curr),'\n' ,JSON.stringify(head), '\n')
//         l2 = l2.next;
//     }
//     curr = curr.next;
//     console.log(JSON.stringify(curr),'\n' ,JSON.stringify(head), '\n\n-----------------------')
// }
// curr.next = 'dude';
// console.log('-------------------->\n' + JSON.stringify(curr.next),'\n' ,JSON.stringify(head.next))
// -----------------------------------------------------

let head = {val: null, next: null}
curr = head
while (l1 && l2) {
    if (l1.val < l2.val) {
        curr.next = l1
        l1 = l1.next
    }
    else {
        curr.next = l2
        l2 = l2.next
    }
    curr = curr.next
}
curr = 1
console.log(JSON.stringify(head))