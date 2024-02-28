// summary: you get an unsorted list and you must sort it in Descending order (but can also do ascending order). Do a for loop for the length of the array starting from i=1. Initialize checking number to arr[i] (starts from 1). Initialize j as i - 1. Check to see that arr[i] is less than arr[j] and check to see that j is not less than 0. As long as these conditions fit, continue moving j to position j + 1. If the condition no longer fits for arr[i] < arr[j], it means that arr[i] is greater than arr[j] and therefore belongs in arr[j + 1] --> arr[j + 1] = arr[i]. If the condition j is not less than 0 doesn't fit anymore, it means that the current value is lesser than all the values before it and therefore belongs on arr[0], which is arr[j + 1]. The value that was there before should have already moved up, so replacing it is okay.

// big O
// O(n^2)
// O(1)
let arr = [8, 20, -2, 4, -6]

function insertionSort(arr)  {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        let num = arr[i]
        while(num < arr[j] && j >= 0) {
            arr[j + 1] = arr[j]
            j -= 1
        }
        arr[j + 1] = num
    }

    return arr
}

function insertionSortTest(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        let num = arr[i]

        while(num <= arr[j] && j >=0) {
            arr[j + 1] = arr[j]
            j -= 1
        }
        arr[j + 1] = num
    }

    return arr
}