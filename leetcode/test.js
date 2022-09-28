p = console.log

let str = 'abcde'
// let str = 'abcde'

let res = []

str.split('')

for(let i=0; i<str.length; i+=2) {
    if (i === str.length-1 && str.length%2 != 0) {
        res.push(str[i]+'_')    
    }
    else {
    res.push(str[i]+str[i+1])
    }
}

// res[res.length-1] = res[res.length-1].replace('undefined','_')

p(res)