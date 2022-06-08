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