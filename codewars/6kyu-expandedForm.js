function expandedForm(num) {
  
    let len = String(num).length - 1
    let splitNum = String(num).split('')
    let res = '';
    
    if (len === 0) return String(num);
    
    for (let i = 0; i < splitNum.length; i++) {
      
      if (splitNum[i] == '0') {
        len -= 1
        continue
      }
      
      else if (i == splitNum.length-1) {
        res += ` + ${splitNum[i]}`
      }
      
      else if (i === 0) {
        res += `${splitNum[i] + '0'.repeat(len)}`
        len -= 1
      }
      
      else{
        res += ` + ${splitNum[i] + '0'.repeat(len)}`
        len -= 1
      }
      
    }
    return res
  }