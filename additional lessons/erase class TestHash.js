class Hash {
    constructor(size) {
        this.data = new Array(size)
        this.size = size
    }

    hash(key) {
        let value = 0

        for (let i of key) {
            value += String(i).charCodeAt()
        }

        return value % this.size
    }

    insert(key, value) {
        const index = this.hash(key)
        const bucket = this.data[index]

        if (!bucket) { 
            return this.data[index] = [ [ key, value ] ]
        }

        const sameKeyItem = bucket.find(item => item[0] === key)

        return sameKeyItem
            ? sameKeyItem[1] = value
            : bucket.push([ key, value ])
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.data[index]
        
        return bucket 
            ? bucket.find(item => item[0] === key) 
            : undefined
    }

    remove(key) {
        const index = this.hash(key)
        const bucket = this.data[index]

        if (!bucket) { return }
        
        const sameKeyItem = bucket.find(item => item[ 0 ] === key)

        if (!sameKeyItem) { return }

        const removeIndex = bucket.indexOf(sameKeyItem)

        bucket.splice(removeIndex, 1)
    }

    display() {
        console.log(this.data)
        return this.data
    }
}

let test = new Hash(20)
test.insert('name', 'andrew')
test.insert('name', 'drew')
test.insert('mane', 'drew')

test.remove('name')
test.remove('mane')

test.insert('name', 'andrew')

test.display()