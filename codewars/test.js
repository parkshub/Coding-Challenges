p = console.log

maze = [ [ 1, 1, 1, 1, 1, 1, 1 ],
[ 1, 0, 0, 0, 0, 0, 3 ],
[ 1, 0, 1, 0, 1, 0, 1 ],
[ 0, 0, 1, 0, 0, 0, 1 ],
[ 1, 0, 1, 0, 1, 0, 1 ],
[ 1, 0, 0, 0, 0, 0, 1 ],
[ 1, 2, 1, 0, 1, 0, 1 ] ]

let directions = [ 'N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'S', 'S' ] // dead

p(maze.length)
  
// console.log(maze, directions)
  
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

outerloop: for(let i of directions) {

    coords.start[0] -= coordsMap[i][0]
    coords.start[1] -= coordsMap[i][1]

    // p(coords.start)
    
    let x = coords.start[0]
    let y = coords.start[1]

    p(x, y)

    if (x > maze.length-1 || x < 0 || y > maze.length-1 || y < 0 || maze[x][y] === 1) {
        console.log ('Dead')
        break outerloop
    }
    if (maze[x][y] === 3) {
        console.log( 'Finish')
        break outerloop
    }
}
console.log( 'Lost')
