const mirror = obj => {
    let res = {}
    
    Object.keys(obj).forEach(x => {
        res[x] = x.split('').reverse().join('')
    })
    
    return res
  };