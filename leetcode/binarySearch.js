// https://www.youtube.com/watch?v=75jGy1xAhhs&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=18

// summary: find mid point, if target is less than mid point use the left side of array, else if target is greater than mid use right side of array. Continue until you find the array or if left idx becomes greater than the right

// has to use a sorted array
// big O for both iterative and recursive
// time: O(logn)
// space: O(1)

const arr = [-5, 2, 4, 6, 10]
const binarySearch = (arr, target) => {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        // console.log(middle, arr[middle])
        

        if (arr[middle] === target) {
            return middle
        }

        if (arr[middle] > target) {
            right = middle - 1
        }
        else if (arr[middle] < target) {
            left = middle + 1
        }
    }
    return -1
}


const binarySearchRec = (arr, target) => {
    return search(arr, target, 0, arr.length - 1)
}

const search = (arr, target, left, right) => {
    if (left > right) { return -1 }

    const middle = Math.floor((left + right) / 2)
    
    if (arr[middle] === target) { return middle }
    if (arr[middle] > target) { return search(arr, target, left, middle - 1) }
    if (arr[middle] < target) { return search(arr, target, middle + 1, right) }
}