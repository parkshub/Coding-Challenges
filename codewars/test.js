let arr = [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]

arr.filter(x => x==0)
console.log(arr)

function moveZeros(arr) {
    let nonZeros = arr.filter(x => x!=0)
    let zeros = arr.filter(x => x==0)
    let res = nonZeros.concat(zeros)
    console.log(res)
  }

// moveZeros(arr)