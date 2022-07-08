//Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any dead cell with exactly three live neighbours becomes a live cell.

p = console.log

let a = [[1,0,0],
        [0,1,1],
        [1,1,0]]


let b = [[0,0,0]].concat(JSON.parse(JSON.stringify(a))).concat([[0,0,0]])
let c = JSON.parse(JSON.stringify(a))


let val = 0
let neighbours = []
for (let i=1; i<b.length-1; i++) {
  for (let j=0; j<b[i].length; j++) {
    neighbours = []
    // console.log('value is ' + b[i][j])
        
    for (let ii=-1; ii<2; ii++) {//getting neighbours values
      for (let jj=-1; jj<2; jj++){
          val = b[i+ii][j+jj] || 0 
          // console.log(`coords ${i+ii} and ${j+jj}`)
          // console.log('val ' + val)
          neighbours.push(val)
        }
      }

    let det = neighbours.reduce((add1,add2) => {return add1+add2})
    // console.log(neighbours)
    // console.log('det' + det)
    
    if (b[i][j]==1 & (det-1 < 2 || det-1 > 3)) {
      c[i-1][j] = 0 //change this to match
    }
    else if (b[i][j]==0 & det ==3) {
      c[i-1][j] = 1
    }
  }
}
p(c)