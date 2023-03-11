let listOfArt = [
    'ROXANNE 102',
    'RHODODE 123',
    'BKWRKAA 125',
    'BTSQZFG 239',
    'DRTYMKH 060'
  ] 
let listOfCat = [ 'B', 'R', 'D', 'X' ]


let cache = {}

listOfCat.forEach(x => cache[x] = 0)

listOfArt.forEach((x, i) => {
    (Object.keys(cache).includes(x[0])) && (cache[x[0]] += Number(x.split(' ')[1]))
})

let ans = Object.entries(cache).map(x => `(${x[0]} : ${x[1]})`)

console.log(ans.join(' - '))