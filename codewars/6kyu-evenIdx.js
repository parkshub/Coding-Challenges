function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
      let a = arr.slice(0, i).reduce((prev, curr) => {return prev+curr},0)
      let b = arr.slice(i+1).reduce((prev, curr) => {return prev+curr},0)
      if (a === b) {
          return i
      }
    }
    return -1
  }