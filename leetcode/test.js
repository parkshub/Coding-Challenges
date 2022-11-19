
// let nums = [1,3,5,6]
// let target = 7
let target = 0
let nums = [-3,-1,3,90]

var searchInsert = function(nums, target) {
    if (target < nums[0]) { return 0 }
    if (target > nums[nums.length - 1]) { return nums.length }

    let idx = nums.indexOf(target)
    if (idx !== -1) { return idx }

    let check = nums[target]? target: nums.length - 1

    while(nums[check] > target) {
        console.log(check)
        check -= 1
    }

    return check + 1

};
// let check = nums[target]? target: nums.length
console.log(searchInsert(nums, target))