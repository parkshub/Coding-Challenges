
// big O
// time: O(n^2)
// space: O(logn)
//

const arr = [8, 20, -2, 4, -6]

const quickSort = (arr) => {
    if (arr.length < 2) { return arr }

    const pivot = arr[arr.length - 1]
    const left = []
    const right = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) { right.push(arr[i]) }
        if (arr[i] <= pivot) { left.push(arr[i]) }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

const quickSortTest = (arr) => {
    if (arr.length < 2) { return arr }
    let pivot = arr.pop()
    let left = []
    let right = []

    while(arr.length !== 0) {
        // console.log(arr)
        if (arr[0] > pivot) { right.push(arr.shift()) }
        if (arr[0] <= pivot) { left.push(arr.shift()) }
        // console.log(left, right)
    }

    return [...quickSortTest(left), pivot, ...quickSortTest(right)]
}

console.log(quickSortTest(arr))