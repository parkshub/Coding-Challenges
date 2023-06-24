// has path undirected graph

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

function buildGraph(edges) {
    const graph = {}

    for (let edge of edges) {
        const [a, b] = edge
        graph[a] ? graph[a].push(b) : graph[a] = [b]
        graph[b] ? graph[b].push(a) : graph[b] = [a]
    }

    return graph
}

function hasPathUndirected(edges, src, dst) {
    const visited = new Set()
    const graph = buildGraph(edges)
    if (graph[src] === undefined || graph[dst] === undefined) { return false }

    function helper(graph, node, dst, visited) {
        if (node === dst) { return true }
        if (visited.has(node)) { return false }

        visited.add(node)

        for (let neighbor of graph[node]) {
            if (helper(graph, neighbor, dst, visited) === true) {
                return true
            }
        }

        return false
    }

    return helper(graph, src, dst, visited)
}


const graph3 = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [4, 3],
  3: [2],
  4: [2]
}

const connectedComponentsCount = (graph) => {
    const visited = new Set()
    let count = 0

    function helper(graph, visited, node) {
        if (visited.has(String(node))) { return false }
        
        visited.add(String(node))

        for (let neighbor of graph[node]) {
            helper(graph, visited, neighbor)
        }

        return true
    }

    for (let node in graph) {
        if (helper(graph, visited, node) === true) {
            count +=1
        }
    }
    
    return count
}

function largestComponent(graph) {
    const visited = new Set()
    let largest = -Infinity

    function helper(graph, visited, node) {
        if (visited.has(String(node))) { return 0 }
        
        visited.add(String(node))
        
        let size = 1
        
        for (let neighbor of graph[node]) {
            size += helper(graph, visited, neighbor)
        }

        return size
    }

    for (let node in graph) {
        let size = helper(graph, visited, node)
        if (size > largest) { largest = size }
    }

    return largest
}

function shortestPath(graph, src, dst) {
    const visited = new Set([ src ])
    const queue  = [ [ src, 0 ] ]

    while (queue.length) {
        const [ current, distance ] = queue.shift()
        if (current === dst) { return distance }

        for (let neighbor of graph[current]) {
            if (!visited.has(String(neighbor))) {
                queue.push([ neighbor, distance + 1 ])
                visited.add(String(neighbor))
            }
        }
    }

    return -1
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]

// island count and minimum island

function islandCount(grid) {
    const visited = new Set()
    let count = 0

    function helper(grid, visited, r, c) {
        if (r < 0 || r >= grid.length) { return false }
        if (c < 0 || c >= grid[0].length) { return false }
        if (grid[r][c] === 'W') { return false }
        
        const pos = r + ',' + c

        if (visited.has(pos)) { return false }

        visited.add(pos)

        helper(grid, visited, r + 1, c)
        helper(grid, visited, r - 1, c)
        helper(grid, visited, r, c + 1)
        helper(grid, visited, r, c - 1)

        return true
    }

    for (let r = 0; r <= grid.length; r++) {
        for (let c = 0; c <= grid[0].length; c++) {
            if (helper(grid, visited, r, c) === true) {
                count +=1
            }
        }
    }

    return count
}

const minIsland = (grid) => {
    const visited = new Set()
    let smallest = Infinity

    function helper(grid, visited, r, c) {
        if (r < 0 || r >= grid.length) { return 0 }
        if (c < 0 || c >= grid[0].length) { return 0 }
        if (grid[r][c] === 'W') { return 0 }

        const pos = r + ',' + c

        if (visited.has(pos)) return (0)
        
        visited.add(pos)

        let size = 1

        size += helper(grid, visited, r + 1, c)
        size += helper(grid, visited, r - 1, c)
        size += helper(grid, visited, r, c + 1)
        size += helper(grid, visited, r, c - 1)

        return size
    }

    for (let r = 0; r <= grid.length; r++) {
        for (let c = 0; c <= grid[0].length; c++) {
            let size = helper(grid, visited, r, c)
            if (size < smallest && size !== 0) { smallest = size }
        }
    }

    return smallest
}

console.log(minIsland(grid))