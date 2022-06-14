// Valid Parentheses
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parens) {

    let parensCopy = [...parens]        

    let tester = parensCopy.reduce((prev, cur) => {
        cur = prev
        let idx = cur.indexOf('\)')

        if (cur[0] == '\)' || cur.length%2 != 0 || idx == -1) {
            return cur
        }
        else {
            cur.splice(idx, 1)
            cur.shift()            
            return cur
        }
    }, parensCopy)
    
    if((tester[0] == '\(' && tester[tester.length-1] == '\)' && tester.length%2 == 0) || tester.length == 0)  {
        return true
    }

    return false
}