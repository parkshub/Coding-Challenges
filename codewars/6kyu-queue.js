function queueTime(customers, n) {
    
    if(!customers.length) {return 0}
    if(customers.length < n) {return Math.max(...customers)}
    if(n === 1) {
      return customers.reduce((prev, curr) => prev + curr)
    }
    
    let splicedArr = customers.splice(0,n)
    let counter = 0
    
    while(splicedArr.some(x => x > 0)) {
      splicedArr = splicedArr.map(x => x-1)
      let zeros = splicedArr.filter(x => x===0)
      if (customers.length) {
          for (let i in zeros) {
              splicedArr = splicedArr.filter(x => x !=0)
              splicedArr.push(customers.shift())
          }
      }
      counter += 1
    }
    return counter
  }