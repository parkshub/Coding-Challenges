let cache = {}

let A = [1,2,2,3,3,3,4,3,3,3,2,2,1]

console.log(cache[1])


A.forEach(x => {
    if (!cache[x]) {
        cache[x] = 1
    } else {
        cache[x] += 1
    }
})

let idx = Object.values(cache).findIndex(x => x%2 != 0)

let res = Object.keys(cache)[idx]

console.log(res)