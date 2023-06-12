const graph = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}

const largest = (graph) => {
    const visited = new Set()

    let largest = 0

    for (let node in graph) {
        let size = explore(node, graph, visited)
        if (size > largest) { largest = size }
    }

    return largest
}

const explore = (src, graph, visited) => {
    if (visited.has(src)) { return 0 }

    visited.add(src)

    let size = 1

    for (let neighbor of graph[src]) {
        size += explore(neighbor, graph, visited)
    }

    return size
}

console.log(largest(graph))