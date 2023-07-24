const p = console.log

const talkingPerson = {
    talk() {
        p(`my name is ${this.name}`)
    }
}

const personMaker2 = (name) => {
    return Object.create(talkingPerson, {
        name: {
            value: name
        }
    })
}

// const person2 = personMaker2('dude')
// p(person2.talk())




// // const personMaker = (name, height) => {
// //     return {
// //         name,
// //         height,
// //         talk() {
// //             console.log(`my name is ${name}`)
// //         }
// //     }
// // }

// // const person1 = personMaker('dude')
// // person1.talk()

// // creating objects with factory functions the normal way

// const createPerson = function(name) {
//     return {
//         name,
//         talk() {
//             p(`my name is ${name}`)
//         }
//     }
// }

// const person = createPerson('dude')

// function addFunction() {
//     p(`ey, im walking here. im ${this.name}`)
// }

// person.walk = addFunction

// p(person.walk())


// CAN I DO IT WITH ARROW FUNCTION
// LASTLY TRY USING THIS
// THEN DO CLASSES

// function personCreator(name, gender) {
//     this.name = name
//     this.gender = gender
//     this.talk = function() {
//         return `hi im ${name}`
//     }
// }

// const person = new personCreator('dude', 'male')

// personCreator.prototype.walk = function() {
//     return `eyy, im walking here ${this.name}`
// }

// p(person.walk())

class PersonCreator {
    constructor(name, gender, set = []) {
        this._name = name,
        this.gender = gender
        this.set = set
    }

    #secretVar = 'this is a secret'

    get name() {
        return this._name
    }

    set set(val) {
        this.set = this.set
    }


    talk() {
        return `my name is ${this.name}`
    }
}

const person = new PersonCreator('dude', 'male', 'set')
// p(person.set)
// person._name = 'something else'

p(person)