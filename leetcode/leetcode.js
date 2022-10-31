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

//      a
//     / \
//    b   c
//   /\    \
//  d  e    f 

// depth first order = a,b,d,e,c,f

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

console.log(inorderTraversal(a))

// 07.21.22

// #14
var preorderTraversal = function(root, arr = new Array()) {
  if (root === null) {return []}
  
  arr.push(root.val)
  preorderTraversal(root.left, arr)
  preorderTraversal(root.right, arr)
  
  return arr
}

// 07.23.22

// #15
// inorder different method

var inorderTraversal = function(root) {
    
  // left root right
  // 4,2,5,1,3
  
  let stack = []
  let res = []
  
  while (root || stack.length > 0) {
      if (root) {
          stack.push(root)
          root = root.left
      }
      else {
          root = stack.pop()
          res.push(root.val)
          root = root.right
      }
  }
  return res
};


// #16
// postorder traversal iteration

var postorderTraversal = function(root) {
  if (root === null) return [];
  
  let stack = [root]
  let res = []
  
  while (stack.length > 0) {
      root = stack.pop()
      
      
      if(root.left !== null) {
          stack.push(root.left)
      }
      
      if (root.right !== null) {
          stack.push(root.right)
      }
      
      res.push(root.val)
  }
  return res.reverse()
};

// #17
// preorder iteration

var preorderTraversal = function(root) {
    
  if (root === null) return [];
  
  let stack = [root]
  let res = []
  
  while (stack.length > 0) {
      
      root = stack.pop()
      res.push(root.val)
      
      if (root.right) {
          stack.push(root.right)
      }
      if (root.left) {
          stack.push(root.left)
      }
  }
  return res
}

// #18
// postorder resursive
var postorderTraversal = function(root, arr = new Array()) {
      if (root === null) return [];
      
      postorderTraversal(root.left, arr)
      postorderTraversal(root.right, arr)
      arr.push(root.val)
      
      return arr
  };

// 07.24.22

// #19

var isSameTree = function(p, q) {
    
  let stack = [p, q]
  
  while (stack.length) {
      
      q = stack.pop()
      p = stack.pop()
      
      if (!p && !q) continue;
      if (!p || !q) return false;
      
      if (p.val === q.val) {
          stack.push(p.left)
          stack.push(q.left)
          stack.push(p.right)
          stack.push(q.right)
      }
      else {
          return false
      }
  }
  return true
}

// 07.25.22

// #20

var isSymmetric = function(root) {
    
  function isEqual(rootL, rootR) {
      if (!rootL && !rootR) return true;
      if (!rootL || !rootR) return false;
      return rootL.val === rootR.val && isEqual(rootL.left,rootR.right) && isEqual(rootL.right,rootR.left)
  }

  return isEqual(root.left, root.right)
};

// #21

var isSymmetric = function(root) {
    
  let stack = [root.left, root.right]
  
  while(stack.length) {
      rootR = stack.pop()
      rootL = stack.pop()
      
      if (!rootR && !rootL) continue;
      if (!rootR || !rootL) return false;
      if (rootR.val !== rootL.val) return false
      
      stack.push(rootR.left, rootL.right, rootR.right, rootL.left)
  }
  return true
};

// #22 
// isSame recursion
var isSameTree = function(p, q) {
    
  function help(node1, node2) {
      
      if (!node1 && !node2) return true;
      if (!node1 || !node2) return false;
      if (node1.val !== node2.val) return false
      
      return help(node1.left, node2.left) && help(node1.right, node2.right)
  }
  
  return help(p,q)
}

// 07.26.22
// #23
// same tree iteration, better method

var isSameTree = function(p, q) {
    
  let stack = [p,q]
  
  while (stack.length) {
      node1 = stack.pop()
      node2 = stack.pop()
      
      if (!node1 && !node2) continue;
      if (!node1 || !node2) return false;
      if (node1.val !== node2.val) return false;
      
      stack.push(node1.left, node2.left, node1.right, node2.right)
  }
  return true
}

// #24

var levelOrder = function(root) {
  if (root === null) return [];
  
  let q = [root]
  let arr = []
  
  while (q.length) {
      let temp = []
      let qLen = q.length
      
      for (let i = 0; i < qLen; i++) {
          root = q.shift()
          temp.push(root.val)
          if (root.left) q.push(root.left);
          if (root.right) q.push(root.right);
      }
      arr.push(temp)
  }
  return arr
};


// #25

var maxDepth = function(root) {
  if (root === null) return 0;
  
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  
  return Math.max(left, right) + 1
};

// #### practice

// # loop
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length-1; i++) {
      for (let j = i+1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }
};

// # hash
var twoSum = function(nums, target) {
  let hash = {}

  for (let i = 0; i < nums.length; i++) {
      let n = nums[i]
      if (hash[target-n] !== undefined) {
          return [hash[target-n], i]
      }
      hash[n] = i
  }
};

var lengthOfLastWord = function(s) {
  return s.trim().split(' ').reverse()[0].length
};

var isPalindrome = function(x) {
  return String(x).split('').reverse().join('') == String(x)
};

var longestCommonPrefix = function(strs) { // my best so far
  if (strs.length == 1) { return strs[0] }
  
  let shortest = strs.sort((a,b)=> a.length-b.length)[0]

  for (let i = shortest.length; i > 0; i--) {
      if(strs.every(word=> word.substring(0,i).includes(shortest.substring(0,i)))) {
          return shortest.substring(0,i)
      }
  }
  return ''
};