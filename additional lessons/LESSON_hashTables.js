// big O
// time: O(n)

// with hash tables collisions are minimal and can greatly reduce the time with better hashing functions so generally we consider not the worst case scenario, but the average case scenario
// time O(1)


class HashTable { // THIS HASHTABLE HAS COLLISIONS FOR EXAMPLE NAME AND MANE HAS SAME HASH VALUE SO IT'LL OVERRIDE 
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
        this.table[index] = value
    }

    get(key) {
        const index = this.hash(key)
        return this.table[index]
    }

    remove(key) {
        const index = this.hash(key)
        this.table[index] = undefined
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }

    }
}


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



class TestHash {
    constructor(size) {
        this.size = size
        this.table = new Array(size)
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key[i].charCodeAt()
        }
        // console.log('this is hash total:', total)
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        console.log(this.table[index])
        const bucket = this.table[index]

        if (!bucket) {
            this.table[ index ] = [ [ key, value ] ]
        }
        else {
            const sameKeyItem = bucket.find(item => item[0] === key)

            if (sameKeyItem) {
                sameKeyItem[1] = value
            }

            else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.table[index]

        if (bucket) {
            const sameKeyItem = bucket.find(item => item[ 0 ] === key)

            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }

        return undefined
    }

    remove(key) {
        const index = this.hash(key)
        const bucket = this.table[ index ]

        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)

            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}