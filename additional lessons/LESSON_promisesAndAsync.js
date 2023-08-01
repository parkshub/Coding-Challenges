import fetch from "node-fetch"

//////////////
// Method 1//
/////////////
// const num = 45
// const promises = []
// function getValues(values) {
//     const arr = []
//     values.forEach(x => arr.push(x.properties.periods[0].temperature))
//     return arr
// }
// for (let i = 0; i < 5; i++) {
//     promises.push(
//         fetch(`https://api.weather.gov/gridpoints/LOX/155,${ num + i }/forecast`)
//             .then(response => response.json())
//         )
// }
// Promise.all(promises)
//     .then(getValues)
//     .then(arr => console.log(arr))

// //////////////
// // Method 2//
// /////////////

async function fetchData() {
    try {
        const response = await fetch(`https://api.weathe.gov/gridpoints/LOX/155,45/forecast`) // there is an intentional typo here
        const data = await response.json()
        const temp = data.properties.periods[0].temperature
        return temp
    } catch (error) {
        return `this is the error ${error}`
    }

}

console.log(await fetchData())

//////////////
// Method 3//
/////////////

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         fetch(`https://api.weathe.gov/gridpoints/LOX/155,45/forecast`) // there is a typo in weather to make it fail
//             .then(response => response.json())
//             .then(data => resolve(data.properties.periods[0].temperature))
//             .catch(error => reject(`this is the error: ${error}`))
//     })
// }

// await fetchData()
//     .then(response => console.log(response))
//     .catch(error => console.log(error)) // so to catch the rejection from the promise you need to do another catch block here, which is kind of inconvenient