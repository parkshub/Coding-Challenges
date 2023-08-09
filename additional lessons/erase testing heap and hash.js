class MaxHeap {
    constructor() {
        this.data = []
    }

    getParent(index) {
        return Math.floor((index - 1) / 2)
    }

    getLeftChild(index) {
        return index * 2 + 1
    }

    getRightchild(index) {
        return index * 2 + 2
    }

    insert(value) {
        this.data.push(value)
        this.siftUp(this.data.length - 1)
    }

    swap(index1, index2) {
        let temp = this.data[ index1 ]
        this.data[ index1 ] = this.data[ index2 ]
        this.data[ index2 ] = temp
    }

    siftUp(currentIndex) {
        const currentValue = this.data[currentIndex]
        let parentIndex = this.getParent(currentIndex)
        let parentValue = this.data[parentIndex]

        while (currentValue > parentValue) {
            this.swap(currentIndex, parentIndex)
            currentIndex = parentIndex
            parentIndex = this.getParent(currentIndex)
            parentValue = this.data[parentIndex]
        }
    }

    delete() {
        this.swap(0, this.data.length - 1)
        this.data.pop()
        this.siftDown(0)
    }

    siftDown(currentIndex) {
        const currentValue = this.data[currentIndex]
        
        let leftChildIndex = this.getLeftChild(currentIndex)
        let leftChildValue = this.data[leftChildIndex]

        let rightChildIndex = this.getRightchild(currentIndex)
        let rightChildValue = this.data[rightChildIndex]

        while (currentValue < leftChildValue || currentValue < rightChildValue) {
            if (currentValue < leftChildValue) {
                this.swap(currentIndex, leftChildIndex)
                currentIndex = leftChildIndex
            } else {
                this.swap(currentIndex, rightChildIndex)
                currentIndex = rightChildIndex
            }
            
            leftChildIndex = this.getLeftChild(currentIndex)
            leftChildValue = this.data[leftChildIndex]
    
            rightChildIndex = this.getRightchild(currentIndex)
            rightChildValue = this.data[rightChildIndex]
        }
    }
}

const table = new MaxHeap()

table.insert(3)
table.insert(10)
table.insert(1)
table.insert(100)
table.delete()