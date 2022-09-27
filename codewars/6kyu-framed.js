function mirror(text){
  
    let textSplit = text.split(' ')
    let max = Math.max(...textSplit.map(x => x.length))
    let headFoot = '\*'.repeat(max + 4)
    let rvrs = textSplit.map(x => [...x].reverse().join(''))
    let starred = rvrs.map(x => `\* ${x}${' '.repeat(max - x.length+1)}\*`)
  
    starred.push(headFoot)
    starred.unshift(headFoot)
  
    return starred.join('\n')
  }