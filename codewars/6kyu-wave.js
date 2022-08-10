function wave(str){
  
    let res = []
    
    for (let j = 0; j < str.length; j++) {
      if (!/[A-z]/.test(str[j])) continue;
          
      let strSplit = str.split('')
      strSplit[j] = strSplit[j].toUpperCase()
      strSplit = strSplit.join('')
          
      res.push(strSplit)
    }
    
    return res
}