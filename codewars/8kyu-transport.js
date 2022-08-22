function rentalCarCost(d) {
    let total = 40 * d
    if (d >= 7) return total - 50;
    if (d >= 3) return total - 20;
    return total
  }