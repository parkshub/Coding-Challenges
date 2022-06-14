// Where my anagrams at?
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters.
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

function anagrams(word, words) {
  
    let answer = []
    
    let word1Ordered = [...word].sort((a,b) => {
        return a.localeCompare(b)
    }).join('')
    
    let wordsList = words.map(x => [...x].sort((a,b) => a.localeCompare(b)).join(''))
  
    wordsList.forEach((x, i) => {
      if(x == word1Ordered) {
          answer.push(words[i])
      }
    })
    
    return answer
  }