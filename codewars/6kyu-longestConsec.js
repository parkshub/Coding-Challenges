// Consecutive strings
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).
// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
    
    let n = strarr.length
    let newArr = []
    let longest = ''
  
    if (n == 0 || k > n || k<=0) {
      return ""
    }
  
    for (let i = 0; i < strarr.length-k+1; i++) {
      let compare = strarr.slice(i, i+k).join('')
      if (longest.length < compare.length) {
        longest = compare
      }
    }
    
    return longest
  }