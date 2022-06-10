// Sum of Digits/Digital Root
// DESCRIPTION:
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n){
    let add = 0
    let new_n = String(n).split('')
    
    new_n.map(x=>{add+=Number(x)})

    if (add>=10){
        return digital_root(add)
    } else {
        return add
    }
}