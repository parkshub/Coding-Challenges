function vowelBack(s){
    let vowels = ['a', 'i', 'u'].map(x => x.charCodeAt())
    let exceptions = [99, 111, 100, 101]
    let coded = s.split('').map(x => x.charCodeAt())
    let codedAdjusted = coded.map(x => {
        if (x === 99) {return 98}
        if (x === 111) {return 110}
        if (x === 100) {return 97}
        if (x === 101) {return 97}
        if (vowels.includes(x)) {return x - 5}
        return x + 9
    })
    
    codedAdjusted = codedAdjusted.map(x => {
        if (x<97) {return 122 - (96 - x)}
        else if (x>122) {return x - 122 + 96}
        else {return x}
    })
  
    for (let i = 0; i<codedAdjusted.length; i++) {
        if (exceptions.includes(codedAdjusted[i])) {
            codedAdjusted[i] = coded[i]
        }
    }
    return codedAdjusted.map(x => String.fromCharCode(x)).join('')
  }