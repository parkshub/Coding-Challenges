function bouncingBall(h,  bounce,  window) {
  
    if(h <= 0 || window >= h || bounce <= 0 || bounce >= 1) {
      return -1
    }
    
    let x = h
    let count = 1
    
    while (x >= window) {
      x *= bounce
      x>window? count+=2: count+=0
    }
    
    return count
  }