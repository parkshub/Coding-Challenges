function flatten() {

    let args = [...arguments]
  
    return args.reduce((prev, curr) => {
        if (Array.isArray(curr)) {
            return prev.concat(flatten(...curr))
        }
        return prev.concat(curr)
    }, [])
  }