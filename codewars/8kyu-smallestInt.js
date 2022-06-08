//Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.reduce((p, c) => Math.min(p, c))
    }
  }