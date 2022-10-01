function tidyNumber(n){
    let nSplit = String(n).split('')
    let prev;
    for (let i = 0; i<nSplit.length; i++) {
        if (nSplit[i-1]===undefined) {
            prev = -Infinity
        } else {
            prev = nSplit[i-1]
        }
        if (prev > nSplit[i]) {return false}
    }
    return true
  }
  