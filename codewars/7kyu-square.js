function squareDigits(num){  
    num = String(num).split('')
    let res = ''
    
    if (num) {
      for (let i of num) {
        res += String(i**2)
      }
      return Number(res)
    }
    return 0;
  }