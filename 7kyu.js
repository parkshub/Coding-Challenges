// List Filtering

//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(x=> typeof(x)=='number')
  }

// Credit Card Mask

//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//Your task is to write a function maskify, which changes all but the last four characters into '#'.

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

//Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

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
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let splitStr = str.split('')
    
    let output = splitStr.filter(x=> !vowels.includes(x.toLowerCase())).join('')
    
    return output;
}

// Sort Numbers

//Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums){
  if(nums){
    return nums.sort((a,b)=> a-b)
  }else{
    return []
  }
}


// 'x' marks the spot.
// #'x' marks the spot
// ##Task:
// Given a two dimensional array, return the co-ordinates of 'x'.
// If 'x' is not inside the array, or if 'x' appears multiple times, return []
// The co-ordinates should be zero indexed.
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

const xMarksTheSpot = (input) => {
  let cords=[]
  for (let i=0; i<input.length; i++){
    console.log(i, ' i')
    if (input[i].includes('x')){
      for (let j=0; j<input[i].length; j++){
        console.log(j, ' j')
        console.log(cords, ' cords')
        if(input[i][j]=='x'){
          cords = cords.concat([i,j])
        }
      }
    }
  }
  if (cords.length == 0 || cords.length > 2){
    return [];
  } else {
    return cords
  }
}