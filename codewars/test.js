p = console.log
let size = 3

let a = [...new Array(size)].map(x => new Array(size).fill(0))

for (let i = 0; i<a.length; i++) {
    p(i)
    for (let j = 0; j<a.length; j++) {
        a[i][j] = (i+1) * (j+1)
    }
}

// a[1][1] = 3
// p(a[1][1])
p(a)