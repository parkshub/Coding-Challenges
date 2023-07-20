///////////////////////
// Template Literals //
///////////////////////

// examples of other literal
// object literals {}
// boolean literal true, false
// string literals '', ""
// template literals ``

// template literals allow you to break a line or add indentations by simply adding them to your string instead of using \n or \t
// it also allows you to add dynamic variables using ${variable}
const name = 'Dude'
const templateLiteral = // this will print exactly the way you write, good for emails
`Hello ${name},

I hope this email find you well.
  This is indented.

Best,
Andrew`;

// console.log(templateLiteral);