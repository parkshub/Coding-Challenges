// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
    return s.split(' ').sort((a,b) => a.length - b.length)[0].length
  }
  