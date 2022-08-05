function isIsogram(str){
    let cache = {}
    str = str.toLowerCase()
    
    str.split('').forEach(x => {
      if(cache[x]) {
        cache[x] += 1
      } else {
        cache[x] = 1
      }
    })
    
    return Object.values(cache).every(x => x<2)
  }