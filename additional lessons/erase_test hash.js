class Hash {
    constructor(size) {
        this.size = size
        this.table = new Array(size)
    }

    hash(key) {
        let res = 0
        key = String(key)
        for (let i = 0; i < key.length; i++) {
            res += key.charCodeAt(i)
        }
        return res % this.size
    }

    insert(key, value) {
        let hashed = this.hash(key)
        let bucket = this.table[hashed]

        if (bucket == undefined) {
            this.table[ hashed ] = [ [ key, value ] ]
            return
        }

        let filtered_bucket = bucket.filter(x => x[ 0 ] == key)
        
        if (filtered_bucket.length !== 0) {
            filtered_bucket[ 0 ][ 1 ] = value
            return
        }

        bucket.push([ key, value ])
    }

    get(key) {
        let hashed = this.hash(key)
        let bucket = this.table[hashed]

        if (bucket.length == 0) {
            return undefined
        }

        if (bucket.length == 1) {
            return bucket[0][1]
        }

        let filtered_bucket = bucket.filter(x => x[ 0 ] == key)
        return filtered_bucket[0][1]
    }

    remove(key) {
        let hashed = this.hash(key)
        let bucket = this.table[hashed]

        if (bucket.length === 0) {
            return 'no no'
        }

        if (bucket.length === 1) {
            bucket.pop()
            return
        }

        let idx = bucket.findIndex(x => x[0] == key)


        this.table[hashed] = bucket.filter(x => x[0] !== key)

        // bucket.splice(idx, 1)
        // this.table[hashed] = bucket.slice(0,idx) + bucket.slice(idx + 1)
        // this.table[hashed] = bucket
    }
}

let test = new Hash(20)

test.insert('asdsa', 123)
test.insert('asdas', 99)
test.insert('adsas', 73)

test.remove('asdsa')
console.log('this is result', test.table)