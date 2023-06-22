const edges2 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ]

const buildGraph = (edges) => {
    const graph = {}

    for (let edge of edges) {
        const [a, b] = edge
        !graph[a] ? graph[a] = [b] : graph[a].push(b)
        !graph[b] ? graph[b] = [a] : graph[b].push(a)
    }

    return graph
}


const shortest = (edges, src, dst) => {
    const graph = buildGraph(edges)
    const visited = new Set([ src ])
    const queue = [ [ src, 0 ] ]

    while (queue.length) {
        const [ current, distance ] = queue.shift()
        if (current === dst) { return distance }

        for (let neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push([ neighbor, distance + 1 ])
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

const islandCount = (grid) => {
    const visited = new Set()
    let count = 0

    function helper(grid, r, c, visited) {
        if (r < 0 || r >= grid.length) { return false }
        if (c < 0 || c >= grid[0].length) { return false }

        const pos = r + ',' + c

        if (visited.has(pos)) { return false }
        if (grid[r][c] === 'W') { return false }

        visited.add(pos)

        helper(grid, r + 1, c, visited)
        helper(grid, r - 1, c, visited)
        helper(grid, r, c + 1, visited)
        helper(grid, r, c - 1, visited)

        return true
    }

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (helper(grid, r, c, visited) === true) {
                count += 1
            }
        }
    }

    return count
}


const minIsland = (grid) => {
    const graph = buildGraph(grid)
    const visited = new Set()
    let minimum = +Infinity

    function helper (grid, r, c, visited) {
        if (r < 0 || r >= grid.length) { return 0 }
        if (c < 0 || c >= grid[0].length) { return 0 }
        if (grid[r][c] === 'W') { return 0 }

        const pos = r + ',' + c

        if (visited.has(pos)) { return 0 }

        visited.add(pos)

        let size = 1

        size += helper(grid, r + 1, c, visited)
        size += helper(grid, r - 1, c, visited)
        size += helper(grid, r, c + 1, visited)
        size += helper(grid, r, c - 1, visited)

        return size
    }

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            let size = helper(grid, r, c, visited)
            if (size < minimum && size !== 0) { minimum = size }
        }
    }

    return minimum
}