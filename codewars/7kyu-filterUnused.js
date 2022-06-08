// Filter unused digits
// Given a varying number of integer arguments, return the digits that are not present in any of them.

function unusedDigits() {
    let joined = Object.values(arguments).join('')
    let output = []
    for (let i=0; i<=9; i++) {
      if (!joined.includes(i)) {
        output.push(i)
      }
    }
    return output.join('')
  }