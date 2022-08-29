function digPow(n, p){
    let res = 0
    let nSplit = String(n).split('').map(x => Number(x))
    for (let i of nSplit) {
      res += i**p
      p += 1
    }
    if (res%n == 0) {
      return res/n
    }
    return -1
  }