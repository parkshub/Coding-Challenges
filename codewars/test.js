p = console.log

let text = 'uldghwcx wxl ody'

let textSplit = text.split(' ')
let max = Math.max(...textSplit.map(x => x.length))

let headFoot = '\*'.repeat(max + 4)

let rvrs = textSplit.map(x => [...x].reverse().join(''))

let starred = rvrs.map(x => `\* ${x}${' '.repeat(max - x.length+1)}\*`)

starred.push(headFoot)
starred.unshift(headFoot)

p(starred.join('\n'))

// p('************\n* xcwhgdlu *\n* lxw      *\n* ydo      *\n************')