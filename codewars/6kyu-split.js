function solution(str){
    let res = []
    for(let i=0; i<str.length; i+=2) {
        if (i === str.length-1 && str.length%2 != 0) {
            res.push(str[i]+'_')    
        }
        else {
        res.push(str[i]+str[i+1])
        }
    }  
    return res
  }