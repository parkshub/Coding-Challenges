let n = 3
let arr = [1,1,3,3,7,2,2,2,2]
let cache = {}
let res = []

arr.forEach((x) => {
    if (!cache[x]) {
        cache[x] = 1
        res.push(x)
    } else {
        cache[x] += 1
        if (cache[x] <= 3) { res.push(x) }
    }
})

console.log(res, cache)