// Sum of Digits/ Digital Root

//Digital root is the recursive sum of all the digits in a number.
//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n){
    let add = 0
    let new_n = String(n).split('')
    
    new_n.map(x=>{add+=Number(x)})

    if (add>=10){
        return digital_root(add)
    } else {
        return add
    }
}

// Bouncing Balls

//A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// His mother looks out of a window 1.5 meters from the ground.
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

function bouncingBall(h,  bounce,  window) {
    let counter = 1
    
    if(h>0 && bounce>0 && bounce<1 && window < h){
        h*=bounce
      
        while (h>window){
            if (h==window){
                counter +=1
            } else {
                counter +=2
            }
            h*=bounce
        }
        return counter
    }
    else {
        return -1
    }
  }