p = console.log

let a = { abc: undefined, arara: undefined }

let keys = Object.keys(a)


// for (i of keys) {
//     p(keys)
//     p(a[i] = i.split('').reverse().join(''))
// }

keys.forEach(x => {
    a[x] = x.split('').reverse().join('')
})