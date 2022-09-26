function findMissingLetter(array)
{
  let code = array[0].charCodeAt() + 1
  let charCode;

  for (let i = 1; i<array.length; i++) {
      charCode = array[i].charCodeAt()

      if (charCode != code) {
          return String.fromCharCode(code)
      }
      code += 1
  }
}