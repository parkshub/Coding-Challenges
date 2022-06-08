// 'x' marks the spot
// ##Task:
// Given a two dimensional array, return the co-ordinates of 'x'. If 'x' is not inside the array, or if 'x' appears multiple times, return []. The co-ordinates should be zero indexed. You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

const xMarksTheSpot = (input) => {
    let cords=[]
    for (let i=0; i<input.length; i++){
      console.log(i, ' i')
      if (input[i].includes('x')){
        for (let j=0; j<input[i].length; j++){
          console.log(j, ' j')
          console.log(cords, ' cords')
          if(input[i][j]=='x'){
            cords = cords.concat([i,j])
          }
        }
      }
    }
    if (cords.length == 0 || cords.length > 2){
      return [];
    } else {
      return cords
    }
  }