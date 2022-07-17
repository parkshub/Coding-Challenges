p = console.log

// 07.07.22

var twoSum = function(nums, target) {
    for (let i=0; i<nums.length-1; i++) {
      let numsSlice = nums.slice(i)
      for (let j=1; j<=numsSlice.length; j++) {
        if(numsSlice[0] + numsSlice[j]==target) {
          return [i, j+i]
        }
      }
    }
  };


// 07.11.22

//#1
var minCostClimbingStairs = function(cost) {
  const costLength = cost.length
  for (let i=2; i<costLength; i++) {
      cost[i] = cost[i] + Math.min(cost[i-2], cost[i-1])
  }
  return Math.min(cost[costLength-1], cost[costLength-2])
};

//#2
var reverseOnlyLetters = function(s) {
  let letters = s.match(/[a-z]/gi)
  let lettersReversed = []

  if (!letters) {
      return s
  }
  
  for (let i=letters.length-1; i>-1; i--) {
      lettersReversed.push(letters[i])
  }
  
  
  let answer = s.split('').map(str => {
      if (/[a-z]/i.test(str)) {
          return lettersReversed.shift()
      }
      else {
          return str
      }
  })
  
  return answer.join('')
};

//#3
var isPalindrome = function(x) {
  return [...String(x)].reverse().join('') == String(x)
};

// 07.15.22

//#4
 var isValid = function(s) {
  if (s.length%2 !== 0) {
      return false
  }
  
  let stack = []
  
  for (let i of s) {
      if (i == ')' && stack[stack.length-1] == '(') {
          stack.pop()
      }
      else if (i == '}' && stack[stack.length-1] == '{') {
          stack.pop()
      }
      else if (i == ']' && stack[stack.length-1] == '[') {
          stack.pop()
      }   
      else if (i == ')' || i == '}' || i == ']') {
          return false
      }
      else {
          stack.push(i)
      }
  }
  return stack.length == 0
};

//#5
var mergeTwoLists = function(list1, list2) {
    
  let arr = []
      
  while (list1) {
      arr.push(list1.val)        
      list1 = list1.next
  }
  
  while (list2) {
      arr.push(list2.val)        
      list2 = list2.next
  }
  
  arr.sort((a,b) => b-a)
  let answer = arr.reduce((prev, cur) => {
      let temp = {}
      temp.val = cur
      temp.next = prev
      return temp
  }, null)
  return answer    
};

// #6
var longestCommonPrefix = function(strs) {
  let arr = []

  strs.sort((a, b)=> a.length-b.length)

  let shortest = strs[0]

  for (let i = 0; i<shortest.length; i++) {
    let temp = shortest[i]  
    if (strs.every(x => x[i]==temp)) {
      arr.push(temp)
    } else {
        break
    }
  }
  return arr.join('')
};

// 07.16.22

// #7
var removeDuplicates = function(nums) {
  numsLen = nums.length-1
  for (let i=numsLen; i>0; i--) {
      if(nums.lastIndexOf(nums[i])!=nums.indexOf(nums[i])) {
          nums.splice(i,1)
      }
  }
};

//#8
var reverseString = function(s) {
  return s.reverse()
};

// 07.17.22

//#9
// twoSum better method

function twoSum(arr, tar) {
    let cache = {}
    for (let i = 0; i<arr.length; i++) {
        let remain = tar - arr[i]
        if (arr[i] in cache) {
            return [cache[arr[i]], i]
        } else {
            cache[remain] = i
        }
    }
    return []
}

//#10 
var lengthOfLastWord = function(s) {
  let c = s.split(' ').filter(x => x)
  return c[c.length-1].length
};