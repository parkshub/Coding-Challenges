function duplicateCount(text){
    if (!text.length) return 0;
    
    let cache = {}
    
    text.split('').reduce((prev, cur) => {
      cur = cur.toLowerCase()
      if (cache[cur]) {
        cache[cur] += 1
      } else {
        cache[cur] = 1
      }
      return cache
    }, cache)
    
    return Object.values(cache).filter(x => x >= 2).length
  }