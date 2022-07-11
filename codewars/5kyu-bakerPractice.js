function cakes(recipe, available) {
    let arr = Object.keys(recipe).map(x => (Math.floor(available[x]/recipe[x])||0))
    return Math.min(...arr)
  }