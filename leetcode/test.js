// const graph = {
//     a: ['b', 'c'],
//     b: ['d'],
//     c: ['e'],
//     d: ['f'],
//     e: [],
//     f: []
// }

// const breadth = (src, graph) => {
//     const queue = [ src ]

//     while (queue.length) {
//         const current = queue.shift()
//         console.log(current)

//         for (let neighbor of graph[current]) {
//             queue.push(neighbor)
//         }
//     }
// }

// // breadth('a', graph)

// const depth = (src, graph) => {
//     const stack = [ src ]

//     while (stack.length) {
//         const current = stack.pop()
//         console.log(current)

//         for (let neighbor of graph[current]) {
//             stack.push(neighbor)
//         }
//     }
// }

// const depthRec = (src, graph) => {
//     console.log(src)

//     for (let neighbor of graph[src]) {
//         depthRec(neighbor, graph)
//     }
// }

const graph2 = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g','k'],
    j: ['i'],
    k: []
}

const hasPathBreadth = (src, dst, graph) => {
    const queue = [ src ]

    while (queue.length) {
        const current = queue.shift()
        if (current === dst) { return true }

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }

    return false
}

const hasPathDepth = (src, dst, graph) => {
    const stack = [ src ]

    while (stack.length) {
        const current = stack.pop()
        if (current === dst) { return true }

        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }

    return false
}

const hasPathDepthRec = (src, dst, graph) => {
    if (src === dst) { return true }

    for (let neighbor of graph[src]) {
        if (hasPathDepthRec(neighbor, dst, graph) === true) {
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

const hasPath = (edges, src, dst) => {
    const graph = buildGraph(edges)
    return findPath(graph, src, dst, new Set())
}

const buildGraph = (edges) => {
    const graph = {}

    for (let edge of edges) {
        const [a, b] = edge
        
        graph[a] ? graph[a].push(b) : graph[a] = [b]
        graph[b] ? graph[b].push(a) : graph[b] = [a]
    }

    return graph
}

const findPath = (graph, src, dst, visited) => {
    if (visited.has(src)) { return false }
    if (src === dst) { return true }

    visited.add(src)

    for (let neighbor of graph[src]) {
        if (findPath(graph, neighbor, dst, visited) === true) {
            return true
        }
    }

    return false
}

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
    const visited = new Set()
    let count = 0

    for (let node in graph) {
        if (exploreComponent(graph, node, visited) === true) {
            count += 1
        }
    }

    return count
}

const exploreComponent = (graph, node, visited) => {
    if (visited.has(String(node))) { return false }
    visited.add(String(node))

    for (let neighbor of graph[node]) {
        exploreComponent(graph, neighbor, visited)
    }

    return true
}

const connectedComponentsCountIterative= (graph) => {
    const visited = new Set()
    let count = 0

    for (let node in graph) {

        if (visited.has(String(node))) { continue }

        const stack = [ node ]

        while (stack.length) {
            const current = stack.pop()

            for (let neighbor of graph[current]) {
                if (!visited.has(String(neighbor))) { 
                    visited.add(String(neighbor))
                    stack.push(neighbor)
                }
            }
        }

        count += 1
    }

    return count
}

const largestComponent = (graph) => {
    const visited = new Set()
    let largest = 0

    for (let node in graph) {
        let size = exploreLargest(node, graph, visited)
        if (size > largest) { largest = size }
    }

    return largest
}

const exploreLargest = (node, graph, visited) => {
    if (visited.has(String(node))) { return 0 }
    visited.add(String(node))

    let size = 1

    for (let neighbor of graph[node]) {
        size += exploreLargest(neighbor, graph, visited)
    }

    return size
}

const edges2 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ]

const shortest = (edges, src, dst) => {
    const graph = buildGraph(edges)
    let minimum = -Infinity
    
    const visited = new Set([ src ])
    const queue = [[ src, 0 ]]

    while (queue.length) {
        const [ node, distance ] = queue.shift()
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
    const visited = new Set()
    let count = 0

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if(exploreNumIsland(grid, r, c, visited) === true) {
                count += 1
            }
        }
    }

    return count
}

const exploreNumIsland = (grid, r, c, visited) => {
    if (0 > r || r >= grid.length) { return false }
    if (0 > c || c >= grid[0].length) { return false }
    if (visited.has(r + ',' + c)) { return false }
    if (grid[r][c] === 'W') { return false }

    const pos = r + ',' + c
    visited.add(pos)

    exploreNumIsland(grid, r + 1, c, visited)
    exploreNumIsland(grid, r - 1, c, visited)
    exploreNumIsland(grid, r, c + 1, visited)
    exploreNumIsland(grid, r, c - 1, visited)

    return true
}


const minIsland = (grid) => { // answer is 2
    const visited = new Set()
    let min = Infinity

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            let size = exploreMinIsland(grid, r, c, visited)
            if (size < min && size !== 0) { min = size }
        }
    }

    return min
}

const exploreMinIsland = (grid, r, c, visited) => {
    if (0 > r || r >= grid.length) { return 0 }
    if (0 > c || c >= grid[0].length) { return 0 }
    if (grid[r][c] === 'W') { return 0 }
    
    const pos = r + ',' + c
    if (visited.has(pos)) { return 0 }
    visited.add(pos)

    let size = 1

    size += exploreNumIsland(grid, r + 1, c, visited)
    size += exploreNumIsland(grid, r - 1, c, visited)
    size += exploreNumIsland(grid, r, c + 1, visited)
    size += exploreNumIsland(grid, r, c - 1, visited)
    
    return size
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const a = new Node(2)
const b = new Node(8)
const c = new Node(3) 
const d = new Node(7)

a.next = b
b.next = c
c.next = d

const traverse = (head) => {
    let current = head
    const res = []

    while(current !== null) {
        res.push(current.val)
        current = current.next
    }

    return res
}

const traverseRec1 = (head, arr) => {
    if (head === null) { return }
    arr.push(head.val)
    traverseRec(head.next, arr)

    return arr
}

const traverseRec2 = (head) => {
    const values = []
    
    helper(head, values)

    return values
}

const helper = (head, values) => {
    if (head === null) { return }
    values.push(head.val)
    helper(head.next, values)
}

const sumList = (head) => {
    let sum = 0

    let current = head

    while(current !== null) {
        sum += current.val
        current = current.next
    }

    return sum
}

// 2, 8, 3, 7
const sumListRec = (head) => {
    if (head === null) { return 0 }
    return head.val + sumListRec(head.next)
// do this
}


const AA = class {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const gg = new AA('a')

console.log(gg)