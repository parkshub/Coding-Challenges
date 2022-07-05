// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    return str.split(' ').map(x => x.split('')).map(x => x.reverse()).map((x, i)=> x.join('')).join(' ')
}