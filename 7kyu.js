// List Filtering
function filter_list(l) {
    return l.filter(x=> typeof(x)=='number')
  }

// Credit Card Mask
function maskify(cc) {
    let sliced = cc.split('')
    
    if (sliced.length > 3) {
      for (let i=sliced.length-5; i>=0; i--){
        sliced.splice(i,1, '#')
      }
      return sliced.join('')
    } else {
      return cc
    }
  }

// Vowel Count
function getCount(str) {
    var vowelsCount = 0;
    
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let splitStr = str.split('')
  
    for (let letter of splitStr){
        if(vowels.includes(letter)){
            vowelsCount+=1
        }
    }  
    return vowelsCount;
  }

// Disemvowel Trolls
function disemvowel(str) {
  
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let splitStr = str.split('')
    
    let output = splitStr.filter(x=> !vowels.includes(x.toLowerCase())).join('')
    
    return output;
}