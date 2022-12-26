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

// let a = new Node('a')
// let b = new Node('b')
// let c = new Node('c')
// let d = new Node('d')
// let e = new Node('e')
// let f = new Node('f')

// a.left = b
// b.left = d
// b.right = e
// c.right = f

//      a
//     / \
//    b   c
//   /\    \
//  d  e    f 

// depth first order = a,b,d,e,c,f

// stack = [a]

// while(stack.length > 0) {
//   cur = stack.pop()
  
//   if(cur.right) {
//     stack.push(cur.right)
//   }
//   if(cur.left) {
//     stack.push(cur.left)
//   }
// }

// 07.20.22

// #13
var inorderTraversal = function(root, arr = new Array()) {
  if (root === null) {return []}
  
  inorderTraversal(root.left, arr)
  arr.push(root.val)
  inorderTraversal(root.right, arr)
  
  return arr
};

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

// let l1 = {val: 2, next: {val: 4, next: {val: 5, next: {val: 10, next: null}}}}
// let l2 = {val: 1, next: {val: 5, next: {val: 7, next: null}}}

function mergedTwoLists(l1,l2) {
  head = {val: null , next: null}
  curr = head
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1
      l1 = l1.next
    }
    else {
      curr.next = l2
      l2 = l2.next
    }
    curr = curr.next
  }

  curr.next = l1 || l2
  return head.next
}

let l1 = {val: 2, next: {val: 4, next: {val: 5, next: {val: 10, next: null}}}}
let l2 = {val: 1, next: {val: 5, next: {val: 7, next: null}}}

function mergedTwoListsRecursive(l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2
  }
  let node = ''
  if (l1.val < l2.val) {
    node = l1
    node.next = mergedTwoListsRecursive(l1.next, l2) 
  }
  else {
    node = l2
    node.next = mergedTwoListsRecursive(l1, l2.next)
  }

  return node
}

// reviewing tree traversal

var preorderTraversal = function(root) {
  // root left right
  if (!root) return [];
  
  let stack = [root]
  let arr = []
 
  while (stack.length) {
      let curr = stack.pop()
      arr.push(curr.val)

      if (curr.right) {
          stack.push(curr.right)
      }
      if (curr.left) {
          stack.push(curr.left)
      }
  }
  return arr
}

var preorderTraversalRecursive = function(root) {
  //root left right

  let arr = []
  traverse(root)
  function traverse(node) {
      if (!node) return [];
      arr.push(node.val)
      traverse(node.left)
      traverse(node.right)
  }
  return arr
}

var inorderTraversal = function(root) {
  // left root right
  // this one is the hardest imo
  let stack = []
  let arr = []

  while(stack.length > 0 || root) {
      if(root) {
          stack.push(root)
          root = root.left
      } else {
          root = stack.pop()
          arr.push(root.val)
          root = root.right
      }
  }
  return arr
};

var inorderTraversalRecursive = function(root) {//recursive
    let arr = []
    function traverse(node) {
        if(!node) return [];
        traverse(node.left)
        arr.push(node.val)
        traverse(node.right)
    }
    traverse(root)
    return arr
};

var postorderTraversal = function(root) {
  // left, right, root
      if (!root) return [];
  
      let stack = [root]
      let arr = []
  
      while(stack.length>0) {
          let node = stack.pop()
          arr.unshift(node.val)
          if(node.left) {
              stack.push(node.left)
          }
          if(node.right) {
              stack.push(node.right)
          }
      }
      return arr
  };

var postorderTraversalWithoutUnshift = function(root) {
  // left, right, root
      if (!root) return [];
  
      let stack = [root]
      let arr = []
  
      while(stack.length>0) {
          let node = stack.pop()
          arr.push(node.val)
          if(node.left) {
              stack.push(node.left)
          }
          if(node.right) {
              stack.push(node.right)
          }
      }
      return arr.reverse()
}

var postorderTraversalRecursive = function(root) {
  // left, right, root
  let arr = []
  traverse(root)
  return arr
  function traverse(node) {
      if (!node) return [];
      traverse(node.left)
      traverse(node.right)
      arr.push(node.val)
  }
};

var isValid = function(s) {
    
  if(!s) return false;
  
  let cache = {')': '(', ']': '[', '}': '{'}
  let keys = Object.keys(cache)
  let values = Object.values(cache)

  let stack = []

  for (let i of s) {
      if (keys.includes(i) && cache[i] === stack[stack.length-1]) {
          stack.pop()
      }
      else if (values.includes(i)) {
          stack.push(i)
      }
      else {
          return false
      }
  }

  if (stack.length === 0) { return true }
  return false
};

var climbStairs = function(n) {
  if (n == 0) return 0
  if (n == 1) return 1
  if (n == 2) return 2
  
  let arr = new Array(1,2)
  for (let i = 2; i <= n-1; i++) {
      arr[i] = arr[i-1] + arr[i-2]
  }

  return arr[arr.length-1]
};

var climbStairs = function(n, arr=[]) {
  if (!n) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;
  if (arr[n] !== undefined) return arr[n];

  arr[n] = climbStairs(n-1, arr) + climbStairs(n-2, arr)

  return arr[n]
};

var isPalindrome = function(s) {
  if (s === null) return false;

  s = s.trim()
  if (!s) return true;
  if (s.length == 1) return true;

  s = s.toLowerCase().split('').filter(x => /[A-Za-z0-9]/.test(x))
  
  let copy = JSON.parse(JSON.stringify(s))
  return s.reverse().join('') == copy.join('')
};

var searchInsert = function(nums, target) {
  if (target < nums[0]) { return 0 }
  if (target > nums[nums.length - 1]) { return nums.length }

  let idx = nums.indexOf(target)
  if (idx !== -1) { return idx }

  for (let i = 0; i < nums.length; i++) {
      if (nums[i]>=target) { return i }
  }
};


var deleteDuplicates = function(head) {
  if (head === null) return null

  let current = head

  while (current !== null) {
      while (current.next !== null && current.val === current.next.val) {
          current.next = current.next.next
      }
      current = current.next
  }

  return head
};

var singleNumber = function(nums) {
  if (nums.length == 1) { return nums[0] }

  let cache = {}

  for (let i = 0; i < nums.length; i++) {
      if (!cache[nums[i]]) {
          cache[nums[i]] = 1
      } else {
          cache[nums[i]] = cache[nums[i]] + 1
      }
  }

  let count = Object.values(cache)
  let idx = count.indexOf(1)
  
  return Object.keys(cache)[idx]
};

var mergeTwoLists = function(list1, list2) {
  let head = {val: '', next: null}
  let current = head
  while (list1 && list2) {
      if (list1.val < list2.val) {
          current.next = list1
          list1 = list1.next
          console.log(current)
      } else {
          current.next = list2
          list2 = list2.next
          console.log(current)
      }
      current = current.next
  }
  current.next = list1 || list2

  return head.next
};

var deleteDuplicates = function(head) {

  let current = head
  while (current) {
      if (current.next !== null && current.val == current.next.val) {
          current.next = current.next.next
      } else {
          current = current.next
      }
  }

  return head
};

var climbStairs = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 3;

  let arr = [0, 1, 2, 3]

  for (let i = 4; i <= n; i++) {
      let step = arr[i-1] + arr[i-2]
      arr.push(step)
  }
  return arr[arr.length-1]
};

var preorderTraversal = function(root) {

  if (root === null) return [];
  //root left right
  let stack = [root]
  let res = []

  while (stack.length > 0) {
      let node = stack.pop()
      res.push(node.val)
      if (node.right) {
          stack.push(node.right)
      }
      if (node.left) {
          stack.push(node.left)
      }
  }

  return res
}