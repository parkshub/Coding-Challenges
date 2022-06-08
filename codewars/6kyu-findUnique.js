// Find the unique number
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
    let arrShort = arr.slice(0,3)
    let unique = [...new Set(arr)]
    let filtered = arrShort.filter(x => x == unique[0])
    if (filtered.length > 1) {
      return unique[1]
    }
    else {
      return unique[0]
    }
  }