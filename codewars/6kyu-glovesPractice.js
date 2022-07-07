function numberOfPairs(gloves) {
  cache = {}
  
  gloves.forEach(x => {
    cache[x] = (cache[x] || 0) + 1
  })

  return Object.values(cache).map(x => Math.floor(x/2)).reduce((prev,cur) => {
    return prev + cur
  },0)
}