function reverse(str){
    
    if(!str.trim().length) return '';
    
    let strSplit = str.split(' ')
  
    for (let i = 1; i < strSplit.length; i+=2){
        strSplit[i] = strSplit[i].split('').reverse().join('')
    }
    
    return strSplit.join(' ')
  }