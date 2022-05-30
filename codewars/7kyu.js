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