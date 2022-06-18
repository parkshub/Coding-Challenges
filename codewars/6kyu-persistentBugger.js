// Persistent Bugger.
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  
    let count = 0
    let val = String(num).split('')
    
    while (val.length > 1) {
      val = String(val.reduce((prev, cur) => prev * cur)).split('')
      count += 1
    }
    
    return count  
  }