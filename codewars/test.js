let a = 'bbdd kk eee ooo ppp qqttzz' // false

// 

// let a = 'cc dd hh kk rr uuuuu vv zz' // true

// console.log(a.split('').sort().join(''))


function permuteAPalindrome (input) {
    const even = input.length % 2 === 0 ? true : false
    let counter = 0

    for (i of input.split('')) {
        
        const reg = new RegExp(i, 'gi')
        input.match(reg).length % 2 !== 0 && (counter += 1)
        // console.log(input.match(reg))
        // console.log(counter)

        // if (counter > 1) { return false }
    }

    console.log('this is counter', counter)
    console.log('this is even', even)

    return even && counter === 0 || even && counter % 2 === 0 || !even && counter % 2 !== 0 || !even && counter === 1

}

console.log(permuteAPalindrome(a))