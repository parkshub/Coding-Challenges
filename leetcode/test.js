let a = [-1,-2,-3,-4,-4, -6, -3]
let b = [1,2,3]


// a.replace(' ', '')

a.sort((a,b)=>a-b)
console.log(a)

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

let test = a.reduceRight((prev, cur) => {
    let temp = {}
    temp.val = cur
    temp.next = prev

    return temp
}, null)
