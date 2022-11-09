let s = "0P"


s = s.trim()

if (!s) return true;

s = s.toLowerCase().split('').filter(x => /[A-Za-z]/.test(x))
let copy = JSON.parse(JSON.stringify(s))
console.log(s.reverse().join('') == copy.join(''))