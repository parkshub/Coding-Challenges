function findSum(n) {
    let arr = []
    for (let i = 1; i < n + 1; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        arr.push(i)
      }
    }
    return arr.reduce((prev, curr) => prev + curr)
  }