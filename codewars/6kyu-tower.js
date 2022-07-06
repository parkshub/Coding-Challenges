function towerBuilder(nFloors) {
    let answer = []
    const spaceNeeded = nFloors * 2 - 1
    for (let i=0; i<nFloors; i++) {
        let spacesRepeat = (spaceNeeded - (i*2+1))/2
        let space = ' '.repeat(spacesRepeat)
        let ast = '*'.repeat(i*2+1)
        let element = space + ast + space
        answer.push(element)
    }
    return answer
  }