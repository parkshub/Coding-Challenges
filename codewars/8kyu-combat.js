function combat(health, damage) {
    let res = health - damage
    if (res < 0) return 0
    return res
  }