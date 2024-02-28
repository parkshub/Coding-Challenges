// is a poor algorithm and only used for interviews
// given an array sort the array asc or desc

// summary: iterate through the whole array comparing adjacent arrays, if two elements are in wrong order swap them, if there has been a swap when iterating, iterate through whole array agian. Repeat until there's no swapping 
// big O
// time: O(n^2)
// space: O(1)

const arr = [8, 20, -2, 4, -6]

const bubbleSort = (arr) => {
    let swapped;
    while(swapped !== false) {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    }
    return arr
}

const bubbleSortTest = (arr) => {
    let sorted;
    while (sorted !== false) {
        sorted = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) { 
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                sorted = true
            }
        }
    }

    return arr
}

console.log(bubbleSortTest(arr))