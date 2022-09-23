p = console.log
let res = [2,2,2,2]

// conditions
// if numbers of booths exceed the number of ppl, person with greatest time is the answer
// if only one booth, count up all ppl's times
// no one, 0

//splice # of booths
// while loop that runs until arr is empty AND when spliced array all equals 0
// check how many zeros in the spliced array with filter and length
// shift from arr and push to spliced arr however many times 0 appears
// map spliced arr so that all get -1
// counter +=1 

let arr = [26,19,36,9,40,34,46,13,49,49,32,28,21,43,4,45,32,44,21,26,26,24,28,6] 
let n = 2
// answer 357
// if(!customers.length) {return 0}
// if(customers.length < n) {return Math.max(...customers)}
// if(n === 1) {
//   return customers.reduce((prev, curr) => prev + curr)
// }
// let splicedArr = [2,3,5]
let splicedArr = arr.splice(0,n)
let counter = 0

while(splicedArr.some(x => x > 0)) { // deleted arr.length conditional
    splicedArr = splicedArr.map(x => x-1)
    let zeros = splicedArr.filter(x => x===0)
    p(splicedArr)
    if (arr.length) {
        for (let i in zeros) {
            splicedArr = splicedArr.filter(x => x !=0)
            splicedArr.push(arr.shift())
        }
    }
    counter += 1
}
p(counter, splicedArr)