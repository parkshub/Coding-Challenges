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
    


}