function reverseWords(str) {
    let arr = []
    str.split(' ').forEach(x => arr.push(x.split('').reverse().join('')))
    return arr.join(' ')
  }