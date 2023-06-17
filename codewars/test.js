// let a = 89
// let b = 135


let count = 0

let a = 50
let b = 150
let arr = []
for (let pos = a; pos <= b; pos++) {
    let count = 0
    let stringed = String(pos)
    for (let i = 0; i < stringed.length; i++) {
        count += Math.pow(stringed[i], i + 1)
    }
    if (count === pos) { arr.push(pos) }
}


console.log(arr)



