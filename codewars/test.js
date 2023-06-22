const graph3 = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}

// connected components
const connectedComponents = (graph) => {
    const visited = new Set()
    let count = 0

    const helper = (graph, node, visited) => {
        if (visited.has(String(node))) { return false }
        visited.add(String(node))

        for (let neighbor of graph[node]) {
            helper(graph, neighbor, visited) === true
        }

        return true
    }

    for (let node in graph) {
        if (helper(graph, node, visited) === true) { count += 1 }
    }

    return count
}
// largest component
const largestComponent = (graph) => {
    const visited = new Set()
    let largest = -Infinity

    const explore = (graph, node, visited) => {
        if (visited.has(String(node))) { return 0 }
        visited.add(String(node))

        let size = 1

        for (let neighbor of graph[node]) {
            size += explore(graph, neighbor, visited)
        }

        return size
    }

    for (let node in graph) {
        let size = explore(graph, node, visited)
        if (size > largest) { largest = size }
    }

    return largest
}

const edges2 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ]

// shortest path

function buildGraph(edges) {
    const graph = {}

    for (let edge of edges) {
        const [ a, b ] = edge
        graph[a] ? graph[a].push(b) : graph[a] = [b]
        graph[b] ? graph[b].push(a) : graph[b] = [a]
    }

    return graph
}

const shortest = (edges, src, dst) => {
    const graph = buildGraph(edges)
    
    const visited = new Set([ src ])
    const queue = [ [src, 0] ]

    while(queue.length) {
        const [ node, distance ] = queue.pop()
        if (node === dst) { return distance }

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push([ neighbor, distance + 1 ])
            }
        }
    }

    return -1
}


// console.log(shortest(edges2, 'w', 'z'))

// number of islands
const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ]

const numIsland = (grid) => {
    let res = 0
    const visited = new Set()

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (helper(grid, r, c, visited) === true) {
                res += 1
            }
        }
    }

    return res
}

const helper = (grid, r, c, visited) => {
    if (r < 0 || r >= grid.length) { return false }
    if (c < 0 || c >= grid[0].length) { return false }
    if (grid[r][c] === 'W') { return false }

    const pos = r + ',' + c

    if (visited.has(pos)) { return false }

    visited.add(pos)

    helper(grid, r - 1, c, visited)
    helper(grid, r + 1, c, visited)
    helper(grid, r, c - 1, visited)
    helper(grid, r, c + 1, visited)

    return true
}

console.log(numIsland(grid))

// smallest island