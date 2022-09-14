function mxdiflg(a1, a2) {
  
    if (a1.length == 0 | a2.length == 0) return -1;
  
    let sortedA1 = a1.sort((a,b) => a.length-b.length)
    let a1Min = sortedA1[0].length
    let a1Max = sortedA1[sortedA1.length-1].length
        
    let sortedA2 = a2.sort((a,b) => a.length-b.length)
    let a2Min = sortedA2[0].length
    let a2Max = sortedA2[sortedA2.length-1].length
    
    let max = Math.max(a1Max-a2Min, a2Max - a1Min)
        
    return max
}