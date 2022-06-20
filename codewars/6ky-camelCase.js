// Break camelCase
// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    let idx = []  
    
    string.split('').forEach((x, i) => {
        if (/[A-Z]/g.test(x)) {
          idx.push(i)
        }
      })
    
    let answer = idx.map((x,i) => {
      return string.slice(x, idx[i+1])
    })
    
    answer.unshift(string.slice(0, idx[0]))
    
    return answer.join(' ')
  }