// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    let a = s.split('')
    a.forEach((x,i) => {
      a[i] = x.toUpperCase() + x.toLowerCase().repeat(i)
    })
    return a.join('-')
  }