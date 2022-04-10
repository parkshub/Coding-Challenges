//Multiply
function multiply(a, b){
    return a * b
  }

// How good are you really?
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
function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
}

// Short Long Short
function solution(a, b){
    let aLength = a.split('').length
    let bLength = b.split('').length
    if (aLength > bLength){
      return b+a+b
    }else{
      return a+b+a
    }
  }