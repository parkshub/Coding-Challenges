let a = 1
let b = 2

console.log('first')

setTimeout(() => {
  console.log(a)
}, 1000)

setTimeout(() => {
  console.log(b)
}, 100)

console.log('second')