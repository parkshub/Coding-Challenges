// Tic-Tac-Toe Checker
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!
// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

let board = [[2,1,1],[0,1,1],[2,2,2]]

function isSolved(board) {

    let winning = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]//erase last entry
  
    let boardFlat = [].concat(...board)
  
    let zeroIdx = boardFlat.map(function(x,i) {
      if (x==0) {
        return i
      }
    }).filter((x)=>x!=undefined)
    
    let oneIdx = boardFlat.map(function(y,i) {
      if (y==1) {
        return i
      }
    }).filter((x)=>x!=undefined)
    
    let twoIdx = boardFlat.map(function(z,i) {
      if (z==2) {
        console.log('this is i', i)
        return i
      }
    }).filter((x)=>x!=undefined)
  
    // console.log(boardFlat, 'zero idx =====',zeroIdx)
    // console.log(board)
    // console.log('zeroIdx===', zeroIdx)
    // console.log('oneIdx===', oneIdx)
    // console.log('twoIdx===', twoIdx)
    // console.log(winning.filter((x)=> String(x) == String(oneIdx)))
  
    
    
  //   console.log(winning.filter((x)=>JSON.stringify(x)==JSON.stringify(oneIdx).length))
  log(winning.filter((x)=>JSON.stringify(x)==JSON.stringify(twoIdx)))
    
    if (winning.filter((x)=>JSON.stringify(x)==JSON.stringify(oneIdx)).length > 0) {
      console.log('returning 1')
      return 1
    }
    else if (winning.filter((x)=>JSON.stringify(x)==JSON.stringify(twoIdx)).length > 0) {
      console.log('returning 2')
      return 2
             }
    else if (zeroIdx.length == 0) {
      console.log('returning 0')
      return 0
    }
    else {
      console.log('returning -1')
      return -1
    }
  }
// 06.16.22 almost there, only one example wrong