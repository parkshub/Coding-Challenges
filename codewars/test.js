function zero(a) {
    if (a) { return a(0) }
    return 0
}

function one(a) {
    if (a) { return a(1)}
    return 1
}


function minus(a) {
    return function(b) {
        return b - a
    }
}


console.log(zero(minus(one())))
