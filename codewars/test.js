// acyclic search traversal problem

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
  }

const breadthFirst = (source, graph) => {
    const queue = [ source ]

    while (queue.length) {
        const current = queue.shift()

        console.log(current)

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}

const depthFirst = (source, graph) => {
    const stack = [ source ]

    while (stack.length) {
        const current = stack.pop()
        console.log(current)

        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
}

const depthFirstRec = (source, graph) => {
    console.log(source)

    for (let neighbor of graph[source]) {
        depthFirstRec(neighbor, graph)
    }
}

// acyclic has path problem

const graph2 = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g','k'],
    j: ['i'],
    k: []
}

const hasPathDepth = (source, graph, dst) => {
    
    const stack = [ source ]

    while (stack.length) {
        const current = stack.pop()
        
        if (current === dst) { return true }

        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }

    return false
}

const hasPathDepthRec = (source, graph, dst) => {

    if (source === dst) { return true }

    for (let neighbor of graph[source]) {
        if (hasPathDepthRec(neighbor, graph, dst) === true) { return true }
    }

    return false
}

const hasPathBreadth = (source, graph, dst) => {

    const queue = [ source ]

    while (queue.length) {
        const current = queue.shift()
        
        if (current === dst) { return true }

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }

    return false
}

// undirected graph has path problem

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = makeGraph(edges)
    return hasPath(graph, nodeA, nodeB, new Set())
}

const makeGraph = (edges) => {

    const graph = {}

    for (let edge of edges) {
        const [a, b] = edge

        graph[a] ? graph[a].push(b) : graph[a] = [b]
        graph[b] ? graph[b].push(a) : graph[b] = [a]

    }

    return graph
}

const hasPath = (graph, src, dst, visited) => {
    if (src === dst) { return true }
    if (visited.has(src)) { return false }

    visited.add(src)

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst, visited) === true) { return true }
    }

    return false
}


// connected components undirected graph problem

// create outer function
// make a counter variable
// make a visited variable
// for each of the nodes in graph... (if you do for (let i in graph) you can iterate through just the keys of an object)
// ... perform a depth first search recursively
    // pass on vars (graph, src, visited)
    // if visited return false
    // else add to visited
    // for each of the node's neighbors, perform search
    // if loop is completed return true


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
    const visited = new Set()

    for (let node in graph) {
        if (explore(node, graph, visited) === true) {
            count += 1
        }
    }

    return count
}

const explore = (node, graph, visited) => {
    if (visited.has(String(node))) { return false }

    visited.add(String(node))
    
    for (let neighbor of graph[node]) {
        explore(neighbor, graph, visited)
    }

    return true
}

console.log(connectedComponentsCount(graph3))