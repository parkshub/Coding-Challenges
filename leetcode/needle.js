const haystack = "sadbutsad"
const needle = "sad"

var strStr = function(haystack, needle) {
    const instance = haystack.match(needle)
    return instance ? instance.index : -1   
};