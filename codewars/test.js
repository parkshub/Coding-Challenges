log = console.log

nums = [1,2,3,4]

// log(nums.slice(1))
// log(nums.indexOf(3))

function twosum(nums, target) {
  for (let i=0; i<nums.length-1; i++) {
    let numsSlice = nums.slice(i)
    for (let j=1; j<=numsSlice.length; j++) {
      if(numsSlice[0] + numsSlice[j]==target) {
        return [nums.indexOf(numsSlice[0]),nums.indexOf(numsSlice[j])]
      }
    }
  }
}

console.log(twosum([1,3,2,4], 7))

// let a = nums.slice(2)
// log(nums.slice(2),a)