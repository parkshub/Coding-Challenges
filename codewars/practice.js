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

function spinWords(string){
  return string.split(' ').map(x => {
    return x.length > 4 ? x.split('').reverse().join('') : x
  }).join(' ')
}

function smallEnough(a, limit){
  return a.filter(x => x > limit).length === 0
}



function crashingWeights(grid){
  let rows = grid.length
  
  let columns = grid[0].length
  
  for (let i = 0; i < rows - 1; i++) {
    for (let j = 0; j < columns; j++) {
        if (grid[i][j] > grid[i+1][j]) {
            grid[i+1][j] = grid[i][j] + grid[i+1][j]
        }
    }
  }
  
  return grid[rows - 1]
};

function reduceByRules(numbers, rules) {
  return numbers.reduce((prev, cur, idx) => {
    return rules[(idx - 1) % rules.length](prev, cur)
  })
}


function narcissistic(value) {
  
  valueSplit = String(value).split('')
  valueLen = valueSplit.length
  
  if (valueLen === 1) { return true }
  
  return value == valueSplit.reduce((prev, curr) => {
    return prev + (curr ** valueLen)
  }, 0)
}

function decipherThis(str) {

  let strSplit = str.split(' ')

  for (let i = 0; i < strSplit.length; i++) {
    
    let numbers = strSplit[i].split('').filter(x => /[0-9]/.test(x)).join('')
    let letters = strSplit[i].split('').filter(x => !/[0-9]/.test(x))
    let numToLetter = String.fromCharCode(numbers)

    if (letters.length) {
      let temp = letters[0]
      letters[0] = letters[letters.length - 1]
      letters[letters.length - 1] = temp
    }
    
    letters.unshift(numToLetter)
    letters = letters.join('')
    strSplit[i] = letters
  }
  return strSplit.join(' ')
}; 