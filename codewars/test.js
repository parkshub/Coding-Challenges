let array = ['a','b','c','d','f','g', 'i']

let position = array[0].charCodeAt()

// console.log(array[0].charCodeAt())

// console.log(array.slice(1))
let res;

array.to

array.slice(1).forEach(x => {
    if (position + 1 != x.charCodeAt()) { return res = String.fromCharCode(position + 1) }
    else { position += 1 }
})

console.log(res)