// --------------------//
// ELOQUENT JAVASCRIPT //
// --------------------//

// chapter 2
//-----------

// short-circuiting of logical operatrs
console.log(null || "user")

// using a variable as a condition will result in true everytime besides when empty '' or NaN
let a='string'
if (a){
    console.log('cool')
}


let b=NaN
if (b){
    console.log('cool')
}

let c=''
if (c){
    console.log('cool')
}

// exercise 2.1
let tri = '#'
for (i=0; i<=6; i++){
    console.log(tri)
    tri+='#'
}

// exercise 2.2
for (i=1; i<=100; i++){
    if (i%3==0 && i%5==0){
        console.log('FizzBuzz')
    }
    else if (i%3==0){
        console.log('Fizz')
    }
    else if (i%5==0){
        console.log('Buzz')
    }
    else {
        console.log(i)
    }
}

// exercise 2.3

function chess(width, height){

    let board='';

    for (let i=1; i<=height; i++){

        if (i%2==0){ // even rows

            for (let j=1; j<=width; j++){
                if (j%2==0){
                    board+=' '
                }
                else{
                    board+='#'
                }

                if (j==width){
                    board+='\n'
                }

            }

        }

        else { // odd rows, first row

            for (let k=1; k<=width; k++){
                if (k%2==0){
                    board+='#'
                }
                else{
                    board+=' '
                }

                if (k==width){
                    board+='\n'
                }
            }
        }
    }
    return board
}

console.log(chess(10,10))


// chapter 3
//-----------

// I dont understand closures at all
function multiplier(factor) {
    return number => number * factor;
  }
  
  let twice = multiplier(2);
  console.log(twice(5));
  // → 10
// how does this produce 10?

// okay i get it a little bit
// so the first call is defining a new function that we store in "twice." new function has one parameter, number, and is defined by number * 2.


// recursion
function power(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }


console.log(power(2,3))

function findSolution(target) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        return find(current + 5, `(${history} + 5)`) ||
               find(current * 3, `(${history} * 3)`);
      }
    }
    return find(1, "1");
  }
// this is mind blowing, but dont fully understand

// exercise 3.1

function min(a,b){
    if (a>b){
        return b
    } else {
        return a
    }
}

// exercise 3.2
// looked at solution for hints
function isEven(num){
    if (num==0){
        return true
    } else if (num==1) {
        return false
    } else if (num<0) {
        return isEven(-num)
    }
    else {
        return isEven(num-2)
    }
}

// exercise 3.3
function countBs(word){
    let counter = 0
    for (i=0; i<word.length; i++){
        if (word[i]=='b'){
            counter+=1
        } else{
            counter+=0
        }
    }
    return counter
}


// chapter 4
//-----------

// exercise 4.1

function range(start, end, step=1) {
    let a=[]
    for (let i=start; i<=end; i++){
        a.push(i)
    }

    if (step==-1){
        return a.reverse()
    } else {
        return a
    }
}

function sum(numbers){
    let a = 0
    let denom = numbers.length
    for (let num of numbers){
        a+=num
    }
    return a/denom
}

// exercise 4.2

function arrayToList([...numbers]){
    revNum = numbers.reverse()

    let list = null
    for (let num of revNum){
        list = {value: num, rest: list}
        // list.value = num  this will not work
        // list.rest = list
    }
    return list
}

function listToArray(list){
    let array = []
    for (let node=list; node; node=node.rest){
        array.push(node.value)
    }
    return array
}

function prepend(element, list){
    let newList = {value: element, rest:list}
    return newList
}

function nth(list, n){
    let array = listToArray(list)
    let output = array[n]
    return output
}
// recursive version doesn't use the listToArray function
// had to look at solution
function nthRec(list, n){
    if (n==0){
        return list.value
    }
    else{
        return nthRec(list.rest, n-1)
    }
}

// exercise 4.3
// try again tmrw
function deepEqual(val1, val2){
    
    let key1 = Object.keys(val1)
    let key2 = Object.keys(val2)

    if (val1===val2){
        return true
    }

    if(val1===null || val2===null){
        if (val1===null && val2===null){
            return true
        } else {
            return false
        }
    }

    if(typeof(val1)==typeof(val2) && typeof(val1)!=='object'){
        console.log('here3')
        if(!val1==val2){
            return false
        }
    }

    if(key1.length==key2.length && key1.length!==0){
        for (let i=0; i<length-1; i++){
            if (deepEqual(key1[i],key2[i]) || deepEqual(val1[key1[i]],val2[key2[i]])){ // replace with deep equal both of them 
                console.log('here1')
                return false
            }
        }
    } 
    console.log('here2')
    return true
}
