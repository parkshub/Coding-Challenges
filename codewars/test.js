let count = 0
function persistence(num) {
  
//   console.log(num)
  
  let val = String(num).split('')
  
   if (val.length == 1) {
     return count
   }
  
  count += 1
  
  val = val.reduce((prev, cur, i) => {
    return prev * cur
  })
  
//   console.log(count, val)
  
  return persistence(val)
  
}

console.log(persistence(39))