log = console.log

//Once upon a time, on a way through the old wild mountainous west,…
//… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
//Task
//Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

function dirReduc(arr) {
    let dir = {'NORTH': 1, 'SOUTH': -1, 'EAST': 2, 'WEST': -2}

    function recur(array){
        for (let i=0; i<array.length; i++) {
            log(i, array)
            if (dir[array[i]]+dir[array[i+1]]!=0 && 
                dir[array[i]]+dir[array[i-1]]!=0) {
                array.slice(i, 2)
                recur(array)
            }
        }
        return array
    }

    recur(arr)
    return arr
}

// log(dirReduc(['NORTH', 'WEST', 'EAST', 'SOUTH', 'EAST', 'NORTH']))

// could not solve