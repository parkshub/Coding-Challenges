const p = console.log

// one method of doing object composition or concatenative inheritance

/////////////////////////////////
// METHOD 1 USING THIS.OBJECT //
/////////////////////////////////

function talk() {
    return `i am ${this.name}`
}
function fly() {
    return `${this.name} is flying`
}
function define() {
    return `this is type: ${this.type}`
}
function monsterCreator(name) {
    const monster = {name, type: 'blue'}
    return {
        ...monster,
        talk,
        fly,
        define
    }
}

/////////////////////////////////////////
// METHOD 2 WITHOUT USING THIS.OBJECT //
///////////////////////////////////////

// the difference here is that you're not adding the functions here directly, you're calling a function that makes an object with the method 
// you could also reference the variables using .this, not sure why the video didn't.
// but you can use .this because the function is inside of an object

function flyer() {
    return {
        fly() {
            p(`${this.name} is flying`)
        }
    }
}

function walker({name}) {
    return {
        walk() {
            p(`${name} is walking`)
        }
    }
}

function definer({type}) {
    return {
        define() {
            p(`type: ${type}`)
        }
    }
}

function monsterCreator2(name) {
    const monster = {name, type:'blue'}
    return {
        ...monster,
        ...flyer(),
        ...walker(monster),
        ...definer(monster)
    }
}

const test = monsterCreator2('dude')
p(test.fly())