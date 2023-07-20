// const arr = [-5, 2, 4, 6, 10]


const binarySearchRec = (arr, target) => {
    const left = 0
    const right = arr.length - 1
    return search(arr, target, left, right)
}

const search = (arr, target, left, right) => {
    if (left > right) { return -1 }
    
    const midpoint = Math.floor((right + left) / 2)
    
    if (arr[midpoint] === target) { return midpoint }
    if (arr[midpoint] > target) { return search(arr, target, left, midpoint - 1)}
    if (arr[midpoint] <= target) { return search(arr, target, midpoint + 1, right)}
}


const binarySearch = (arr, target) => {
    let left = 0
    let right = arr.length - 1
    
    while(left <= right) {
        const mid = Math.floor((right + left) / 2)
        
        if (arr[mid] === target) { return mid }
        if (arr[mid] > target) { right = mid - 1 }
        if (arr[mid] <= target) { left = mid + 1 }
    }

    return -1
}

const arr = [8, 20, -2, 4, -6]

const bubbleSort = (arr) => {
    let sorted;

    while (sorted != false) {
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


const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let num = arr[i]
        let j = i - 1
        while (num < arr[j] && j > -1) {
            arr[j + 1] = arr[j]
            j -= 1
        }
        arr[j + 1] = num
    }

    return arr
}



const mergeSort = (arr) => {
    if (arr.length < 2) { return arr }

    const mid = Math.floor(arr.length / 2) // think about why you can't do length - 1 here
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}
// const arr = [8, 20, -2, 4, -6]
const merge = (left, right) => {
    const sortedArr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) { sortedArr.push(left.shift()) }
        else { sortedArr.push(right.shift()) }
    }

    return [...sortedArr, ...left, ...right]
}


const quickSort = (arr) => {
    if (arr.length < 2) { return arr }
    const pivot = arr[arr.length - 1]
    const left = []
    const right = []

    for (let i of arr) {
        if (i > pivot) { right.push(i) }
        else if (i < pivot) { left.push(i) }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(arr))