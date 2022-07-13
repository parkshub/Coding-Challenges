function ascendDescend(length, minimum, maximum) {
  
    if (length == 0 || maximum<minimum) {
      return 0
    }
    
    if (minimum == maximum) {
      return String(minimum).repeat(length).slice(0, length)
    }
    
    let a = Array(maximum-minimum+1).fill().map((_, i) => minimum+i)
    let b = Array(maximum-minimum-1).fill().map((_, i) => maximum-i-1)
    let repeater = a.concat(b)
    let repeatNum = Math.ceil(length/repeater.length)
    return repeater.join('').repeat(repeatNum).slice(0,length)
  }