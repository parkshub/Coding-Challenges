const graph3 = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}

// connected components
const connectedComponents = (graph) => {
    const visited = new Set()
    let count = 0

    const helper = (graph, node, visited) => {
        if (visited.has(String(node))) { return false }
        visited.add(String(node))

        for (let neighbor of graph[node]) {
            helper(graph, neighbor, visited) === true
        }

        return true
    }

    for (let node in graph) {
        if (helper(graph, node, visited) === true) { count += 1 }
    }

    return count
}
// largest component
const largestComponent = (graph) => {
    const visited = new Set()
    let largest = -Infinity

    const explore = (graph, node, visited) => {
        if (visited.has(String(node))) { return 0 }
        visited.add(String(node))

        let size = 1

        for (let neighbor of graph[node]) {
            size += explore(graph, neighbor, visited)
        }

        return size
    }

    for (let node in graph) {
        let size = explore(graph, node, visited)
        if (size > largest) { largest = size }
    }

    return largest
}

const edges2 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['v', 'j'],
    ['j', 'k'],
    ['k', 'z'],
    ['w', 'v'],
    ['z', 'v'],
  ]

// shortest path

const shortest = (edges, src, dst) => {
    function buildGraph(edges) {
        const graph = {}

        for (let edge of edges) {
            const [ a, b ] = edge
            graph[a] ? graph[a].push(b) : graph[a] = [b]
            graph[b] ? graph[b].push(a) : graph[b] = [a]
        }

        return graph
    }

    const graph = buildGraph(edges)
    const visited = new Set([ src ])
    const queue = [ [ src, 0 ] ]
    
    while(queue.length) {
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


console.log(shortest(edges2, 'w', 'z'))

// number of islands

// smallest island