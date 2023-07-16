const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
  }

const breadthFirst = (graph, src) => {
    const queue = [ src ]

    while (queue.length) {
        const current = queue.shift()
        console.log(current)
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}

const depthFirst = (graph, src) => {
    const stack = [ src ]

    while(stack.length) {
        const current = stack.pop()
        console.log(current)

        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
}

const depthFirstRec = (graph, src) => {
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

const hasPath = (graph, src, dst) => {
    if (src === dst) { return true }
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) === true) {
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

const buildGraph = (edges) => {
    const graph = {}

    for (let edge of edges) {
        const [ a, b ] = edge
        graph[a] ? graph[a].push(b) : graph[a] = [b]
        graph[b] ? graph[b].push(a) : graph[b] = [a]
    }

    return graph
}

const hasPath2 = (edges, src, dst) => {
    const graph = buildGraph(edges)
    const visited = new Set()

    const helper = (graph, src, dst, visited) => {
        if (visited.has(src)) { return false }
        if (src === dst) { return true }

        visited.add(src)

        for (let neighbor of graph[src]) {
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
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}

const connectedComponents = (graph) => { // answer should be 2
    const visited = new Set()
    let size = 0

    const helper = (graph, node, visited) => {
        if (visited.has(String(node))) { return false }
        visited.add(String(node))
        for (let neighbor of graph[node]) {
            helper(graph, neighbor, visited)
        }

        return 1
    }

    for (let node in graph) {
        size += helper(graph, node, visited)
    }

    return size
}

// console.log(connectedComponents(graph3))


// the answer should be 4
const largestComponent = (graph) => {
    let largest = -Infinity
    const visited = new Set()

    const helper = (graph, visited, node) => {
        if (visited.has(String(node))) { return 0 }
        visited.add(String(node))

        let size = 1

        for (let neighbor of graph[node]) {
            size += helper(graph, visited, neighbor)
        }

        return size
    }

    for (let node in graph) {
        const size = helper(graph, visited, node)
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

// shortest path problem
// this problem requires breadth search, not requires, but it's best for most situations

const shortestPath = (edges, src, dst) => {
    const graph = buildGraph(edges)

    const queue = [ [ src, 0 ] ]
    const visited = new Set([ src ])

    while (queue.length) {
        const [ current, distance ] = queue.shift()
        if (current === dst) { return distance }
        for (let neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
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

const numIsland = (grid) => {
    const visited = new Set()
    let count = 0

    function helper(grid, r, c, visited) {
        if (r < 0 || r >= grid.length) { return false }
        if (c < 0 || c >= grid[0].length) { return false }
        if (grid[r][c] === 'W') { return false }

        const pos = r + ',' + c

        if (visited.has(pos)) { return false }

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

function minIsland(grid) {
    let smallest = +Infinity
    const visited = new Set()

    function helper(grid, r, c, visited) {
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
            if (size < smallest && size !== 0) {
                smallest = size
            }
        }
    }

    return smallest
}

// console.log(minIsland(grid))

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next = b
b.next = c
c.next = d

const a2 = new Node(2)
const b2 = new Node(8)
const c2 = new Node(3)
const d2 = new Node(7)

a2.next = b2
b2.next = c2
c2.next = d2

function sumList(head) {
    if (head === null) { return 0 }
    return head.val + sumList(head.next)
}

// target exists?
function targetExists(head, target) {
    if (head === null) { return false }
    if (head.val === target) { return true }
    return targetExists(head.next, target)
}

// find target at index
function findIndex(head, index) {
    if (head === null) { return -1 }
    if (index === 0) { return head.val }

    return findIndex(head.next, index - 1)
}

function reverseList(head) {
    let prev = null
    let current = head

    while(current !== null) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
}

function reverseListRec(head, prev = null) {
    if (head === null) { return prev }
    const next = head.next
    head.next = prev
    return reverseListRec(next, head)
}

// console.log(reverseListRec(a))
//  null   a -- b -- c -- d
//  prev  cur--nxt

const zipperList = (head1, head2) => {
    let tail = head1
    let current1 = head1.next
    let current2 = head2
    let count = 0

    while (current1 !== null && current2 !== null) {
        if (count % 2 === 0) {
            tail.next = current2
            current2 = current2.next
        } else {
            tail.next = current1
            current1 = current1.next
        }
        tail = tail.next
        count += 1
    }
    return head1
}
const arr = [8, 20]
const mid = Math.floor((arr.length - 1) / 2)
const left = arr.slice(0, mid)
const right = arr.slice(mid)
console.log(arr, left, right)