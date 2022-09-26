p = console.log
let array = ['O','Q','R','S']

// let test = array.map(x => x.charCodeAt())
// p(test)

let code = array[0].charCodeAt() + 1

let charCode;

for (let i = 1; i<array.length; i++) {
    charCode = array[i].charCodeAt()

    if (charCode != code) {
        console.log(String.fromCharCode(code))
    }
    code += 1
}