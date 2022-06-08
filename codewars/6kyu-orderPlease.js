// Your order, please
//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
    let r = /\d/
    let wordsSplit = words.split(' ')
    let sorted = wordsSplit.sort((a,b) => {
      if (a.match(r)[0] > b.match(r)[0]) {
          return 1
      }
      else {
          return -1
      }
    })
    return sorted.join(' ')
}