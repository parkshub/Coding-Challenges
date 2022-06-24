// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    let sorted = [...text.toLowerCase()]
    sorted.sort((a, b) => a.localeCompare(b))
    
    let reduced = sorted.reduce((prev, cur) => {
      if (!prev[String(cur)]) {
          prev[String(cur)] = 1
      }
      else {
          prev[String(cur)] += 1
      }
      return prev
    }, {})
    
    return Object.values(reduced).filter(x => x > 1).length
  }