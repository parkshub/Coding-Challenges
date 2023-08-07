var countNodes = function(root) {
    if (root === null) { return 0 }
    const arr = []
    const stack = [ root ]

    while (stack.length) {
        const current = stack.pop()
        arr.push(current)
        if (current.left) { stack.push(current.left) }
        if (current.right) { stack.push(current.right) }
    }

    return arr.length
};