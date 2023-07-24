const p = console.log

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
  }

function breadthFirst(graph, source) {
    const queue = [ source ]

    while(queue.length) {
        const current = queue.shift()
        p(current)

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}

function depthFirst(graph, src) {
    const stack = [ src ]

    while (stack.length) {
        const current = stack.pop()
        p(current)
        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
}

function depthFirstRec(graph, src) {
    console.log(src)
    for (let neighbor of graph[src]) {
        depthFirstRec(graph, neighbor)
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

function hasPathDepth(graph, src, dst) {
    const stack = [ src ]

    while(stack.length) {
        const current = stack.pop()
        for (let neighbor of graph[current]) {
            // p(neighbor)
            if (neighbor === dst) { return true }
            stack.push(neighbor)
        }
    }

    return false
}

function hasPathRec(graph, src, dst) {
    if (src === dst) { return true }

    for (let neighbor of graph[src]) {
        if (hasPathRec(graph, neighbor, dst) === true) {
            return true
        }
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

function buildGraph(edges) {
    const graph = {}
    
    for (let edge of edges) {
        const [ a, b ] = edge
        
        graph[a] ? graph[a].push(b) : graph[a] = [b]
        graph[b] ? graph[b].push(a) : graph[b] = [a]
    }

    return graph
}

function unHasPath(edges, src, dst) {
    const graph = buildGraph(edges)
    const visited = new Set()
    const stack = [ src ]

    while (stack.length) {
        const current = stack.pop()
        
        if ( current === dst ) { return true }
        for (let neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                stack.push(neighbor)
            }
        }
    }

    return false
}

function unHasPathRec(edges, src, dst) {
    const graph = buildGraph(edges)
    const visited = new Set()

    return search(graph, src, dst, visited)
}

function search(graph, node, dst, visited) {
    if (visited.has(node)) { return false }
    if (node === dst) { return true }
    
    visited.add(node)

    for (let neighbor of graph[node]) {
        if (search(graph, neighbor, dst, visited) === true) {
            return true
        }        
    }

    return false
}

p(unHasPathRec(edges, 'i', 'm'))


const graph3 = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  }

const connectedComponentsCount = (graph) => {
    let count = 0
    // go through the graph, then and once the inner function is done traversing, add one to outer var count
    const visited = new Set()

    for (let node in graph) {
        if (search3(graph, visited, node) === true) {
            count += 1
        }
    }

    return count
}

function search3(graph, visited, node) {
    if (visited.has(String(node))) { return false }

    visited.add(String(node))

    for (let neighbor of graph[node]) {
        search3(graph, visited, neighbor)
    }

    return true
}



const largestComponent = (graph) => {
    let largest = -Infinity
    const visited = new Set()

    for (let node in graph) {
        let count = helper(graph, visited, node)
        if (count > largest) { largest = count }
    }

    function helper(graph, visited, node) {
        if (visited.has(String(node))) { return 0 }
        
        visited.add(String(node))

        let count = 1

        for (let neighbor of graph[node]) {
            count += helper(graph, visited, neighbor)
        }

        return count
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

function shortest(edges) {
    let smallest = Infinity
    const graph = buildGraph(edges)
    console.log(graph)
    const visited = new Set()

    for (let node in graph) {
        let size = helper(graph, visited, node)
        if (size < smallest && size !== 0) { smallest = size }
    }

    function helper(graph, visited, node) {
        if (visited.has(String(node))) { return 0 }
        
        let count = 1
        
        visited.add(String(node))
        
        for (let neighbor of graph[node]) {
            count += helper(graph, visited, neighbor)    
        }

        return count
    }

    return smallest
}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ]

function islandCount(grid) {
    const visited = new Set()
    let count = 0

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (search(grid, visited, r, c) === true) { count += 1 }
        }
    }

    return count

    function search(grid, visited, r, c) {
        if (r > grid.length - 1 || r < 0) { return false }
        if (c > grid[0].length - 1 || c < 0) { return false }
        if (grid[r][c] === 'W') { return false }

        const pos = `${r},${c}`

        if (visited.has(pos)) { return false }

        visited.add(pos)

        search(grid, visited, r + 1, c)
        search(grid, visited, r - 1, c)
        search(grid, visited, r, c + 1)
        search(grid, visited, r, c - 1)

        return true
    }
}



function smallestIsland(grid) {
    const visited = new Set()
    let smallest = Infinity

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            let count = helper(grid, visited, r, c)
            if (count < smallest && count > 0) { smallest = count }
        }
    }

    return smallest

    function helper(grid, visited, r, c) {
        if (r > grid.length - 1 || r < 0) { return 0 }
        if (c > grid[0].length - 1 || c < 0) { return 0 }
        if (grid[r][c] === 'W') { return 0 }

        // console.log(r,c)

        const pos = `${r},${c}`

        if (visited.has(pos)) { return 0 }

        visited.add(pos)

        let count = 1

        count += helper(grid, visited, r + 1, c)
        count += helper(grid, visited, r - 1, c)
        count += helper(grid, visited, r, c + 1)
        count += helper(grid, visited, r, c - 1)

        return count
    }
}

console.log(smallestIsland(grid))

