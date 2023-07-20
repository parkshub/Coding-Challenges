// const fs = require('fs'); 
import fetch from "node-fetch";
import jsdom from "jsdom";
// const dom = new jsdom.JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom)
// console.log(dom.window.document.querySelector("p").textContent); // 'Hello world'
// console.log('first')

const url = 'https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge'
const data = await jsdom.JSDOM.fromURL(url)
// const doc = new jsdom.JSDOM(data)
console.log(new jsdom.JSDOM(data))

// const test = doc.window.document.querySelector('ul')
// console.log(test)

const dom = new jsdom.JSDOM(``, {
    url: url,
    referrer: url,
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000
  });


console.log(dom.window.document.querySelector('ul'))