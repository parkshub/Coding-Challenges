p = console.log

// let road = '>.>..<' // 8
let road = '.><.>>.<<' // 11
// let road = '.>>>' // 0

let cam = 0
let res = 0
let right = 0

for (let i = 0; i<road.length; i++) {
    if (road[i] === '.') {
        result += right          
        cam += 1
    }
    else if (road[i] === '<') {
        result += cam
    }

    else if (road[i] === '>') {
        right += 1
    }
}