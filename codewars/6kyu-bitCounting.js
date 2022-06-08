// BitCounting
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {

    let binary = []

    function divide(num) {
        let val = Math.floor(num/2)
        remainder = num%2? 1: 0
        binary.push(remainder)
        if (val==0){
            return binary
        }
        else {
            divide(val)
        }
    }
    divide(n, 0)

    return binary.reduce(function(initial, current){
        return initial + current
    }, 0)
}