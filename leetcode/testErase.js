
// const arr = [-5, 2, 4, 6, 10]

function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        const midpoint = Math.floor((left + right) / 2)

        if (arr[midpoint] === target) { return midpoint }
        if (arr[midpoint] > target) { right = midpoint - 1 }
        if (arr[midpoint] < target) { left = midpoint + 1 }
    }

    return -1
}

function binarySearchRec(arr, target) {
    const left = 0
    const right = arr.length - 1

    return helper(arr, target, left, right)

    function helper(arr, target, left, right) {
        const mid = Math.floor((left + right) / 2)

        if (arr[mid] === target) { return mid }
        if (arr[mid] > target) { return helper(arr, target, left, mid - 1)}
        if (arr[mid] < target) { return helper(arr, target, mid + 1, right)}

        return -1
    }
}


const arr = [8, 20, -2, 4, -6]

function bubbleSort(arr) {
    let sorted;

    while (sorted !== false) {
        sorted = false
        for (let i = 0; i < arr.length; i++) {
            const j = i + 1
            if (arr[i] > arr[j]) {
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
                sorted = true
            }
        }
    }

    return arr
}

// const arr = [8, 20, -2, 4, -6]

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        let num = arr[i]
        while (num < arr[j] && j >= 0) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = num
    }

    return arr
}


function mergeSort(arr) {
    if (arr.length < 2) { return arr }

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let sortedArr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) { sortedArr.push(left.shift()) }
        if (left[0] > right[0]) { sortedArr.push(right.shift()) }
    }

    return [...sortedArr, ...left, ...right]
}


function quickSort(arr) {
    if (arr.length < 2) { return arr }
    
    const pivot = arr[arr.length - 1]

    const left = []
    const right = []

    for (let i of arr) {
        if (i < pivot) { left.push(i) }
        if (i > pivot) { right.push(i) }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(arr))