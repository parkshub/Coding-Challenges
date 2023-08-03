function getLengthOfMissingArray(arrayOfArrays) {
    
    if (arrayOfArrays===null || arrayOfArrays.includes(null) ||!arrayOfArrays.length) {
      return 0
    }
    
    let a = arrayOfArrays.sort((x,y) =>x.length - y.length)
    let first = a[0].length
    
    for (let i = 0; i < a.length; i++) {
            
        if(a[i].length === 0) {
          return 0
        } 
      
        if(a[i].length !== first) {
            return first
        }
        first++
    }
  }
  