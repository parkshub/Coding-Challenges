// big O
// time: O(n)

// with hash tables collisions are minimal and can greatly reduce the time with better hashing functions so generally we consider not the worst case scenario, but the average case scenario
// time O(1)

// question you should know - what is hash table collision

class BetterHashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if (!bucket) { // if there is no value
            this.table[ index ] = [ [ key, value ] ]
        }
        else {
            const sameKeyItem = bucket.find(item => item[ 0 ] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            }
            else {
                bucket.push([ key, value ])
            }
        }
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.table[index]

        if (bucket) { // if bucket exists
            const sameKeyItem = bucket.find(item => item[ 0 ] === key)
            // the above seems counterintuitive since the whole reason for hashing is faster look and insert time, but since we're only iterating over the buckets it should be faster than a normal array
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key) {
        const index = this.hash(key)
        const bucket = this.table[index]

        if (bucket) {
            const sameKeyItem = bucket.find(item => item[ 0 ] === key)
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[ i   ]) {
                console.log(i, this.table[i])
            }
        }

    }
}



