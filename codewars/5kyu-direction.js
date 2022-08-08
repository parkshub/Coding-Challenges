function dirReduc(arr){
    let res = [arr[0]]
    
    
    for (let i = 1; i < arr.length; i++) {
      
      if (arr[i] === 'NORTH' && res[res.length-1] === 'SOUTH') {res.pop()}
        
      else if (arr[i] === 'SOUTH' && res[res.length-1] === 'NORTH') {res.pop()}
        
      else if (arr[i] === 'WEST' && res[res.length-1] === 'EAST') {res.pop()}
        
      else if (arr[i] === 'EAST' && res[res.length-1] === 'WEST') {res.pop()}
        
      else {res.push(arr[i])}
    }
    
    return res
  }