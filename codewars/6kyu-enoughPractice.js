function deleteNth(arr,n){

    let answer = []
    
    arr.reduce((prev, cur)=> {
      
      if (!prev[String(cur)]) {
        prev[String(cur)] = 1
      } 
      
      else {
        prev[String(cur)] += 1
      }
      
      
      if (prev[String(cur)] <= n) {
        answer.push(cur)      
      }
      return prev
    },{})
    
    return answer
  }