// Basic Linked List Problems

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
        // console.log(head.val)
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

                // console.log(currentIndex)
                // console.log(this.head)

                const next = current.next
                node.next = next
                current.next = node
                this.size ++ 
                return
            }

            current = current.next
            // console.log(current)
            currentIndex += 1
        }

    }
}

const list = new LinkedList()

list.prepend(30)
list.append(50)
list.insert(100, 1)


// Intersection of Two Linked Lists

// a1 - a2
                // c1 - c2 - c3
// b1 - b2 - b3

var getIntersectionNode = function(headA, headB) {
    const set = new Set()

    while (headA) {
        set.add(headA)
        headA = headA.next
    }

    while (headB) {
        if (set.has(headB)) { 
            console.log(headB)
            return headB }
        headB = headB.next
    }

    return null
};

// Floyd's Tortiuse and Hare
// if there exists a cycle or not
// the solution happens in linear time complexity

// 3 - 2 - 0 - -4 --> 2 - 0 - -4

var hasCycle = function(head) {

    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {
            return true
        }
    }

    return false
};

function maximumProfit(prices) {
    const n = prices.length;
    let profit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < n; ++i) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            profit = Math.max(profit, prices[i] - minPrice);
        }
    }

    return profit;
}