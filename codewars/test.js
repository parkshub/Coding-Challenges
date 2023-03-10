let str = 'TheCat_is-evil'

console.log(str.length)
// let strSplit = str.includes('-') ? str.split('-') : str.split('_')

console.log(str.split(/[_-]/))

// let test = strSplit.map((x, i) => {
//     if (i === 0) { return x }
//     let arr = x.split('')
//     arr[0] = arr[0].toUpperCase()
//     return arr.join('')
// }).join('')

// // console.log(test)


// console.log(test)