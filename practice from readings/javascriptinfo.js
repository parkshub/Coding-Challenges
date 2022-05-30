// ---------------//
// Array Methods //
// --------------//

// task 1

function camelize(string){
    return string.split('-').map((text, index)=> !index==0? text.slice(0,1).toUpperCase() + text.slice(1): text).join('')
}

// task 2

function filterRange(arr, a, b){
    return arr.filter(item=> item>=a && item<b)
}

//main difference between filter and map is that I'm guess...map has no way to not return some form of the original item
// where as filter you can...if that makes sense

// task 3

function filterRangeInPlace(arr, a, b){
    arr.filter((item, index)=> !(item>=a && item<=b)).map(x=>arr.indexOf(x)).map(x=>arr.splice(x,x))
}

// whats the difference between map and foreach?

//task 4

function decrease(arr){
    arr.sort((a,b) => b-a)
}

