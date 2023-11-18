[0, 1, 2, 3, 4, 5, 6, 7]

1, 3, 4 // 

2, 5, 6 // parent math ceil indx/2 - 1

// times 2 plus 1 left
// times 2 plus 2 right



class MaxHeap {
    constructor() {
        this.data = []
    }

    getPI(index) {
        return Math.ceil(index / 2) - 1
    }

    getLC(index) {
        return index * 2 + 1
    }

    getRC(index) {
        return index * 2 + 2
    }

    insert(val) {
        this.data.push(val)
        this.siftUp(this.data.length - 1)
    }

    swap(index1, index2) {
        console.log('swapping index1 and index2', index1, index2)
        let temp = this.data[index1]
        this.data[index1] = this.data[index2]
        this.data[index2] = temp
    }

    siftUp(ci) {

        if (this.data.length === 1) { return }
        
        let condition = true

        while (condition) {
            let pi = this.getPI(ci)
            let pv = this.data[pi]
            let cv = this.data[ci]

            // console.log(`this is pi ${pi} and this is ci ${ci}`)

            
            if (cv <= pv || ci === 0) {
                condition = false
                continue
            }

            this.swap(pi, ci)

            ci = pi
        }
    }

    delete() {
        this.data.pop()
        this.siftUp(this.data.length - 1)
    }
}


// function test(arr, i1, i2) {

// }

// let a = [1,2,3,4,5,6]

let test = new MaxHeap()

test.insert(8)
test.insert(9)
test.insert(10)
test.insert(11)
test.insert(8)
test.insert(13)

console.log(test.data)

test.delete()
test.delete()
test.delete()

console.log(test.data)