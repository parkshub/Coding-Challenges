import bcryptjs from "bcryptjs"

// main functions of hash
// hash, set, get, remove, display

// remember the issue was that when two vars have a similar key, you compare the keys and see that if it is the same string, then you replace, but if it's not, you push an array with the key and value

class Hash {
    constructor(size) {
        this.size = size
        this.table = new Array(size)
    }

    hash(key) {
        let total = 0

        for (let i = 0; i < key.length; i++) {
            total += key[i].charCodeAt()
        }

        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        let bucket = this.table[ index ]

        if (!bucket) {
            this.table[ index ] = [ [ key, value ] ]
            return
        }

        let entry = bucket.find(item => item[ 0 ] === key)

        if (entry) {
            entry[ 1 ] = value
            return
        }

        bucket.push([ key, value ])
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.table[index]

        if (!bucket) { return undefined }
        if (bucket.length <= 1) { return this.table[index] }
        
        const entry = bucket.find(item => item[0] === key)

        if (entry) { return entry[1] }

        return undefined
    }

    delete(key) {
        const index = this.hash(key)
        let bucket = this.table[index]
        console.log(bucket)

        // if (!bucket) { return }

        // if (bucket.length <= 1) { 
            // this.table.splice(this.table.indexOf(bucket), 1)
            // bucket = undefined
            // return
        // }

        if (bucket) {        
            let entry = bucket.find(item => item[ 0 ] === key)
            if (entry) {
                bucket.splice(bucket.indexOf(entry), 1)
            }
        }
    }

    display() {

    }
}

class MaxHeap {
    constructor() {
        this.data = []
    }

    getParent(currentIndex) {
        const parentIndex = Math.floor((currentIndex - 1) / 2)
        const parentValue = this.data[parentIndex]
        return [parentIndex, parentValue]
    }

    getLeftChild(currentIndex) {
        const leftChildIndex = currentIndex * 2 + 1
        const leftChildValue = this.data[leftChildIndex]
        return [leftChildIndex, leftChildValue]
    }

    getRightChild(currentIndex) {
        const rightChildIndex = currentIndex * 2 + 2
        const rightChildValue = this.data[rightChildIndex]
        return [rightChildIndex, rightChildValue]
    }

    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]]
        console.log(`this is what happened after the swap ${this.data}`)
    }

    insert(value) {
        this.data.push(value)
        this.siftUp(this.data.length - 1)
    }

    siftUp(currentIndex) {
        let currentValue = this.data[currentIndex]
        let parent = this.getParent(currentIndex)

        console.log(parent)

        while(parent[1] !== undefined && currentValue > parent[1]) {
            console.log('i ran')
            this.swap(currentIndex, parent[0])
            currentIndex = parent[0]
            parent = this.getParent(currentIndex) // the issue was that i put let in front of this
        }
    }

    pull() {
        if (this.data.length < 2) { return }
        
        let lastIndex = this.data.length - 1
        this.swap(lastIndex, 0)
        this.data.pop()
        console.log('this is what happened before siftdown', this.data)
        this.siftDown(0)
    }

    siftDown(currentIndex) {
        let currentValue = this.data[currentIndex]
        
        let leftChild = this.getLeftChild(currentIndex)
        let righChild = this.getRightChild(currentIndex)

        while (currentValue < leftChild[1] || currentValue < righChild[1]) {
            if (leftChild[1] >= righChild[1]) { 
                this.swap(currentIndex, leftChild[0])
                currentIndex = leftChild[0]
                leftChild = this.getLeftChild(currentIndex)
                righChild = this.getRightChild(currentIndex)
            } else {
                this.swap(currentIndex, righChild[0])
                currentIndex = righChild[0]
                leftChild = this.getLeftChild(currentIndex)
                righChild = this.getRightChild(currentIndex)
            }
        }


    }

    update(currentIndex, newValue) {
        this.data[currentIndex] = newValue

        let parent = this.getParent(currentIndex)

        if (newValue > parent[1]) {
            this.siftUp(currentIndex)
        } else {
            this.siftDown(currentIndex)
        }
    }
    // get parent, get child left and right, sift up, sift down
    // insert, get max, extract max or delete, update
    // when inserting you always add it to the end and then reorder the tree
    // when you delete, you always delete the top and reorder the tree
}

const heap = new MaxHeap()
heap.insert(5)
heap.insert(100)
heap.insert(50)
heap.insert(60)
heap.insert(1000)
console.log('here i pull')

console.log(heap.data)

heap.update(1, 2)

console.log(heap.data)