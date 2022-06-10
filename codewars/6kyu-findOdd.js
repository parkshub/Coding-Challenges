// Find the odd int
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  
    let reduced = A.reduce((prev, cur)=>{
        if(!prev[String(cur)]) {
            prev[String(cur)] =1
        }
        else {
            prev[String(cur)] += 1
        }
        return prev
    }, {})
    
    let index = Object.values(reduced).findIndex(x => x%2 != 0)
    return Number(Object.keys(reduced)[index])
  }