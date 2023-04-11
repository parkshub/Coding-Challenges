function diamond(n){
    console.log(n)
    if (n <= 0 || n%2 === 0) { return null }
    if (n === 1) { return '*\n'}
    let arr = []
    
    // n = 5
    // s s x  // s = n - 3 - i(0) = 2 // x = n - s * 2 = 1
    // s xxx  // s = n - 3 - i(1) = 1 // x = n - s * 2 = 3
    //  xxxxx // s = n - 3 - i(2) = 0 // x = n - s * 2 = 5
    // s xxx // s = n - 3 - i(3) = 1 // x = n - s * 2 = 3

    // n = 3
    // s x  // s = n - 2 - i(0) = 1 // x = n - s * 2 = 1
    // xxx  // s = n - 2 - i(1) = 0 // x = n - s * 2 = 3
    // s x // s = n - 2 - i(2) = 1 // x = n - s * 2 = 3

    // 2 = n(3) - (n(3) - 2)
    // 3 = n(5) - (n(5) - 2)
    const constant = n - Math.floor(n/2)
    for (let i = 0; i < n; i++) {
      let space = Math.abs(n - constant - i)
      let x = n - space * 2
      arr.push(' '.repeat(space) + '*'.repeat(x))
    }
    
    return arr.join('\n')
  }

console.log(diamond(9))