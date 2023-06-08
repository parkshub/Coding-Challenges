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

// try with edge below, for this problem, you only need to visit a node once to and record that it's been visited with a set

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

// try with edges below to solve connected components count

const edges2 = []