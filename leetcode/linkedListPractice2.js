class Node {
    constructor (value) {
        this.val = value
        this.next = null
    }
}

class LinkedList {
    constructor () {
        this.head = null
        this.size = 0 
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        
        node.next = this.head
        this.head = node

        this.size ++

        return this.head
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty')
        } else {
            this.traverse(this.head)
        }
    }

    traverse(head) {
        if (head === null) { return }
        console.log(head.val)
        this.traverse(head.next)

        // let current = this.head

        // while (current !== null) {
        //     console.log(current.val)
        //     current = current.next
        // }
    }

    append(value) {
        const node = new Node(value)

        if (this.isEmpty()) {
            this.head = node
            this.size++ 
            return this.head
        }

        let current = this.head

        while (current.next !== null) {
            current = current.next
        }

        this.size ++
        current.next = node

        return this.head
    }

    insert(value, index) {

        if (index > this.size) { return 'cannot'}

        const node = new Node(value)
        let current = this.head
        let currentIndex = 0

        while (current !== null && currentIndex < this.size) {

            if (currentIndex+1 == index) {

                console.log(currentIndex)
                console.log(this.head)

                const next = current.next
                node.next = next
                current.next = node
                this.size ++ 
                return
            }

            current = current.next
            console.log(current)
            currentIndex += 1
        }

    }
}

const list = new LinkedList()
// console.log('list is empty', list.isEmpty())
// console.log('list size', list.getSize())

list.prepend(10)
list.prepend(20)
list.prepend(30)

list.append(50)
// list.print()

list.insert(100, 1)

console.log(JSON.stringify(list.head))