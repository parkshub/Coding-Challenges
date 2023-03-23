let a = [20,10,30,10,10,15,35]


// console.log(a.slice(4))
// console.log(a.slice(0,1))
// console.log(a.slice(1))

console.log(a.slice(0,0).reduce((a,b)=> { return a+b},0))
console.log(a.slice(1).reduce((a,b)=> { return a+b},0))

// console.log(a.slice(4).reduce((a,b) => a+b))

for (let i = 0; i < a.length; i++) {
    console.log('we are on ', i)
    let l = a.slice(0,i).reduce((c,b) => { return c+b },0)
    let r = a.slice(i+1).reduce((c,b) => { return c+b },0)
    if (l === r) {console.log(i)}
}