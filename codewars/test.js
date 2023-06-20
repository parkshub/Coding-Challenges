// do until undirected has path problem
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

    while(queue.length) {
        const current = queue.shift()
        console.log(current)
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
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

const hasPathBreadth = (graph, src, dst) => {
    const queue = [ src ]

    while(queue.length) {
        const current = queue.shift()
        if (current === dst) { return true }

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }

    return false
}

const hasPathDepthRec = (graph, src, dst) => {
    if (src === dst) { return true }

    for (let neighbor of graph[src]) {
        if (hasPathDepthRec(graph, neighbor, dst) === true) { return true }
    }

    return false
}

// undirected has path

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
        const [a, b] = edge
        graph[a] ? graph[a].push(b) : graph[a] = [b]
        graph[b] ? graph[b].push(a) : graph[b] = [a]
    }

    return graph
}

const undirectedHasPath = (edges, src, dst) => {
    const visited = new Set()
    const graph = buildGraph(edges)

    const helper = (graph, visited, src, dst) => {
        if (src === dst) { return true }
        if (visited.has(src)) { return false }

        visited.add(src)

        for (let neighbor of graph[src]) {
            if (helper(graph, visited, neighbor, dst) === true) { return true }
        }

        return false
    }
    
    return helper(graph, visited, src, dst)
}

// linked list make and traverse rec and do sum rec

class Node {
    constructor(value) {
        this.value = value
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

const traverse = (head) => {

    let current = head

    while (current) {
        console.log(current.value)
        current = current.next
    }
}

const traverseRec = (head) => {
    if (head === null) { return }
    console.log(head.value)
    traverseRec(head.next)
}