function reverseLetter(str) {
    return str.split('').filter(x => /[A-Za-z]/.test(x)).reverse().join('')
  }