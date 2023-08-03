function duplicates1(nums) {
    const set = new Set(nums)
    return set.size !== nums.length
}