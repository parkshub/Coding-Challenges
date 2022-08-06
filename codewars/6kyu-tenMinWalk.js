function isValidWalk(walk) {

    if (walk.length !== 10) return false;
    
    let cords = [0,0]
    
    walk.forEach(x => {
      if (x === 'n') cords[0] += 1;
      if (x === 's') cords[0] -= 1;
      if (x === 'w') cords[1] += 1;
      if (x === 'e') cords[1] -= 1;
    })
    
    if (cords[0]===0 && cords[1]===0) return true;
    return false
  }