function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq)
    if (Math.ceil(sqrt) === sqrt) {
      return (sqrt+1)**2
    }
    return -1;
  }