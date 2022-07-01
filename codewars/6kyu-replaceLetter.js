// Replace With Alphabet Position
// Welcome. In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {

    let a = [...Array(26)].map((_, i) => i + 97)
    let b = a.map(x => String.fromCharCode(x))
    let c = {}
  
    b.forEach((x, i) => c[x]=i+1)
  
    let textFiltered = text.toLowerCase().split('').filter(char => /[a-z]/.test(char))
    
    return textFiltered.map((x, i) => c[x]).join(' ')
  }