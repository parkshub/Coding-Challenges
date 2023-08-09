var binaryTreePaths = function(root) {
    if (root === null) { return [] }
    let paths = []

    helper(root, '')

    return paths

    function helper(node, path) {
        // okay whats the different the two if statements
        if (node === null) { return }
        if (!node.left && !node.right) { 
            paths.push(path + node.val)
        }
        path = path + node.val + '->'
        helper(node.left, path)
        helper(node.right, path)
    }    
};