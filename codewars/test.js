let x = 'aa b'

let arr = new Array(122-96)

for (let i = 0; i < arr.length; i++) {arr[i] = String.fromCharCode(97+i)}

let answer = x.split(' ').map(word => word.split('').reduce((prev, curr) => {
    return prev + arr.indexOf(curr) + 1
},0))


let idx = answer.indexOf(Math.max(...answer))

console.log(answer,idx)

console.log(x.split(' ')[idx])