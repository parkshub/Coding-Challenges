// let a = [1, [2, 3], 4, 5, [6, [7]]]

function flatten() {
    
    let args = [...arguments]
    console.log(args)

    return args.reduce((prev, curr) => {
        if (Array.isArray(curr)) {
            return prev.concat(flatten(...curr))
        }
        return prev.concat(curr)
    }, [])
}

// let ans = flatten(1, [2, 3], 4, 5, [6, [7]])
// console.log(ans)
// let a = 1

let b = [3,4,5]

console.log(...b)