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