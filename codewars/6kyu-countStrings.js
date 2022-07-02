// Count characters in your string
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
    let answer = [...string].reduce((prev, cur) => {
        if (!prev[String(cur)]) {
            prev[String(cur)] = 1
            return prev
        } else {
            prev[String(cur)] += 1
            return prev
      }
    }, {})
    return answer
}