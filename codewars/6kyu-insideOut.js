function insideOut(x){
    let res = ''
    
    if (x.split('').every(x=>x==' ')) {return x}
    
    x.split(' ').forEach(y => {
        res += ` ${y.substring(0, Math.floor(y.length/2)).split('').reverse().join('')}`
  
        if (y.length%2 != 0) {
            res += y[Math.floor(y.length/2)]
        }
        res += y.substring(Math.ceil(y.length/2), y.length).split('').reverse().join('')
        } 
    )
    return res.trim()
  }