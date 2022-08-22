function arrayDiff(a, b) {
    let res = []
    a.forEach((x, i) => {
      if(b.every(val => x !== val)) {
        res.push(x)
      }
    })
    return res
  }