// const fs = require('fs'); 
import fetch from "node-fetch";
import jsdom from "jsdom";
// const dom = new jsdom.JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom)
// console.log(dom.window.document.querySelector("p").textContent); // 'Hello world'
// console.log('first')

// const url = 'https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge'
const url = 'https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/616e63'
let doc;

await fetch(url)
  .then(response => {return response.text()})
  .then(data => {
    doc = document.createElement('template')
    doc.innerHTML = data
    console.log(doc.querySelector('body'))
  })
  

// console.log(test)