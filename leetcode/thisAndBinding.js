function normalFunc(name) {
    // console.log(this)
    return {name}
}

const arrowFunc = () => {
    // console.log(this)
}

// binding //
function talk() {
    return `${this.name} is talking`
}
const person = {
    name: 'coolio'
}
const personTalk = talk.bind(person)
// console.log(personTalk())
//////////////

// doing the same as above but with call and apply //

function sayHi(age, isPolite) {
    if (!isPolite) {
        return `I dont care`
    }

    return `${this.name}, hello. I am ${age}`
}

const me = {
    name: 'Andrew'
}
// apply and call is the same thing, but with apply you pass in an array
// console.log(sayHi.call(me, 120, true))
// console.log(sayHi.apply(me, [120, true]))




// binding this to callback functions //
function NormalFunc(name) {
    this.name = name

    setTimeout(function() {
        // console.log(this.name)
    }.bind(this), 100)

    setTimeout(() => {
        // console.log(`arrow func -> ${this.name}`)
    }, 200)
}
const p1 = new NormalFunc('drew')
////////////////////////////////////////


// More on Arrow Functions // 
// (() => {console.log('first')})() // IIFE this doesn't work here but does in the browser

const me10 =  {
    name: 'bro',
    // doesntwork: this.name,
    // above doesn't work because objects dont bind this, only functions do, similarly, this is why arrow functions don't work with this. They both refer to the global object
    talk() {
        console.log(this.name)
    },
}


function Test(name, value) {
    this.name = name
    this.value = value
    this.arrow = () => {
        console.log(this)
    }
}

const test = new Test('asd', 1)
test.arrow()