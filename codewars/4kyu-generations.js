//could not finish 2/5 success

function getGeneration(cells, generations){
  
    console.log(cells, generations)
    
    let b = [[0,0,0]].concat(JSON.parse(JSON.stringify(cells))).concat([[0,0,0]])
    let c = JSON.parse(JSON.stringify(cells))
    
  
    let val = 0
    let neighbours = []
    
    for (let i=1; i<b.length-1; i++) {
      for (let j=0; j<b[i].length; j++) {
        neighbours = []
  
        for (let ii=-1; ii<2; ii++) {//getting neighbours values
          for (let jj=-1; jj<2; jj++){
              val = b[i+ii][j+jj] || 0 
              neighbours.push(val)
            }
          }
  
        let det = neighbours.reduce((add1,add2) => {return add1+add2})
  
        if (b[i][j]==1 & (det-1 < 2 || det-1 > 3)) {
          c[i-1][j] = 0
        }
        else if (b[i][j]==0 & det ==3) {
          c[i-1][j] = 1
        }
      }
    }
    let newGen = generations - 1
    if (newGen == 0) {
      return c
    } else {
      return getGeneration(c, newGen)
    }
  }