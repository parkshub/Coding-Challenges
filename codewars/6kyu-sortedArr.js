function sortArray(array) {
    let sortedArr = array.filter(x => x%2 != 0).sort((a,b) => b-a)
  
    for (let i = 0; i<array.length; i++) {
        if (array[i]%2!=0) array[i] = sortedArr.pop();
    }
    return array
  }