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

// #1
var minCostClimbingStairs = function(cost) {
  const costLength = cost.length
  for (let i=2; i<costLength; i++) {
      cost[i] = cost[i] + Math.min(cost[i-2], cost[i-1])
  }
  return Math.min(cost[costLength-1], cost[costLength-2])
};

// #2
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

// #3
var isPalindrome = function(x) {
  return [...String(x)].reverse().join('') == String(x)
};

// 07.15.22

// #4
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

// #5
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

// #8
var reverseString = function(s) {
  return s.reverse()
};

// 07.17.22

// #9
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

// #10 
var lengthOfLastWord = function(s) {
  let c = s.split(' ').filter(x => x)
  return c[c.length-1].length
};

// 07.18.22

// #11

var merge = function(nums1, m, nums2, n) {
  for (let i=m; i<nums1.length; i++){
      n--
      nums1[i] = nums2[n]
  }
  return nums1.sort((a,b) => a-b)
};

// 07.19.22

// #12

var climbStairsV1 = function(n) {
  let dp = []
  dp[0] = 1
  dp[1] = 2
  
  for (let i = 2; i<n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n-1]
};

var climbStairsV2 = function(n, memo = new Array()) {
  if (n === 2) {return 2}
  if (n === 1) {return 1}
  if (memo[n]) {return memo[n]}

  let res = climbStairsV2(n-1, memo) + climbStairsV2(n-2, memo)
  memo[n] = res
  return res
};


// Binary Tree Practice

class Node {
  constructor(root) {
    this.val = root
    this.left = null
    this.right = null
  }
}

let a = new Node('a')
let b = new Node('b')
let c = new Node('c')
let d = new Node('d')
let e = new Node('e')
let f = new Node('f')

a.left = b
b.left = d
b.right = e
c.right = f


stack = [a]

while(stack.length > 0) {
  cur = stack.pop()
  
  if(cur.right) {
    stack.push(cur.right)
  }
  if(cur.left) {
    stack.push(cur.left)
  }
  console.log(cur.val)
}

// 07.20.22
// #13

var inorderTraversal = function(root, arr = new Array()) {
  if (root === null) {return []}
  
  inorderTraversal(root.left, arr)
  arr.push(root.val)
  inorderTraversal(root.right, arr)
  
  return arr
};