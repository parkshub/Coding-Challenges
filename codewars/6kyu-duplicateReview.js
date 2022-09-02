function duplicateEncode(word){
    word = word.toLowerCase()
    return word.split('').map(x => {
      if(word.indexOf(x) === word.lastIndexOf(x)) {return '('}
      else {return ')'}
    }).join('')
  }