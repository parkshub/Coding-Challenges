function inArray(array1,array2){
    let arr = []
    
    for (let i of array1) {
      if (array2.some(x => x.includes(i))) {arr.push(i)}
    }
    
    return arr.sort((a,b) => a.localeCompare(b))
  }