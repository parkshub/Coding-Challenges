function XO(str) {
    str = str.toLowerCase()
    
    let cache = {'x': 0, 'o': 0}
    str = str.split('')
    
    str.forEach(x => {
      if (x === 'x') cache.x += 1;
      if (x === 'o') cache.o += 1;
    })
    
    if (Object.values(cache)[0] === Object.values(cache)[1]) return true;
    return false
  }