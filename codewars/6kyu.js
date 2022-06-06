log = console.log

// Sum of Digits/ Digital Root
//Digital root is the recursive sum of all the digits in a number.
//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n){
    let add = 0
    let new_n = String(n).split('')
    
    new_n.map(x=>{add+=Number(x)})

    if (add>=10){
        return digital_root(add)
    } else {
        return add
    }
}


// Bouncing Balls
//A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// His mother looks out of a window 1.5 meters from the ground.
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

function bouncingBall(h,  bounce,  window) {
    let counter = 1
    
    if(h>0 && bounce>0 && bounce<1 && window < h){
        h*=bounce
      
        while (h>window){
            if (h==window){
                counter +=1
            } else {
                counter +=2
            }
            h*=bounce
        }
        return counter
    }
    else {
        return -1
    }
  }


// BitCounting
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {

    let binary = []

    function divide(num) {
        let val = Math.floor(num/2)
        remainder = num%2? 1: 0
        binary.push(remainder)
        if (val==0){
            return binary
        }
        else {
            divide(val)
        }
    }
    divide(n, 0)

    return binary.reduce(function(initial, current){
        return initial + current
    }, 0)
}


// Give me a Diamond
//Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
//Task
//You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

function diamond(n) {
    
    diam1 = ''
    let ceiling = Math.ceil(n/2)
    let floor = Math.floor(n/2)
    if (n%2==0 || n<=0) {
        return null
    }
    else {
        for (let i=0; i<ceiling; i++) {
            diam1 += ' '.repeat(ceiling-(i+1)) + '*'.repeat(i*2+1) + '\n'
        }
    }

    diam2 = diam1.split('\n').slice(0, floor).reverse().join('\n')
    if (!diam2.slice(-1)=='\n') {
      diam2 += '\n'
    }
  
    return diam1+diam2
}


// Count the smiley faces!
//Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
//Rules for a smiling face:
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;. A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~. Every smiling face must have a smiling mouth that should be marked with either ) or D. No additional characters are allowed except for those mentioned.

function countSmileys(arr) {
    let pattern = /[:;][-~]{0,1}[)D]/g  
    return arr.map(x => x.match(pattern)).filter(x => x!=null).length
}


// 05.30.22

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
    let arrShort = arr.slice(0,3)
    let unique = [...new Set(arr)]
    let filtered = arrShort.filter(x => x == unique[0])
    if (filtered.length > 1) {
      return unique[1]
    }
    else {
      return unique[0]
    }
  }

//   You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

function likes(names) {
    if (names.length == 0) {
        return 'no one likes this'
    }
    else if (names.length == 1) {
        return names.join(' and ') + ' likes this'
    }
    else if (names.length == 2) {
        return names.join(' and ') + ' like this'
    }
    else if (names.length == 3) {
        return names.slice(0,2).join(', ') + ' and ' + names.slice(-1) + ' like this'
    }
    else {
        return names.slice(0,2).join(', ') + ` and ${names.slice(2).length} others like this`
    }

}


// 06.05.22

//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
    let r = /\d/
    let wordsSplit = words.split(' ')
    let sorted = wordsSplit.sort((a,b) => {
      if (a.match(r)[0] > b.match(r)[0]) {
          return 1
      }
      else {
          return -1
      }
    })
    return sorted.join(' ')
}


// 06.06.22

// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3]. With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr,n){
    let empty = []
  
    arr.reduce((prev, curr) => {
      if (!prev[String(curr)]) {
          prev[String(curr)] = 1
          empty.push(curr)
      }
      else if (prev[String(curr)] < n) {
          prev[String(curr)] += 1
          empty.push(curr)
      }
      return prev
    }
    , {})
    
    return empty
  }