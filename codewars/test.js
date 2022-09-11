// let x = 'man i need a taxi up to ubud'
// let x = 'ta'
let x = '     '
console.log(x.split('').every(x=>' '))
let res = ''



x.split(' ').forEach(y => {
    res += ` ${y.substring(0, Math.floor(y.length/2)).split('').reverse().join('')}`

    if (y.length%2 != 0) {
        res += y[Math.floor(y.length/2)]
    }
    res += y.substring(Math.ceil(y.length/2), y.length).split('').reverse().join('')
    } 
)