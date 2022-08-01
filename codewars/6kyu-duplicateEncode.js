function duplicateEncode(word){
    let cache = {}
    let arr = []
    
    word.split('').forEach(x => {
      x = x.toLowerCase()
      if (cache[x]) {
      cache[x] = ')'
      } else {
      cache[x] = '('
      }
    })
    
    word.split('').forEach(x => {
      x = x.toLowerCase()
      arr.push(cache[x])
    })
    
    return arr.join('')
  }
  