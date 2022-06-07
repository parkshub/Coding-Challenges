log = console.log


// List Filtering
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(x=> typeof(x)=='number')
  }


// Credit Card Mask
//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it. Your task is to write a function maskify, which changes all but the last four characters into '#'.

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


// Disemvowel Trolls
// Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed. For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
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


// 'x' marks the spot
// ##Task:
// Given a two dimensional array, return the co-ordinates of 'x'. If 'x' is not inside the array, or if 'x' appears multiple times, return []. The co-ordinates should be zero indexed. You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

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


// Filter unused digits
// Given a varying number of integer arguments, return the digits that are not present in any of them.

function unusedDigits() {
  let joined = Object.values(arguments).join('')
  let output = []
  for (let i=0; i<=9; i++) {
    if (!joined.includes(i)) {
      output.push(i)
    }
  }
  return output.join('')
}


// Friend or Foe?
// Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends){
  return friends.filter(x=>x.length==4)
}


//Two to One
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  let s = s1+s2
  s = s.split('').filter((x, i, arr) => arr.indexOf(x)==i).sort().join('')
  return s
}


// 05.30.22

// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  let a = s.split('')
  a.forEach((x,i) => {
    a[i] = x.toUpperCase() + x.toLowerCase().repeat(i)
  })
  return a.join('-')
}


// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
  return s.split(' ').sort((a,b) => a.length - b.length)[0].length
}


// 06.06.22

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
  dna = dna.split('').map(x => {
    if (x == 'A') {
      return 'T'
    }
    else if (x =='T') {
      return 'A'
    }
    else if (x == 'G') {
      return 'C'
    }
    else {
      return 'G'
    }
  })
  return dna.join('')
}


// 06.07.22

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  let split = numbers.split(' ')
  return `${Math.max(...split)} ${Math.min(...split)}`
}


// Given a list of integers, determine whether the sum of its elements is odd or even. Give your answer as a string matching "odd" or "even". If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  let sum = array.reduce((p,c) => p + c, 0)
  if (sum%2 == 0 || sum == 0) {
    return 'even'
  }
 return 'odd'
}