let str = '72olle 97 103doo 100ya'



let strSplit = str.split(' ')

for (let i = 0; i < strSplit.length; i++) {
    let numbers = strSplit[i].split('').filter(x => /[0-9]/.test(x)).join('')
    let letters = strSplit[i].split('').filter(x => !/[0-9]/.test(x))
    let numToLetter = String.fromCharCode(numbers)

    if (letters.length) {
        let temp = letters[0]
        letters[0] = letters[letters.length - 1]
        letters[letters.length - 1] = temp
    }
    letters.unshift(numToLetter)
    letters = letters.join('')
    console.log(letters)
    strSplit[i] = letters
}
console.log(strSplit.join(' '))

