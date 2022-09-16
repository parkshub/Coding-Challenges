let s = [4, 3, 2]
let t = []

let i = 0
let j = s.length-1
let temp;
while (t.length != s.length) {


    t.push(s[i])
    t.push(s[j])

    if (t.length > s.length) {
        t.pop()
        break
    }

    if(i < j) {
        i++
        j--
    }
    else if (j < i) {
        j++
        i--
    }
    temp = i
    i = j
    j = temp
}

console.log(t)