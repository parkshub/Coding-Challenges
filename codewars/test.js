let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let beginning = `(${a.slice(0,3).join('')})`
let middle = a.slice(3,6).join('')
let end = a.slice(6).join('')

let res = beginning + ' ' + middle + '-' + end

console.log(res)
