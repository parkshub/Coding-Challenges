function digital_root(n){
    let add = 0
    let new_n = String(n).split('')
    
    new_n.map(x=>{add+=Number(x)})

    if (add>=10){
        return digital_root(add)
    } else {
        return add
    }
}