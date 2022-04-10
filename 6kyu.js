// Sum of Digits/ Digital Root
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

// Bouncing Balls
function bouncingBall(h,  bounce,  window) {
    let counter = 1
    
    if(h>0 && bounce>0 && bounce<1 && window < h){
        h*=bounce
      
        while (h>window){
            if (h==window){
                counter +=1
            } else {
                counter +=2
            }
            h*=bounce
        }
        return counter
    }
    else {
        return -1
    }
  }