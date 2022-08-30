function rowSumOddNumbers(n) {
  
    if (n == 1) return 1;
    
    let arr = [n * n - (n - 1)]
      
    for (let i = 1; i < n; i++) {
      arr.push(arr[i-1] + 2)
    }
    
    return arr.reduce((prev, curr) => prev + curr)
  }