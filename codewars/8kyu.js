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