// Who likes this?
//   You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

function likes(names) {
    if (names.length == 0) {
        return 'no one likes this'
    }
    else if (names.length == 1) {
        return names.join(' and ') + ' likes this'
    }
    else if (names.length == 2) {
        return names.join(' and ') + ' like this'
    }
    else if (names.length == 3) {
        return names.slice(0,2).join(', ') + ' and ' + names.slice(-1) + ' like this'
    }
    else {
        return names.slice(0,2).join(', ') + ` and ${names.slice(2).length} others like this`
    }

}