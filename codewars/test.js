let p = console.log

let arr = [ ' ', '', '', 'a', '', '' ]
// let arr = [ 'foobar', 'barfo', 'fobara', '   ', 'fobra', 'oooofrab' ]
// let arr = [ 'Кот', 'Кто', 'ток', 'Пёс', 'коток', 'токоток' ]


let a = arr.map(x => x.toLowerCase().split(''))

a = a.map(y => {
    if (y[0]==undefined) {return [32]}
    else {return y.map(z => z.charCodeAt())}}) // this is the one

a = a.map(j => [...new Set(j)].sort())

for (let i = 0; i<a.length-1; i++) {
    if (String(a[i]) !== String(a[i+1])) {
        if (i !== 0) {
            console.log('here1')
            console.log(a[i+1], i)
            console.log(arr[i+1], i)
            break
        }
        else {
            if(String(a[i]) === String(a[a.length-1])) {
                console.log('here2')
                console.log(a[i+1], i)
                console.log(arr[i+1], i)
                break
            }
            console.log('here3')
            console.log(a[i], i)
            console.log(arr[i], i)
            break
        }
    }
}

// (String(a[0]) === String(a[1]))