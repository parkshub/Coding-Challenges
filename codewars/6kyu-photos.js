function countPhotos(road){
    
    let cam = 0
    let res = 0
    let right = 0
  
    for (let i = 0; i<road.length; i++) {
        if (road[i] === '.') {
            res += right          
            cam += 1
        }
        else if (road[i] === '<') {
            res += cam
        }
  
        else if (road[i] === '>') {
            right += 1
        }
    }
    return res
  }