function digital_root(n) {
    let numStrSplt = String(n).split('')
    
    return (Number(numStrSplt.reduce((prev, cur) => {
      cur = prev.reduce((a,b) => {return +a + +b})
      return String(cur).split('')
    }, numStrSplt)))
  }