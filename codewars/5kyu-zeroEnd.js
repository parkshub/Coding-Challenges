function moveZeros(arr) {
    let nonZeros = arr.filter(x => x!==0)
    let zeros = arr.filter(x => x===0)
    let res = nonZeros.concat(zeros)
    return res
  }
  