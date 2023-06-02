// only one odd allowed

let a = 'asd'

function permuteAPalindrome (input) {
    const cache = {}
    let counter = 0
    
    for (let letter of input) {
        cache[letter] = cache[letter] || 0
        cache[letter] += 1
    }

    for (let count of Object.values(cache)) {
        counter += count % 2
    }

    return counter < 2
}

// for (let i of a) {
//     console.log(i)
// }

console.log(permuteAPalindrome('madam'))