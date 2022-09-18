function mazeRunner(maze, directions) {
    
    let coords = {}
    let coordsMap = {'N': [1, 0], 'S': [-1, 0], 'W': [0, 1], 'E': [0, -1]}
      
    maze.forEach((x, i) => {
        if(x.includes(2)) {
            coords.start = [i, x.indexOf(2)]
        }
        else if(x.includes(3)) {
            coords.end = [i, x.indexOf(3)]
        }
    })
    
    for(let i of directions) {
  
        coords.start[0] -= coordsMap[i][0]
        coords.start[1] -= coordsMap[i][1]
  
        let x = coords.start[0]
        let y = coords.start[1]
  
        if (x > maze.length-1 || y > maze.length-1 || x < 0 || y < 0 || maze[x][y] === 1) {
            return 'Dead'
        }
        if (maze[x][y] === 3) {
            return 'Finish'
        }
    }
    return 'Lost'
  }