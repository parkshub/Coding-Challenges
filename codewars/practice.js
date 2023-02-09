function evenOrOdd(number) {
    if (number % 2 === 0) return "Even"
    return "Odd"
  }

  function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
  };

  var uniqueInOrder=function(iterable){
    let res = []
    let newObj = typeof(iterable) === "string" ? iterable.split('') : iterable
    
    newObj.forEach((x, i) => {
      if (res[res.length-1] !== x) { res.push (x) }
    })
    
    return res
  }