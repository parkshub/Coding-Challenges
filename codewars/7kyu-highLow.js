// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  let split = numbers.split(' ')
  return `${Math.max(...split)} ${Math.min(...split)}`
}