function positiveSum(arr) {
    return arr.reduce((prev, curr) => {    
      if (curr >= 0) {
        return prev + curr
      } else {
        return prev
      }
    }, 0)
  }