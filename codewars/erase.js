const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const depthFirst = (src, graph) => {
    const stack = [ src ]

    while (stack.length) {
        const current = stack.pop()
        console.log(current)

        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
}

const depthFirstRec = (src, graph) => {
    console.log(src)

    for (let neighbor of graph[src]) {
        depthFirstRec(neighbor, graph)
    }
}

const breadthFirst = (src, graph) => {
    const queue = [ src ]

    while (queue.length) {
        const current = queue.shift()
        console.log(current)

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
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

const dirHasPathDepth = (src, dst, graph) => {
    if (src === dst) { return true }
    
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

const dirHasPathDepthRec = (src, dst, graph) => {
    if (src === dst) { return true }

    for (let neighbor of graph[src]) {
        if (dirHasPathDepthRec(neighbor, dst, graph) === true) { return true }
    }

    return false
}

const dirHasPathBreadth = (src, dst, graph) => {
    if (src === dst) { return true }

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


// now do undirected graph hasPath and connectedComponents

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

const undirHasPath = (edges, nodeA, nodeB) => {
    const graph = makeGraph(edges)
    return undirPathHelper(graph, nodeA, nodeB, new Set())
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

const undirPathHelper = (graph, src, dst, visited) => {
    if (src === dst) { return true }
    if (visited.has(src)) { return false }

    visited.add(src)

    for (let neighbor of graph[src]) {
        if (undirPathHelper(graph, neighbor, dst, visited) === true) {
            return true
        }
    }

    return false
}

console.log(undirHasPath(edges, 'i', 'o'))