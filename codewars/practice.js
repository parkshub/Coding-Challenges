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
