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

console.log(connectedComponents(graph3))