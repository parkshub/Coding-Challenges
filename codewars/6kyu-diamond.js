// Give me a Diamond
//Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
//Task
//You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

function diamond(n) {
    
    diam1 = ''
    let ceiling = Math.ceil(n/2)
    let floor = Math.floor(n/2)
    if (n%2==0 || n<=0) {
        return null
    }
    else {
        for (let i=0; i<ceiling; i++) {
            diam1 += ' '.repeat(ceiling-(i+1)) + '*'.repeat(i*2+1) + '\n'
        }
    }

    diam2 = diam1.split('\n').slice(0, floor).reverse().join('\n')
    if (!diam2.slice(-1)=='\n') {
      diam2 += '\n'
    }
  
    return diam1+diam2
}