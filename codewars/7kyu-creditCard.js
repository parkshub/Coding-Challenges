// Credit Card Mask
//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it. Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
    let sliced = cc.split('')
    
    if (sliced.length > 3) {
      for (let i=sliced.length-5; i>=0; i--){
        sliced.splice(i,1, '#')
      }
      return sliced.join('')
    } else {
      return cc
    }
  }