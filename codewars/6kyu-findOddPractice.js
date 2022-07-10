function findOdd(A) {
    cache = {}
    A.forEach(x => cache[x] = (cache[x] || 0) + 1)
    return +Object.entries(cache).filter(([key, value]) => value%2 != 0)[0][0]
  }