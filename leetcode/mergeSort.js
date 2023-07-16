// summary: run a recursive function to split the arrays into single element arrays once that's done recursively run a merge function that sorts the individual left and right arrays
//

// big O
// time: O(n logn)
// space: O(n)
//

const arr = [8, 20, -2, 4, -6]

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }

    const mid = Math.floor((arr.length) / 2) // this part is very important doing length - 1 will create an endless loop when the given array is length of 2 since left will be empty and right will still contain both elements
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    console.log(arr, left, right)

    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    let sortedArr = []

    while(left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }

    return [...sortedArr, ...left, ...right]
}

const mergeSortTest = (arr) => {
    if (arr.length < 2) { return arr }
    
    const midpoint = Math.floor(arr.length / 2)
    const left = arr.slice(0, midpoint)
    const right = arr.slice(midpoint)

    return merge(mergeSortTest(left), mergeSortTest(right))
}

const mergeTest = (left, right) => {
    const sortedArr = []
    
    while (left.length && right.length) {
        if (left[ 0 ] < right[ 0 ]) { sortedArr.push(left.shift()) }
        if (left[ 0 ] >= right[ 0 ]) { sortedArr.push(right.shift()) }
    }

    return [...sortedArr, ...left, ...right]
}

console.log(mergeSortTest(arr))