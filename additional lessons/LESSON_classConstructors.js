// FYI putting a function inside the constructor creates an new function for each object, so if you want to save space put them outside

// const a = new Something() 
// when you do new it's called object instantiation and it creates an empty this {} object and assigns the parameters to this

class Car {
    constructor (price, secret) {
        this._price = price
        this.secret = secret
        let dude = price
    }
    #Something = 100 // this is a secret variable

    #op() { // this is a secret function
        return this._price * this.#Something
    }

    test() {
        console.log(dude)
    }

    show() {
        return this.#op(this.#Something)
    }

    set something(num) { // this allows the change of the secret variable #Something
        return this.#Something = num
    }

    get price() { // instead of calling test._price you can know do test.price to get the price
        return this._price
    }
}

let test = new Car(100, 'secret')
// console.log(test.show())
// test.something = 2
// console.log(test.show())
// console.log(test.secret)

Car.prototype.doSomething = function() { console.log('first') }

console.log(test.test())