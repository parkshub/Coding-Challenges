// iterative

var recoverSecretV1 = function(triplets) {
  
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


// recursive

let triplets1 = [
    ['t','u','p'],
    ['w','h','i'],
    ['t','s','u'],
    ['a','t','s'],
    ['h','a','p'],
    ['t','i','s'],
    ['w','h','s']
  ]


var recoverSecretV2 = function(triplets) {
    for ([first] of triplets) {
        if (triplets.every(x => x.indexOf(first) <= 0)) {
            triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift())
            return first + recoverSecretV2(triplets.filter(tuples => tuples.length > 0))
        }
    }
    return ''
}

console.log(recoverSecretV2(triplets1))