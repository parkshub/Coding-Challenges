p = console.log

let string = 'h2ll4'

let encoder = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5}


function encode(string) {
    let splitString = string.split('')

    for (let i = 0; i<splitString.length; i++) {
        if (encoder[splitString[i]] === undefined) {continue}
        splitString[i] = encoder[splitString[i]]
    }
    return splitString.join('')
}

function decode(string) {
    let splitString = string.split('')
    let values = Object.values(encoder)
    let keys = Object.keys(encoder)

    for (let i = 0; i<splitString.length; i++) {
        if (values.includes(Number(splitString[i]))) {
            let idx = values.indexOf(Number(splitString[i]))
            splitString[i] = keys[idx]
        }
    }
    return splitString.join('')
}

p(decode(string))