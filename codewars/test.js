p = console.log

// vowels 5 back
// cons 9 forward
// c, o 1 back --> b, n
// d 3 back --> a
// e 4 back --> a
// if reverts to c, o, d, e then revert back to original

let s = 'testcase'
let vowels = ['a', 'i', 'u'].map(x => x.charCodeAt())
// vowels = [ 97, 105, 117 ]
let exceptions = [99, 111, 100, 101]
// p(vowels.includes(97))
// p('a'.charCodeAt()) // 97
// p('z'.charCodeAt()) // 122

// p('c'.charCodeAt()) //99 --> 98 exception
// p('o'.charCodeAt()) //111 --> 110 exception

// p('d'.charCodeAt()) //100 --> 97   
// p('e'.charCodeAt()) //101 --> 97


// if num less than 97 then minus that from z
// if over 122, get difference of 122 and 97 and add to 97

// if minused and turns into 99,111,100,101 revert back to original

let coded = s.split('').map(x => x.charCodeAt())

// loop through onces and ones that are under 0, then 122 - that number
    // if over 25, then that number - 25

p(coded)

let codedAdjusted = coded.map(x => {
    if (x === 99) {return 98}
    if (x === 111) {return 110}
    if (x === 100) {return 97}
    if (x === 101) {return 97}
    if (vowels.includes(x)) {return x - 5}
    return x + 9
})

p(codedAdjusted)

codedAdjusted = codedAdjusted.map(x => {
    if (x<97) {return 122 - (96 - x)}
    else if (x>122) {return x - 122 + 96}
    else {return x}
})

p(codedAdjusted)

for (let i = 0; i<codedAdjusted.length; i++) {
    if (exceptions.includes(codedAdjusted[i])) {
        codedAdjusted[i] = coded[i]
    }
}

p(codedAdjusted)

p(codedAdjusted.map(x => String.fromCharCode(x)))