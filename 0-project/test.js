const fs = require('fs')
const data = fs.readFileSync('input.txt', 'utf8')
let [N, K] = data.split(' ')
let d = [...Array(+N-1)].reduce((a,b)=>{
return a+=a*K
},1)

fs.writeFileSync('output.txt', `${d}`, 'utf8');