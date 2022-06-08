log = console.log

// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

function numberOfPairs(gloves) {
  
    let glovesObject = gloves.reduce((prev, cur) => {
        !prev[cur]? prev[cur]=1: prev[cur]+=1
        return prev
    }, {})
    
    let values = Object.values(glovesObject)
    let mapped = values.map(x => Math.floor(x/2))
    let reduced = Math.ceil(mapped.reduce((a,b)=> a+b))
    
    return reduced
  
  }