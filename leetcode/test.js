var longestCommonPrefix = function(strs) {
    if (strs.length == 1) { return strs[0] }
    
    let shortest = strs.sort((a,b)=> a.length-b.length)[0]

    for (let i = shortest.length; i > 0; i--) {
        if(strs.every(word=> word.substring(0,i).includes(shortest.substring(0,i)))) {
            return shortest.substring(0,i)
        }
    }
    return ''
};