// create factory function without using object.create
// create factory function using object.create

function talk() {
    return `I am ${this.name}`
}

function walker() {
    return `I, ${this.name} is walking`
}

function flyer() {
    return {
        fly() {
            return `${this.name} is flying`
        },
        flyHigh() {
            return `${this.name} is flying high` 
        }
    }
}

function personCreator(name) {
    return {
        name: name,
        talk,
        walker,
        ...flyer()
    }
}

const person1 = personCreator('dude')

// do concatenative inheritance


const personActions = {
    talk() {
        return `${this.fn} is talking`
    },
    walk() {
        return `${this.ln} is walking` 
    }
}

const personCreator2 = (fn, ln) => {
    let person = Object.create(personActions)
    person.fn = fn
    person.ln = ln
    return person
}

const person2 = personCreator2('asdf', 'asdf')

console.log(person2.talk())





function fly() {
    return `${this.name} is flying`
}
function creator(name) {
    return {
        name,
        fly
    }
}

const monsterProto = {
    fly() {
        return `${this.name} is flying`
    },
    talk() {
        return `${this.name} is talking`
    }
}

function monsterCreator(name) {
    let monster = Object.create(monsterProto)
    monster.name = name
    return monster
}

const flying = ({name}) => {
    return {
        fly() {
            return `${name} is flying`
        },
        flyHigh() {
            return `${name} is flying high`
        }
    }
}

function monsterCreator3(name, type) {
    let monster = {name, type}
    return {
        ...monster,
        ...flying(monster)
    }
}

let test = monsterCreator3('dude21', 'awesome')