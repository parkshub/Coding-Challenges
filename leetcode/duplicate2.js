
var containsNearbyDuplicate1 = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        let currentVal = nums[i]
        let j = i + k

        while (j !== i) {
            if (nums[-j] === currentVal || nums[j] === currentVal) { return true }
            j--
        }
    }

    return false
};

var containsNearbyDuplicate2 = function(nums, k) {
    const map = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) { return true }
        map.set(nums[i], i)
    }

    return false
};