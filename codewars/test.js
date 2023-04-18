let a = "582862 485371\n737478 183553\n279982 480476\n560827 319003\n829175 852665"

// let input = '123 456'
// let input = '555 555'
let input = "582862 485371\n737478 183553\n279982 480476\n560827 319003\n829175 852665"
let inputSplit = input.split('\n')

// let arr = []



// for (i of inputSplit) {

  let i = '582862 485371'

  let res = 0
  let newInput = i.split(' ')

  let input1 = newInput[0].split('').reverse()
  let input2 = newInput[1].split('').reverse()

  input1.reduce((prev,curr,i) => {

    console.log(prev, curr, input2[i], i)

    let test = String(Number(curr) + Number(input2[i]) + Number(prev))
    test = test.length > 1 ? test[0] : 0

    if (test > 0) { 
      res+= 1 
    }
    return test
  }, 0)

  console.log(res)

  // if (res === 0) { res = 'No'}
  // arr.push(`${res} carry operation${res > 0 ? 's' : ''}`)
// }

// console.log(arr.join('\n'))

