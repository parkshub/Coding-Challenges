// Vowel Count
// Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.

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