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

        if (!bucket) { return }
        if (bucket.length <= 1) { bucket = undefined }
        
        let entry = bucket.find(item => item[0] === key)
        if (entry) {
            entry = undefined
        }
        return
    }

    display() {

    }
}

const hash = new Hash(20)

hash.set('name', 'Andrew')

hash.set('mane', 'Andrew')

// console.log(hash.table)

hash.set('name', 'andy')
hash.delete('name')
console.log(hash.table)
