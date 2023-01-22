function evenOrOdd(number) {
    if (number % 2 === 0) return "Even"
    return "Odd"
  }

  function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
  };