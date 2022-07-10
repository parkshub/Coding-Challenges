function longestConsec(strarr, k) {
    let n = strarr.length
    
    if (n==0 || k>n || k<=0) {
      return ''
    }
  
    return strarr.reduce((prev, cur, i)=> {
      const compare = strarr.slice(i, i+k).join('')
      if (prev.length >= compare.length) {
        return prev
      } else {
        return compare
      }
    }, '')
}