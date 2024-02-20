// https://www.youtube.com/watch?v=tWVWeAqZ0WU&list=PLYXTMeEw1oo90WpyT0bdT9y867mQvePBd&ab_channel=freeCodeCamp.org

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
  }
  
// a ---> c
// |      |
// v      v
// b      e
// |
// v
// d ---> f

// try breadth first and depth first
// and try recursive function (breadth first wont work)
// breadth is queue and depth is stack
// breadth: acbedf
// depth: abdfce

// breadth first

function graphBreadth(graph, node) {

  let queue = [node]

  while (queue.length) {
    let current = queue.shift()
    // console.log(current)

    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
}

function graphDepth(graph, node) {

  let stack = [ node ] 

  while (stack.length) {
    let current = stack.pop()
    // console.log(current)


    for (let neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }
}

function graphDepthRec(graph, node) {
  // console.log(node)
  for (let i of graph[node]) {
    graphDepth(graph, i)
  }
}

const graph2 = {
  f: ['g','i'],
  g: ['h'],
  h: [],
  i: ['g','k'],
  j: ['i'],
  k: []
}

function hasPathIter(graph, start, end) {
  if (start === end) { return true }
  
  let stack = [ start ]

  while (stack.length) {
    let current = stack.pop()
    if (current === end) { return true }
    
    for (let i of graph[current]) {
      stack.push(i)
    }
  }

  return false
}

function hasPathRec(graph, start, end) {
  if (start === end) { return true }
  
  for (let i of graph[start]) {
    if(hasPathRec(graph, i, end) === true) { return true}
  }

  return false
}

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
]

function createGraph(edges) {
  let graph = {}

  for (let edge of edges) {
    let [a, b] = edge
    
    graph[a] ? graph[a].push(b) : graph[a] = [b]
    graph[b] ? graph[b].push(a) : graph[b] = [a]
  }

  return graph
}

// const graph3 = createGraph(edges)

function hasPathDir(graph, start, end) {
  if (start === end) { return true }

  const visited = new Set()
  const stack = [ start ]
  
  while (stack.length) {
    const current = stack.pop()
    
    if (current === end) { return true }
    
    visited.add(current)

    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) { stack.push(neighbor) }
    }
  }

  return false
}

function hasPathRec1(graph, start, end) {
  if (start === end) { return true }

  const visited = new Set()

  function helper(graph, start, end, visited) {
    if (start === end) { return true }
    if (visited.has(start)) { return false }

    visited.add(start)

    for (let neighbor of graph[start]) {
      if (helper(graph, neighbor, end, visited) === true) { return true }
    }

    return false
  }

  return helper(graph, start, end, visited)
}


function connectedComponents(graph, src) {

  let visited = new Set()
  let count = 0

  for (let edge in graph) {
    if (traverse(graph, edge, visited) === true) { count += 1 }
  }

  function traverse(graph, edge, visited) {
    if (visited.has(edge)) { return false }
    visited.add(edge)

    for (let neighbor of graph[edge]) {
      traverse(graph, neighbor, visited)
    }

    return true
  }

  return count
}

// const graph3 = {
//   0: [8, 1, 5],
//   1: [0],
//   5: [0, 8],
//   8: [0, 5],
//   2: [3, 4],
//   3: [2, 4],
//   4: [3, 2]
// }

const graph3 = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}

function componentsIterative(graph) {
  let count = 0
  let visited = new Set()

  for (let edge in graph) {
    
    if (visited.has(edge)) { continue }

    const queue = [ edge ]

    while (queue.length) {
      const current = queue.shift()
      
      // if (visited.has(current)) { continue }

      visited.add(current)

      for (let neighbor of graph[current]) {
        if (!visited.has(neighbor)) { queue.push(neighbor) }
      }
    }

    count += 1
  }

  return count
}



function largestComponent(graph) {
  let largest = -Infinity
  let visited = new Set()

  for (let edge in graph) {
    largest = Math.max(largest, explorer(graph, edge, visited))
  }

  return largest

  function explorer(graph, edge, visited) {
    if (visited.has(edge)) { return 0 }
    
    let count = 1
    visited.add(edge)

    for (let neighbor of graph[edge]) {
      if (!visited.has(neighbor)) { 
        count += 1 
        visited.add(neighbor)
      }
    }

    return count
  }
}





function smallest(graph) {
  let smallest = Infinity
  let visited = new Set()

  for (let edge in graph) {
    const newNum = explorer(graph, edge, visited)
    if (newNum > 0) {
      smallest = Math.min(smallest, newNum)
    }
  }

  return smallest

  function explorer(graph, edge, visited) {
    if (visited.has(edge)) { return 0 }
    
    let count = 1
    visited.add(edge)

    for (let neighbor of graph[edge]) {
      if (!visited.has(neighbor)) { 
        count += 1 
        visited.add(neighbor)
      }
    }
    return count
  }
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]


function numIslands(grid) {
  const visited = new Set()
  let count = 0

  let maxRow = grid.length
  let maxCol = grid[0].length

  for (let r = 0; r < maxRow; r++) {
    for (let c = 0; c < maxCol; c++) {
      if (traverse(grid, r, c, visited) === true) { count += 1 }
    }
  }

  return count
  
  function traverse(grid, r, c, visited) {
    let maxRow = grid.length
    let maxCol = grid[0].length

    if (r < 0 || c < 0) { return false}
    if (r > maxRow - 1|| c > maxCol - 1) { return false}
    
    if (grid[r][c] ==='W') { return false }
    if (visited.has(`${r},${c}`)) { return false }

    visited.add(`${r},${c}`)
    traverse(grid, r + 1, c, visited)
    traverse(grid, r - 1, c, visited)
    traverse(grid, r, c + 1, visited)
    traverse(grid, r, c - 1, visited)

    return true
  }
}

function smallestIsland(grid) {
  const visited = new Set()
  let smallest = Infinity

  let maxRow = grid.length
  let maxCol = grid[0].length

  for (let r = 0; r < maxRow; r++) {
    for (let c = 0; c < maxCol; c++) {
      let num = traverse(grid, r, c, visited) === true
      if (num > 0) { smallest = Math.min(smallest, num)}
    }
  }

  function traverse(grid, r, c, visited) {
    let maxRow = grid.length
    let maxCol = grid[0].length
    
    if (r < 0 || c < 0) { return 0}
    if (r > maxRow - 1|| c > maxCol - 1) { return 0}
    if (grid[r][c] ==='W') { return 0 }
    if (visited.has(`${r},${c}`)) { return 0 }

    let count = 1

    visited.add(`${r},${c}`)

    count += traverse(grid, r + 1, c, visited)
    count += traverse(grid, r - 1, c, visited)
    count += traverse(grid, r, c + 1, visited)
    count += traverse(grid, r, c - 1, visited)

    return count
  }
  
  return smallest
}