var recoverSecret = function(triplets) {
  
    let arr = []
  
    while(triplets.length > 0) {
        forLoop:
            for ([first] of triplets) {
                if (triplets.every(x => x.indexOf(first) <= 0)) {
                    triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift())
                    arr.push(first)
                    triplets = triplets.filter(tuple => tuple.length > 0)
                    break forLoop;
                }
            }
    }
    return arr.join('')
  }