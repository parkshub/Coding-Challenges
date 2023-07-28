// cool new destructuring trick
function change(arr) {
    [arr[1], arr[0]] = [arr[0], arr[1]]
    return arr
}

const arr = [1, 2]
const changedArr = change(arr)
// TIP: you have to pass the arr inside a function simple delcaring a an array and trying to do this will result in 'cannot access arr before initialization' or something along those lines

// I THINK MY METHOD IS BETTER AND ALSO HAS UPDATE CHECK BELOW
class Heap {
    constructor () {
        this.data = []
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return i * 2 + 1
    }

    getRightChildIndex(i) {
        return i * 2 + 2
    }

    swap(i1, i2) {
        const temp = this.data[i1]
        this.data[i1] = this.data[i2]
        this.data[i2] = temp
    }

    push(key) {
        // this.data[this.data.length] = key
        this.data.push(key)
        // here he is pushing the point to the end thats why is length not length - 1
        this.heapifyUp()
    }

    heapifyUp() { //sift up
        let currentIndex = this.data.length - 1

        while (this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex))

            currentIndex = this.getParentIndex(currentIndex)
        }
    }

    pull() {
        const maxValue = this.data[0]
        this.data[0] = this.data[this.data.length - 1]
        this.data.length-- // this removese the last element
        this.heapifyDown()

        return maxValue
    }

    heapifyDown() { //sift down
        let currentIndex = 0
        
        while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined) {// if we dont have a left child it means we by default dont have a right child, since it's a complete tree 
            let biggestChildIndex = this.getLeftChildIndex(currentIndex)

            if (this.data[this.getRightChildIndex(currentIndex)] && this.data[this.getRightChildIndex(currentIndex)] > this.data[this.getLeftChildIndex(currentIndex)]) {
                biggestChildIndex = this.getRightChildIndex(currentIndex)
            }

            if (this.data[currentIndex] < this.data[biggestChildIndex]) {
                this.swap(currentIndex, biggestChildIndex)
                currentIndex = biggestChildIndex
            } else {
                return
            }
        }
    }
}

// I THINK MY METHOD IS BETTER AND ALSO HAS UPDATE
class MaxHeap {
    constructor() {
        this.data = []
    }

    getParentIndex(currentIndex) {
        return Math.floor((currentIndex - 1) / 2)
    }

    getLeftChildIndex(currentIndex) {
        return currentIndex * 2 + 1
    }

    getRightChildIndex(currentIndex) {
        return currentIndex * 2 + 2
    }

    swap(index1, index2) {
        const temp = this.data[index1]
        this.data[index1] = this.data[index2]
        this.data[index2] = temp
    }

    push(value) {
        this.data.push(value)
        this.siftUp(this.data.length - 1)
    }

    siftUp(currentIndex) {
        let currentValue = this.data[currentIndex]
        
        let parentIndex = this.getParentIndex(currentIndex)
        let parentValue = this.data[parentIndex]

        while(currentValue > parentValue) {
            this.swap(currentIndex, parentIndex)

            currentIndex = parentIndex
            parentIndex = this.getParentIndex(currentIndex)

            currentValue = this.data[currentIndex]
            parentValue = this.data[parentIndex]
        }
    }

    delete() {
        this.swap(0, this.data.length - 1)
        this.data.pop()
        this.siftDown(0)
    }

    siftDown(currentIndex) {
        let currentValue = this.data[currentIndex]
        
        let leftChildIndex = this.getLeftChildIndex(currentIndex)
        let leftChildValue = this.data[leftChildIndex]

        let rightChildIndex = this.getRightChildIndex(currentIndex)
        let rightChildValue = this.data[rightChildIndex]

        while (leftChildValue > currentValue || rightChildValue > currentValue) {

            if (leftChildValue >= rightChildValue) {
                this.swap(leftChildIndex, currentIndex)
                
                currentIndex = leftChildIndex
                
                leftChildIndex = this.getLeftChildIndex(currentIndex)
                leftChildValue = this.data[leftChildIndex]

                rightChildIndex = this.getRightChildIndex(currentIndex)
                rightChildValue = this.data[rightChildIndex]
            } 
            
            else {
                this.swap(rightChildIndex, currentIndex)

                currentIndex = rightChildIndex

                leftChildIndex = this.getLeftChildIndex(currentIndex)
                leftChildValue = this.data[leftChildIndex]

                rightChildIndex = this.getRightChildIndex(currentIndex)
                rightChildValue = this.data[rightChildIndex]
            }
        }
        
    }

    update(currentIndex, newValue) {
        this.data[currentIndex] = newValue
        
        let parentIndex = this.getParentIndex(currentIndex)
        let parentValue = this.data[parentIndex]

        let leftChildIndex = this.getLeftChildIndex(currentIndex)
        let leftChildValue = this.data[leftChildIndex]
        
        let rightChildIndex = this.getLeftChildIndex(currentIndex)
        let rightChildValue = this.data[rightChildIndex]

        if (newValue > parentValue) {
            this.siftUp(currentIndex)
        }
        else if (newValue < leftChildValue || newValue < rightChildValue) {
            this.siftDown(currentIndex)
        }
    }
}