function isPangram(string){
    let lowerCase = string.toLowerCase().replace(/[^a-z]/g, '')
    let unique = [...new Set([...lowerCase])]
    return unique.length === 26
  }