function findUniq(arr) {
    let newArr = arr.map(x => x.toLowerCase().split(''))
  
    newArr = newArr.map(y => {
      if (y[0]==undefined) {return [32]}
      else {return y.map(z => z.charCodeAt())}})
  
    newArr = newArr.map(j => [...new Set(j)].sort())
  
    for (let i = 0; i<newArr.length-1; i++) {
      if (String(newArr[i]) !== String(newArr[i+1])) {
        if (i !== 0) {
            return arr[i+1]
        } else {
          if(String(newArr[i]) === String(newArr[newArr.length-1])) {
            return arr[i+1]
          }
          return arr[i]
        }
      }
    }
  }