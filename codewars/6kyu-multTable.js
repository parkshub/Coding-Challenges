multiplicationTable = function(size) {
    let arr = [...new Array(size)].map(x => new Array(size).fill(0))
  
    for (let i = 0; i<arr.length; i++) {
      for (let j = 0; j<arr.length; j++) {
          arr[i][j] = (i+1) * (j+1)
      }
    }
    return arr
  }