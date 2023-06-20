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


function toCamelCase(str){
  
  if (str === '') { return str }
  
  let strSplit = str.split(/[_-]/)
  
  return strSplit.map((x, i) => {  
      if (i === 0) { return x }
    
      let arr = x.split('')
      
      arr[0] = arr[0].toUpperCase()
    
      return arr.join('')
  }).join('')
  
}

function stockList(listOfArt, listOfCat){
  
  if (listOfArt.length === 0 || listOfCat.length === 0) { return '' }
  
  let cache = {}

  listOfCat.forEach(x => cache[x] = 0)

  listOfArt.forEach((x, i) => {
      (Object.keys(cache).includes(x[0])) && (cache[x[0]] += Number(x.split(' ')[1]))
  })

  return Object.entries(cache).map(x => `(${x[0]} : ${x[1]})`).join(' - ')
}


function solve(s){
  if (s === '') { return '' }
  
  let upperReg = /[A-Z]/g
  let lowerReg = /[a-z]/g
  
  let upperArr = s.match(upperReg)
  let lowerArr = s.match(lowerReg)
  
  
  if (upperArr !== null && lowerArr !== null && upperArr.length > lowerArr.length) {
    return s.toUpperCase()
  }
  
  return s.toLowerCase()
}

// Calculating with functions
function zero(func) { return func ? func(0) : 0}
function one(func) { return func ? func(1) : 1}
function two(func) { return func ? func(2) : 2}
function three(func) { return func ? func(3) : 3}
function four(func) { return func ? func(4) : 4}
function five(func) { return func ? func(5) : 5}
function six(func) { return func ? func(6) : 6}
function seven(func) { return func ? func(7) : 7}
function eight(func) { return func ? func(8) : 8}
function nine(func) { return func ? func(9) : 9}

function plus(x) { return function(y) { return y + x }}
function minus(x) { return function(y) { return y - x }}
function times(x) { return function(y) { return y * x }}
function dividedBy(x) { return function(y) { return Math.floor(y / x) }}


function twoSum(numbers, target) {
  let hash = {}
  
  for (let i = 0; i < numbers.length; i++) {
    let temp = numbers[i]
    
    if (hash[target - temp] !== undefined) {
      return [hash[target - temp], i]
    }
    hash[temp] = i
  }
}

function findEvenIndex(arr) {
  
  if (arr.length === 0) { return 0 }
  
  for (let i = 0; i < arr.length; i++) {
    let l = arr.slice(0,i).reduce((a,b) => { return a+b },0)
    let r = arr.slice(i+1).reduce((a,b) => { return a+b },0)
    if (l === r) { return i }
  }
  
  return -1
}

function createPhoneNumber(numbers){
  
  if (numbers.length < 10) { return ''}
  
  const beginning = `(${numbers.slice(0,3).join('')})`
  const middle = numbers.slice(3,6).join('')
  const end = numbers.slice(6).join('')

  return beginning + ' ' + middle + '-' + end
  }

function findOdd(A) {

  if (A.length === 1) { return A[0] }
  
  let cache = {}
  
  A.forEach(x => {
    if (!cache[x]) {
        cache[x] = 1
    } else {
        cache[x] += 1
    }
  })

  let idx = Object.values(cache).findIndex(x => x%2 != 0)
  return Number(Object.keys(cache)[idx])
}

function deleteNth(arr,n){
  let cache = {}
  let res = []

  arr.forEach((x) => {
      if (!cache[x]) {
          cache[x] = 1
          res.push(x)
      } else {
          cache[x] += 1
          if (cache[x] <= n) { res.push(x) }
      }
  })
  
  return res
}


function findMissingLetter(array) {
  
  let position = array[0].charCodeAt()

  let res;
  
  array.slice(1).forEach(x => {
      if (position + 1 != x.charCodeAt()) { return res = String.fromCharCode(position + 1) }
      else { position += 1 }
  })
  
  return res
}


function high(x){
  let xSplit = x.split(' ')
  let values = xSplit.map(x => x.split('').reduce((prev, cur) => { return prev + cur.charCodeAt() - 96 },0))
  return xSplit[values.indexOf(Math.max(...values))]
}


function likes(names) {
  if (!names.length) { return 'no one likes this'}
  if (names.length === 1) { return `${names[0]} likes this`}
  if (names.length === 2) { return names.join(' and ') + ' like this'}
  if (names.length === 3) { return names.slice(0,2).join(', ') + ' and ' + names.slice(2) + ' like this'}
  return names.slice(0,2).join(', ') + ' and ' + `${names.length - 2} others like this`
}

function diamond(n){
  if (n <= 0 || n%2 === 0) { return null }
  if (n === 1) { return '*\n'}

  let arr = []
  const constant = n - Math.floor(n/2)
  
  for (let i = 0; i < n; i++) {
    let space = Math.abs(n - constant - i)
    let x = n - space * 2
    arr.push(' '.repeat(space) + '*'.repeat(x))
  }
  
  return arr.join('\n') + '\n'
}

function arrayDiff(a, b) {
  return a.filter(x => !b.includes(x))
}

function solve(input){
  let inputSplit = input.split('\n')

  let arr = []

  for (i of inputSplit) {

    let res = 0
    let newInput = i.split(' ')

    let input1 = newInput[0].split('').reverse()
    let input2 = newInput[1].split('').reverse()

    input1.reduce((prev,curr,i) => {

      let test = String(Number(curr) + Number(input2[i]) + Number(prev))
      test = test.length > 1 ? test[0] : 0

      if (test > 0) { 
        res+= 1 
      }
      return test
    }, 0)

    if (res === 0) { res = 'No'}
    arr.push(`${res} carry operation${res > 0 ? 's' : ''}`)
  }
  
  return arr.join('\n')
}

// Review after long break

function solution(number){
  if (number <= 3) { return 0 }
  
  const arr = []
  
  for (let i = number-1; i >= 3; i--) {
    if (i%3 === 0 && i%5 === 0) {
      arr.push(i)
    } else if (i%3 === 0) {
      arr.push(i)
    } else if (i%5 === 0){
      arr.push(i)
    }
  }

  return arr.reduce((prev, cur) => prev + cur)
}

function permuteAPalindrome (input) {
  const cache = {}
  let counter = 0
  
  for (let letter of input) {
      cache[letter] = cache[letter] || 0
      cache[letter] += 1
  }

  for (let count of Object.values(cache)) {
      counter += count % 2
  }

  return counter < 2
}

function digitize(n) {
  return String(n).split('').reverse().map(x => Number(x))
}

// 'abc', 'bc'

function solution(str, ending){
  return ending === '' || str.slice(-ending.length) === ending
}

function sumDigPow(a, b) {
  let arr = []
  
  for (let pos = a; pos <= b; pos++) {
    let count = 0
    let stringed = String(pos)
    
    for (let i = 0; i < stringed.length; i++) {
        count += Math.pow(stringed[i], i + 1)
    }
    
    if (count === pos) { arr.push(pos) }
  }
  
  return arr
}

function zero(a) {
  return a ? a(0) : 0
}
function one(a) {
  return a ? a(1) : 1
}
function two(a) {
  return a ? a(2) : 2
}
function three(a) {
  return a ? a(3) : 3
}
function four(a) {
  return a ? a(4) : 4
}
function five(a) {
  return a ? a(5) : 5
}
function six(a) {
  return a ? a(6) : 6
}
function seven(a) {
  return a ? a(7) : 7
}
function eight(a) {
  return a ? a(8) : 8
}
function nine(a) {
  return a ? a(9) : 9
}

function plus(a) {
  return function(b) {
    return b + a
  }
}
function minus(a) {
  return function(b) {
    return b - a
  }
}
function times(a) {
  return function(b) {
    return b * a
  }
}
function dividedBy(a) {
  return function(b) {
    return Math.floor(b/a)
  }
}