log = console.log

//Multiply
// This code does not execute properly. Try to figure out why.
//function multiply(a, b){
  // a * b
// }

function multiply(a, b){
    return a * b
  }


// How good are you really?
//There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    let total = yourPoints
    classPoints.map(x=>total+=x)
    
    let totalN = 1 + classPoints.length

    let avg = total/totalN

    if (yourPoints>avg){
        return true
    } else {
        return false
    }
}


// Name Shuffler
//Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
}


// Short Long Short
//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

function solution(a, b){
    let aLength = a.split('').length
    let bLength = b.split('').length
    if (aLength > bLength){
      return b+a+b
    }else{
      return a+b+a
    }
  }


// Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  return num>0? -num: num
}


// 05.30.22

// We need a function that can transform a number into a string.

function numberToString(num) {
  return String(num)
}


// 06.06.22

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function find_average(array) {
  if (array.length == 0) {
    return 0;
    }
  return array.reduce((prev, cur) => prev + cur ,0) / array.length
}


// 06.07.22

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((p, c) => Math.min(p, c))
  }
}


// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"

function findNeedle(haystack) {
  let find = haystack.findIndex(x => x=='needle')
  if (find != -1){
    return `found the needle at position ${find}`
    }
  else {
    return "Your function didn't return anything"
  }
}