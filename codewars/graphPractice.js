const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
  }
  
// a ---> c
// |      |
// v      v
// b      e
// |
// v
// d ---> f

// try breadth first and depth first
// and try recursive function (breadth first wont work)
// breadth is queue and depth is stack
// breadth: acbedf
// depth: abdfce

// breadth first

  const breadthFirst = (source, graph) => {
    const queue = [ source ]
  
    while (queue.length > 0) {
      const current = queue.shift()
      console.log(current)
      
      for (let neighbor of graph[current]) {
        queue.push(neighbor)
      }
    }
  }
  
  const depthFirst = (source, graph) => {
    const stack = [ source ]
  
    while (stack.length > 0) {
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

// acyclic = no cycles, meaning you can't get to the node you started from
// we also need a source node and a destination node

// f -- g -- h
// |  /
// i -- j
// |
// k
  
  
  const graph2 = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g','k'],
    j: ['i'],
    k: []
  }
  
  
  const hasPathDepthRec = (graph, src, dst) => {
    if (src === dst) { return true }
  
    for (let neighbor of graph[src]) {
      if (hasPathDepth(graph, neighbor, dst) === true) { return true }
    }
  
    return false
  }
  
  
  const hasPathDepth = (graph, src, dst) => {
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
  
  const hasPathBreadth = (graph, src, dst) => {
    // can't do recursive
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
  
  
// undirected graph
// if given just edges, convert into adjacency list

// try with edge below to determine if there is a path form a to b, for this problem, you only need to visit a node once to and record that it's been visited with a set
// need two helper functions 1) convert into adjacency list 2) check if a path exists
// use recursion

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
    !graph[a] ? graph[a] = [b] : graph[a].push(b)
    !graph[b] ? graph[b] = [a] : graph[b].push(a)
  }

  return graph
}

console.log(buildGraph(edges))

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) { return true }
  if (visited.has(src)) { return false }

  visited.add(src)

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true
    }
  }

  return false;
}

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  return hasPath(graph, nodeA, nodeB, new Set())
}


// Iterative solution if all nodes where numericals
// probably works even if lettered nodes

// var validPath = function(n, edges, start, end) {
//   const graph = new Map()
//   // create our adjacency list
//   edges.forEach(([a,b]) => {
//       if (!graph.has(a)) {
//           graph.set(a, [])
//       }
//       if (!graph.has(b)) {
//           graph.set(b, [])
//       }
//       graph.get(a).push(b)
//       graph.get(b).push(a)
//   })
//   // prevent revisiting nodes
//   const visited = new Array(n)
//   const queue = [start]
//   while (queue.length > 0) {
//       const node = queue.shift() // this is an O(n) operation here. if we used a real queue the dequeue method would be O(1)
//       if (node === end) {
//           return true
//       }
//       visited[node] = true
//       graph.get(node).forEach((neighbor) => {
//           if (!visited[neighbor]) {
//               queue.push(neighbor)
//           }
//       })
//   }
//   return false
// };


// try with edges below to solve connected components count


const graph3 = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}

// How many connections?

const connectedComponentsCount = (graph) => {
  const visited = new Set()
  let count = 0

  for (let node in graph) {
    console.log(visited)
    if (explore(graph, node, visited) === true) {
      count +=1
    }
  }

  return count
}

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;

  visited.add(String(current))

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited) // this function returning false does not output a false for explore
  }

  return true
}

console.log(connectedComponentsCount(graph3))